import { MongoClient } from 'mongodb';
import { config } from './config.js';
import { ZeroXService } from './zeroXService.js';
import { JupiterService } from './jupiterService.js';

const zeroXService = new ZeroXService();
const jupiterService = new JupiterService();

function formatAmount(amount, decimals, symbol) {
    const humanReadable = (parseFloat(amount) / Math.pow(10, decimals)).toFixed(decimals);
    return `${humanReadable} ${symbol} (${amount} raw)`;
}

function adjustDecimals(amount, fromDecimals, toDecimals) {
    if (fromDecimals === toDecimals) return amount;
    
    const amountStr = amount.toString();
    
    // If moving to more decimals, multiply by the difference
    if (fromDecimals < toDecimals) {
        const difference = toDecimals - fromDecimals;
        return amountStr + '0'.repeat(difference);
    }
    
    // If moving to fewer decimals, remove the extra decimal places
    const difference = fromDecimals - toDecimals;
    return amountStr.slice(0, -difference);
}

function calculateGasCostInUsdc(quote) {
    // Get gas units and price from quote
    const gasUnits = parseInt(quote.gas || quote.estimatedGas);
    const gasPriceWei = parseInt(quote.gasPrice);
    const ethToUsdRate = parseFloat(quote.sellTokenToEthRate);
    
    // Calculate total gas cost in wei
    const gasCostWei = gasUnits * gasPriceWei;
    
    // Convert wei to ETH (1 ETH = 10^18 wei)
    const gasCostEth = gasCostWei / 1e18;
    
    // Convert ETH to USDC using the rate
    const gasCostUsdc = gasCostEth * ethToUsdRate;
    
    return gasCostUsdc;
}

