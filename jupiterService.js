import axios from 'axios';
import { SolanaTokenService } from './solanaTokenService.js';

export class JupiterService {
    constructor() {
        this.baseUrl = 'https://quote-api.jup.ag/v6';
        this.tokenService = new SolanaTokenService();
    }

    async getSwapQuote(inputMint, outputMint, amount, slippageBps = 100) {
        try {
            console.log(`\n[${new Date().toISOString()}] Getting Jupiter quote...`);
            
            // Get token decimals
            const [inputToken, outputToken] = await Promise.all([
                this.tokenService.getTokenMetadata(inputMint),
                this.tokenService.getTokenMetadata(outputMint)
            ]);

            console.log('\nToken Decimals:');
            console.log(`Input Token (${inputMint}):`, inputToken.decimals);
            console.log(`Output Token (${outputMint}):`, outputToken.decimals);

            const url = `${this.baseUrl}/quote`;
            const params = {
                inputMint,
                outputMint,
                amount,
                slippageBps,
                onlyDirectRoutes: false
            };

            console.log('\nRequest:');
            console.log('URL:', url);
            console.log('Params:', params);

            const response = await axios.get(url, { params });
            
            console.log(`\n[${new Date().toISOString()}] Response received:`);
            console.log(JSON.stringify(response.data, null, 2));

            // Add decimals to the response
            return {
                ...response.data,
                inputDecimals: inputToken.decimals,
                outputDecimals: outputToken.decimals
            };
        } catch (error) {
            console.error('Error getting Jupiter quote:', error.message);
            if (error.response?.data) {
                console.error('API Error Details:', error.response.data);
            }
            throw error;
        }
    }

    // Convert price to a standardized format
    normalizePrice(inputAmount, outputAmount, inputDecimals, outputDecimals) {
        const normalizedInput = inputAmount / Math.pow(10, inputDecimals);
        const normalizedOutput = outputAmount / Math.pow(10, outputDecimals);
        return normalizedOutput / normalizedInput;
    }
}
