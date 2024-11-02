import { ZeroXService } from './zeroXService.js';
import { JupiterService } from './jupiterService.js';
import { config } from './config.js';

const testDocument = {
    "tokenSymbol": "TRUMP",
    "sellChain": "base",
    "sellAddress": "0x57F5fbD3DE65DFC0bd3630F732969e5fb97E6d37",
    "sellPrice": 4.155586782888221,
    "buyChain": "solana",
    "buyAddress": "HaP8r3ksG76PhQLTqR8FYBeNiQpejcFbQmiHbg787Ut1",
    "buyPrice": 4.08721126,
    "priceDifferencePercent": "1.673",
    "ethereumRole": "not_involved"
};

function formatAmount(amount, decimals, symbol) {
    const humanReadable = (parseFloat(amount) / Math.pow(10, decimals)).toFixed(decimals);
    return `${humanReadable} ${symbol} (${amount} raw)`;
}

function adjustDecimals(amount, fromDecimals, toDecimals) {
    if (fromDecimals === toDecimals) return amount;
    
    // If moving to more decimals, multiply by the difference
    if (fromDecimals < toDecimals) {
        const difference = toDecimals - fromDecimals;
        return amount + '0'.repeat(difference);
    }
    
    // If moving to fewer decimals, this should be handled carefully
    // as it might result in loss of precision
    const difference = fromDecimals - toDecimals;
    return amount.slice(0, -difference);
}

async function runTest() {
    const startTime = new Date();
    console.log(`[${startTime.toISOString()}] Starting Solana cross-chain test with document:`, testDocument);
    
    const zeroXService = new ZeroXService();
    const jupiterService = new JupiterService();
    
    try {
        // Get token metadata for Base tokens
        console.log('\nFetching Base token metadata...');
        const [sellToken, sellUsdc] = await Promise.all([
            zeroXService.tokenService.getTokenMetadata('base', testDocument.sellAddress),
            zeroXService.tokenService.getTokenMetadata('base', config.tokens.usdc.base)
        ]);

        // For Solana, we'll use Jupiter's quote API which includes token info
        console.log('\nProcessing buy side on Solana...');
        const startUsdcAmount = '1000000000'; // 1000 USDC (6 decimals)
        const buyQuote = await jupiterService.getSwapQuote(
            config.tokens.usdc.solana,
            testDocument.buyAddress,
            startUsdcAmount
        );

        // Calculate the amount of tokens received from Jupiter
        const tokenAmountFromJupiter = buyQuote.outAmount;
        console.log('\nToken amount from Jupiter:', tokenAmountFromJupiter, '(8 decimals)');

        // Adjust decimals for Base chain (from 8 to 9 decimals)
        const sellAmountForZeroX = adjustDecimals(tokenAmountFromJupiter, 8, 9);
        console.log('Adjusted amount for Base:', sellAmountForZeroX, '(9 decimals)');

        // Get sell quote from 0x for Base
        console.log('\nProcessing sell side on Base...');
        const sellQuote = await zeroXService.getSwapQuote(
            'base',
            testDocument.sellAddress,
            config.tokens.usdc.base,
            sellAmountForZeroX,
            sellToken.decimals
        );

        const endTime = new Date();
        const totalDuration = endTime - startTime;

        // Calculate final amounts
        const initialUsdcAmount = parseFloat(startUsdcAmount) / Math.pow(10, 6);
        const tokenAmount = parseFloat(tokenAmountFromJupiter) / Math.pow(10, buyQuote.outputDecimals);
        const finalUsdcAmount = parseFloat(sellQuote.buyAmount) / Math.pow(10, sellUsdc.decimals);
        const profit = finalUsdcAmount - initialUsdcAmount;

        console.log('\n=== Final Test Results ===');
        console.log('-------------------------');
        console.log(`Token Symbol: ${testDocument.tokenSymbol}`);
        console.log(`Buy Chain: ${testDocument.buyChain}`);
        console.log(`Sell Chain: ${testDocument.sellChain}`);
        
        console.log('\nBuy Quote Summary (USDC -> Token on Solana):');
        console.log('Input:', formatAmount(startUsdcAmount, 6, 'USDC'));
        console.log('Output:', formatAmount(tokenAmountFromJupiter, buyQuote.outputDecimals, 'TRUMP'));
        console.log('Price:', (initialUsdcAmount / tokenAmount).toFixed(6), 'USDC per TRUMP');
        console.log('Price Impact:', buyQuote.priceImpactPct + '%');
        
        console.log('\nDecimal Adjustment:');
        console.log('Solana Amount (8 decimals):', tokenAmountFromJupiter);
        console.log('Base Amount (9 decimals):', sellAmountForZeroX);
        
        console.log('\nSell Quote Summary (Token -> USDC on Base):');
        console.log('Input:', formatAmount(sellAmountForZeroX, sellToken.decimals, 'TRUMP'));
        console.log('Output:', formatAmount(sellQuote.buyAmount, sellUsdc.decimals, 'USDC'));
        console.log('Price:', (finalUsdcAmount / tokenAmount).toFixed(6), 'USDC per TRUMP');
        console.log('Estimated Gas:', sellQuote.estimatedGas);
        console.log('Protocol:', sellQuote.sources?.find(s => s.proportion !== '0')?.name || 'Unknown');
        
        console.log('\nResults:');
        console.log('Initial:', formatAmount(startUsdcAmount, 6, 'USDC'));
        console.log('Final:', formatAmount(sellQuote.buyAmount, 6, 'USDC'));
        console.log('Potential Profit:', formatAmount(
            Math.round(profit * Math.pow(10, 6)).toString(),
            6,
            'USDC'
        ));
        console.log('Total Processing Time:', totalDuration, 'ms');
        
        console.log('\nToken Information:');
        console.log('USDC:');
        console.log('- Solana: 6 decimals');
        console.log('- Base:', sellUsdc.decimals, 'decimals');
        console.log('TRUMP:');
        console.log('- Solana:', buyQuote.outputDecimals, 'decimals');
        console.log('- Base:', sellToken.decimals, 'decimals');
        
    } catch (error) {
        console.error(`[${new Date().toISOString()}] Test failed:`, error.message);
        if (error.response?.data) {
            console.error('API Error Details:', error.response.data);
        }
    }
}

// Run the test
runTest().catch(console.error);