async function processArbitrageOpportunity(opportunity) {
    const { buyChain, sellChain, buyAddress, sellAddress, tokenSymbol, ethereumRole } = opportunity;
    const startTime = new Date();
    console.log(`[${startTime.toISOString()}] Processing arbitrage opportunity for ${tokenSymbol}`);
    console.log('Buy Chain:', buyChain);
    console.log('Sell Chain:', sellChain);
    if (ethereumRole) {
        console.log('Ethereum Role:', ethereumRole);
    }

    try {
        // Get token metadata for both chains
        let buyToken, buyUsdc, sellToken, sellUsdc;
        
        // Get metadata for buy chain
        if (buyChain !== 'solana') {
            [buyToken, buyUsdc] = await Promise.all([
                zeroXService.tokenService.getTokenMetadata(buyChain, buyAddress),
                zeroXService.tokenService.getTokenMetadata(buyChain, config.tokens.usdc[buyChain])
            ]);
        }
        
        // Get metadata for sell chain
        if (sellChain !== 'solana') {
            [sellToken, sellUsdc] = await Promise.all([
                zeroXService.tokenService.getTokenMetadata(sellChain, sellAddress),
                zeroXService.tokenService.getTokenMetadata(sellChain, config.tokens.usdc[sellChain])
            ]);
        }

        // Get USDC decimals for each chain
        const buyUsdcDecimals = buyChain === 'solana' ? 6 : buyUsdc.decimals;
        const sellUsdcDecimals = sellChain === 'solana' ? 6 : sellUsdc.decimals;

        // Start with 1000 USDC (using buy chain decimals)
        const startUsdcAmount = '1000' + '0'.repeat(buyUsdcDecimals);

        // Handle buy side
        console.log('\nProcessing buy side...');
        let buyQuote;
        let tokenAmountReceived;
        let buyTokenDecimals;

        if (buyChain === 'solana') {
            buyQuote = await jupiterService.getSwapQuote(
                config.tokens.usdc.solana,
                buyAddress,
                startUsdcAmount
            );
            tokenAmountReceived = buyQuote.outAmount;
            buyTokenDecimals = buyQuote.outputDecimals;

            // Log Jupiter route details
            console.log('\nBuy Route Details:');
            buyQuote.routePlan.forEach((route, index) => {
                const inDecimals = route.swapInfo.inputMint === config.tokens.usdc.solana ? 6 : buyTokenDecimals;
                const outDecimals = route.swapInfo.outputMint === config.tokens.usdc.solana ? 6 : buyTokenDecimals;
                console.log(`\nStep ${index + 1}: ${route.swapInfo.label} (${route.percent}%)`);
                console.log('Input:', formatAmount(route.swapInfo.inAmount, inDecimals,
                    route.swapInfo.inputMint === config.tokens.usdc.solana ? 'USDC' : tokenSymbol));
                console.log('Output:', formatAmount(route.swapInfo.outAmount, outDecimals,
                    route.swapInfo.outputMint === config.tokens.usdc.solana ? 'USDC' : tokenSymbol));
            });
        } else {
            buyQuote = await zeroXService.getSwapQuote(
                buyChain,
                config.tokens.usdc[buyChain],
                buyAddress,
                startUsdcAmount,
                buyUsdcDecimals
            );
            tokenAmountReceived = buyQuote.buyAmount;
            buyTokenDecimals = buyToken.decimals;
        }

        // Handle sell side
        console.log('\nProcessing sell side...');
        let sellQuote;
        let sellTokenDecimals = sellChain === 'solana' ? 8 : sellToken.decimals;
        
        // Adjust token amount for cross-chain transfer if needed
        let adjustedTokenAmount = tokenAmountReceived;
        if (buyChain !== sellChain) {
            adjustedTokenAmount = adjustDecimals(tokenAmountReceived, buyTokenDecimals, sellTokenDecimals);
        }

        if (sellChain === 'solana') {
            sellQuote = await jupiterService.getSwapQuote(
                sellAddress,
                config.tokens.usdc.solana,
                adjustedTokenAmount
            );
        } else {
            sellQuote = await zeroXService.getSwapQuote(
                sellChain,
                sellAddress,
                config.tokens.usdc[sellChain],
                adjustedTokenAmount,
                sellTokenDecimals
            );
        }

        const endTime = new Date();
        const totalDuration = endTime - startTime;

        // Calculate final amounts using appropriate decimals
        const initialUsdcAmount = parseFloat(startUsdcAmount) / Math.pow(10, buyUsdcDecimals);
        const tokenAmount = parseFloat(tokenAmountReceived) / Math.pow(10, buyTokenDecimals);
        const finalUsdcAmount = parseFloat(sellChain === 'solana' ? sellQuote.outAmount : sellQuote.buyAmount) / Math.pow(10, sellUsdcDecimals);
        
        // Calculate gas costs if ethereum is involved
        let gasCost = 0;
        let gasDetails = null;
        if (ethereumRole === 'buy' && buyChain === 'ethereum') {
            gasCost = calculateGasCostInUsdc(buyQuote);
            gasDetails = {
                gasUnits: buyQuote.gas || buyQuote.estimatedGas,
                gasPriceWei: buyQuote.gasPrice,
                ethToUsdRate: buyQuote.sellTokenToEthRate
            };
        } else if (ethereumRole === 'sell' && sellChain === 'ethereum') {
            gasCost = calculateGasCostInUsdc(sellQuote);
            gasDetails = {
                gasUnits: sellQuote.gas || sellQuote.estimatedGas,
                gasPriceWei: sellQuote.gasPrice,
                ethToUsdRate: sellQuote.sellTokenToEthRate
            };
        }
        
        // Calculate final profit after gas costs
        const profit = finalUsdcAmount - initialUsdcAmount - gasCost;

        console.log('\n=== Arbitrage Results ===');
        console.log('-------------------------');
        console.log(`Token: ${tokenSymbol}`);
        console.log(`Buy Chain: ${buyChain}`);
        console.log(`Sell Chain: ${sellChain}`);
        
        console.log('\nBuy Side:');
        console.log('Input:', formatAmount(startUsdcAmount, buyUsdcDecimals, 'USDC'));
        console.log('Output:', formatAmount(tokenAmountReceived, buyTokenDecimals, tokenSymbol));
        console.log('Price:', (initialUsdcAmount / tokenAmount).toFixed(6), 'USDC per', tokenSymbol);
        if (buyChain === 'solana') {
            console.log('Price Impact:', buyQuote.priceImpactPct + '%');
        }
        
        console.log('\nSell Side:');
        console.log('Input:', formatAmount(adjustedTokenAmount, sellTokenDecimals, tokenSymbol));
        console.log('Output:', formatAmount(
            sellChain === 'solana' ? sellQuote.outAmount : sellQuote.buyAmount,
            sellUsdcDecimals,
            'USDC'
        ));
        console.log('Price:', (finalUsdcAmount / tokenAmount).toFixed(6), 'USDC per', tokenSymbol);
        
        console.log('\nResults:');
        console.log('Initial:', formatAmount(startUsdcAmount, buyUsdcDecimals, 'USDC'));
        console.log('Final:', formatAmount(
            sellChain === 'solana' ? sellQuote.outAmount : sellQuote.buyAmount,
            sellUsdcDecimals,
            'USDC'
        ));

        // Display gas costs if ethereum is involved
        if (gasCost > 0 && gasDetails) {
            console.log('\nGas Details:');
            console.log('Gas Units:', gasDetails.gasUnits);
            console.log('Gas Price:', gasDetails.gasPriceWei, 'wei');
            console.log('ETH/USD Rate:', gasDetails.ethToUsdRate);
            console.log('Total Gas Cost:', gasCost.toFixed(6), 'USDC');
        }

        console.log('Potential Profit:', formatAmount(
            Math.round(profit * Math.pow(10, sellUsdcDecimals)).toString(),
            sellUsdcDecimals,
            'USDC'
        ));
        console.log('Processing Time:', totalDuration, 'ms');

        console.log('\nToken Information:');
        console.log('USDC:', {
            [buyChain]: buyUsdcDecimals,
            [sellChain]: sellUsdcDecimals,
            'decimals': 'varies by chain'
        });
        console.log(`${tokenSymbol}:`, {
            [buyChain]: buyTokenDecimals,
            [sellChain]: sellTokenDecimals
        });

        return {
            success: true,
            profit,
            gasCost: gasCost > 0 ? gasCost : undefined,
            gasDetails,
            buyPrice: initialUsdcAmount / tokenAmount,
            sellPrice: finalUsdcAmount / tokenAmount,
            processingTime: totalDuration,
            tokenDecimals: {
                [buyChain]: buyTokenDecimals,
                [sellChain]: sellTokenDecimals
            }
        };

    } catch (error) {
        console.error(`[${new Date().toISOString()}] Error processing arbitrage opportunity:`, error);
        return {
            success: false,
            error: error.message
        };
    }
}

