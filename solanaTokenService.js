import axios from 'axios';

export class SolanaTokenService {
    constructor() {
        this.metadataCache = new Map();

        // Known token decimals for fallback
        this.knownTokens = {
            'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v': { decimals: 6, symbol: 'USDC' }, // Solana USDC
        };
    }

    async getTokenMetadata(mintAddress) {
        if (this.metadataCache.has(mintAddress)) {
            return this.metadataCache.get(mintAddress);
        }

        // Check if we have known metadata for this token
        if (this.knownTokens[mintAddress]) {
            console.log(`Using known metadata for ${mintAddress}:`, this.knownTokens[mintAddress]);
            this.metadataCache.set(mintAddress, this.knownTokens[mintAddress]);
            return this.knownTokens[mintAddress];
        }

        try {
            console.log(`\nFetching Solana token metadata for ${mintAddress}...`);
            
            const response = await axios.get(`https://api.solana.fm/v1/tokens/${mintAddress}`, {
                headers: {
                    'accept': 'application/json'
                }
            });

            const tokenData = response.data;
            const metadata = {
                decimals: tokenData.decimals,
                symbol: tokenData.tokenList?.symbol || 'UNKNOWN',
                address: mintAddress,
                name: tokenData.tokenList?.name || 'Unknown Token'
            };

            console.log('Solana token metadata:', metadata);
            this.metadataCache.set(mintAddress, metadata);
            return metadata;
        } catch (error) {
            console.error(`Error fetching Solana token metadata for ${mintAddress}:`, error.message);
            
            // Default to 8 decimals if all else fails
            const defaultMetadata = {
                decimals: 8,
                symbol: 'UNKNOWN',
                address: mintAddress,
                name: 'Unknown Token'
            };
            console.warn(`Using default metadata for ${mintAddress}:`, defaultMetadata);
            this.metadataCache.set(mintAddress, defaultMetadata);
            return defaultMetadata;
        }
    }
}
