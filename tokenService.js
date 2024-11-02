import { ethers } from "ethers";
import { config } from './config.js';

// Standard ERC20 ABI for decimals() and symbol()
const ERC20_ABI = [
    "function decimals() view returns (uint8)",
    "function symbol() view returns (string)"
];

export class TokenService {
    constructor() {
        this.providers = {
            ethereum: new ethers.JsonRpcProvider(config.rpc.ethereum),
            base: new ethers.JsonRpcProvider(config.rpc.base),
            bsc: new ethers.JsonRpcProvider(config.rpc.bsc)
        };
        this.tokenMetadataCache = new Map();
    }

    async getTokenMetadata(chain, tokenAddress) {
        const cacheKey = `${chain}-${tokenAddress}`;
        if (this.tokenMetadataCache.has(cacheKey)) {
            return this.tokenMetadataCache.get(cacheKey);
        }

        const provider = this.providers[chain];
        if (!provider) {
            throw new Error(`Unsupported chain: ${chain}`);
        }

        try {
            console.log(`\nFetching metadata for token ${tokenAddress} on ${chain}...`);
            const contract = new ethers.Contract(tokenAddress, ERC20_ABI, provider);
            
            // Call decimals() and symbol() on the contract
            const [decimals, symbol] = await Promise.all([
                contract.decimals(),
                contract.symbol()
            ]);

            const metadata = {
                decimals: Number(decimals),
                symbol: symbol,
                address: tokenAddress
            };

            console.log('Metadata retrieved:', metadata);
            this.tokenMetadataCache.set(cacheKey, metadata);
            return metadata;
        } catch (error) {
            console.error(`Error fetching token metadata for ${tokenAddress} on ${chain}:`, error.message);
            // If we can't get the metadata, use some defaults (USDC is 6 decimals, others typically 18)
            const isUsdc = Object.values(config.tokens.usdc).includes(tokenAddress);
            const defaultMetadata = {
                decimals: isUsdc ? 6 : 18,
                symbol: isUsdc ? 'USDC' : 'UNKNOWN',
                address: tokenAddress
            };
            console.log('Using default metadata:', defaultMetadata);
            this.tokenMetadataCache.set(cacheKey, defaultMetadata);
            return defaultMetadata;
        }
    }

    formatUnits(amount, decimals) {
        try {
            return ethers.formatUnits(amount, decimals);
        } catch (error) {
            console.error('Error formatting units:', error.message);
            return amount.toString();
        }
    }

    parseUnits(amount, decimals) {
        try {
            return ethers.parseUnits(amount.toString(), decimals);
        } catch (error) {
            console.error('Error parsing units:', error.message);
            return amount.toString();
        }
    }
}