async function watchArbitrageCollection() {
    const client = new MongoClient(config.mongodb.uri);

    try {
        await client.connect();
        console.log('Connected to MongoDB');

        const database = client.db(config.mongodb.dbName);
        const collection = database.collection(config.mongodb.collection);

        // Create a change stream
        const changeStream = collection.watch();

        // Listen for changes
        changeStream.on('change', async (change) => {
            if (change.operationType === 'insert' || change.operationType === 'update') {
                const opportunity = change.fullDocument;
                console.log('\nNew arbitrage opportunity detected:', opportunity);

                const result = await processArbitrageOpportunity(opportunity);
                if (result.success) {
                    console.log(`\nArbitrage processed successfully:`);
                    if (result.gasCost) {
                        console.log('\nGas Details:');
                        console.log('Gas Units:', result.gasDetails.gasUnits);
                        console.log('Gas Price:', result.gasDetails.gasPriceWei, 'wei');
                        console.log('ETH/USD Rate:', result.gasDetails.ethToUsdRate);
                        console.log('Total Gas Cost:', result.gasCost.toFixed(6), 'USDC');
                    }
                    console.log(`Profit: ${result.profit.toFixed(6)} USDC`);
                    console.log(`Buy Price: ${result.buyPrice.toFixed(6)} USDC`);
                    console.log(`Sell Price: ${result.sellPrice.toFixed(6)} USDC`);
                    console.log(`Processing Time: ${result.processingTime}ms`);
                    console.log('Token Decimals:', result.tokenDecimals);
                } else {
                    console.error('Failed to process arbitrage:', result.error);
                }
            }
        });

        console.log('Watching for changes in arbitrage collection...');

        // Handle application termination
        process.on('SIGINT', async () => {
            console.log('Closing MongoDB connection...');
            await changeStream.close();
            await client.close();
            process.exit();
        });

    } catch (error) {
        console.error('Error:', error);
        await client.close();
    }
}

// Start the application
watchArbitrageCollection().catch(console.error);
