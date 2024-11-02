import axios from 'axios';
import { config } from './config.js';
import { TokenService } from './tokenService.js';

export class ZeroXService {
    constructor() {
        this.apiKey = config.zeroX.apiKey;
        this.endpoints = config.zeroX.endpoints;
        this.tokenService = new TokenService();
    }

    async getSwapQuote(chainName, sellToken, buyToken, sellAmount, sellTokenDecimals) {
        const endpoint = this.endpoints[chainName];
        if (!endpoint) {
            throw new Error(`Unsupported chain: ${chainName}`);
        }

        console.log(`\n[${new Date().toISOString()}] Getting ${chainName} quote...`);
        
        // Don't multiply by additional decimals, use the raw amount directly
        const params = {
            sellToken,
            buyToken,
            sellAmount: sellAmount.toString(),
            slippagePercentage: '0.01'
        };

        console.log('\nRequest:');
        console.log('URL:', `${endpoint}/swap/v1/quote`);
        console.log('Params:', params);

        try {
            const response = await axios.get(`${endpoint}/swap/v1/quote`, {
                headers: {
                    '0x-api-key': this.apiKey
                },
                params
            });

            const endTime = new Date();
            console.log(`\n[${endTime.toISOString()}] Response received:`);
            console.log(JSON.stringify(response.data, null, 2));
            
            return response.data;
        } catch (error) {
            console.error(`Error getting swap quote for ${chainName}:`, error.message);
            if (error.response?.data) {
                console.error('API Error Details:', error.response.data);
            }
            throw error;
        }
    }

    async processArbitrageOpportunity(opportunity) {
        const { buyChain, sellChain, buyAddress, sellAddress } = opportunity;
        const startTime = new Date();
        console.log(`\n[${startTime.toISOString()}] Starting arbitrage opportunity processing...`);

        try {
            // Get token metadata using ERC20 interface
            console.log('\nFetching token metadata...');
            const [buyTokenMeta, sellTokenMeta, buyUsdcMeta, sellUsdcMeta] = await Promise.all([
                this.tokenService.getTokenMetadata(buyChain, buyAddress),
                this.tokenService.getTokenMetadata(sellChain, sellAddress),
                this.tokenService.getTokenMetadata(buyChain, config.tokens.usdc[buyChain]),
                this.tokenService.getTokenMetadata(sellChain, config.tokens.usdc[sellChain])
            ]);

            console.log('\nToken Metadata:');
            console.log('Buy Token:', buyTokenMeta);
            console.log('Sell Token:', sellTokenMeta);
            console.log('Buy USDC:', buyUsdcMeta);
            console.log('Sell USDC:', sellUsdcMeta);

            // Start with 1000 USDC
            const startAmount = 1000;
            
            // Get buy side quote (USDC -> Token)
            console.log('\nProcessing buy side...');
            const buyQuote = await this.getSwapQuote(
                buyChain,
                config.tokens.usdc[buyChain],
                buyAddress,
                this.tokenService.parseUnits(startAmount.toString(), buyUsdcMeta.decimals),
                buyUsdcMeta.decimals
            );

            // Calculate token amount received from buy
            const tokenAmount = this.tokenService.formatUnits(buyQuote.buyAmount, buyTokenMeta.decimals);
            
            // Get sell side quote (Token -> USDC)
            console.log('\nProcessing sell side...');
            const sellQuote = await this.getSwapQuote(
                sellChain,
                sellAddress,
                config.tokens.usdc[sellChain],
                this.tokenService.parseUnits(tokenAmount.toString(), sellTokenMeta.decimals),
                sellTokenMeta.decimals
            );

            const endTime = new Date();
            const totalDuration = endTime - startTime;
            console.log(`\n[${endTime.toISOString()}] Total processing time: ${totalDuration}ms`);

            // Calculate final USDC amount
            const finalUsdcAmount = this.tokenService.formatUnits(sellQuote.buyAmount, sellUsdcMeta.decimals);
            const profit = parseFloat(finalUsdcAmount) - startAmount;

            return {
                buyQuote,
                sellQuote,
                tokenAmount,
                startUsdcAmount: startAmount,
                finalUsdcAmount: parseFloat(finalUsdcAmount),
                potentialProfit: profit,
                processingTime: totalDuration,
                metadata: {
                    buyToken: buyTokenMeta,
                    sellToken: sellTokenMeta,
                    buyUsdc: buyUsdcMeta,
                    sellUsdc: sellUsdcMeta
                }
            };
        } catch (error) {
            console.error(`\n[${new Date().toISOString()}] Error processing arbitrage opportunity:`, error);
            throw error;
        }
    }
}
