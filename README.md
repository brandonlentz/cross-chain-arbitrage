# Cross-Chain Arbitrage Calculator

A Node.js application that calculates arbitrage opportunities across different blockchain networks (Ethereum, Solana, BSC) with accurate gas cost calculations.

## Features

- Real-time arbitrage calculations across multiple chains
- Accurate gas cost estimation using 0x API data
- Support for cross-chain token transfers
- Decimal handling for different token standards
- MongoDB integration for opportunity tracking

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a config.js file with your API keys and endpoints:
```javascript
export const config = {
    zeroX: {
        apiKey: 'your_0x_api_key',
        endpoints: {
            ethereum: 'https://api.0x.org',
            // Add other chain endpoints
        }
    },
    mongodb: {
        uri: 'your_mongodb_uri',
        dbName: 'your_database_name',
        collection: 'arbitrage_opportunities'
    },
    tokens: {
        usdc: {
            ethereum: 'ethereum_usdc_address',
            // Add other chain addresses
        }
    }
};
```

3. Run the application:
```bash
node index.js
```

## Usage

The application monitors a MongoDB collection for arbitrage opportunities and calculates potential profits accounting for:

- Token price differences across chains
- Gas costs for Ethereum transactions
- Token decimal adjustments
- Cross-chain transfer requirements

## Architecture

- `index.js`: Main application logic and arbitrage calculations
- `zeroXService.js`: Integration with 0x API for price quotes
- `jupiterService.js`: Integration with Jupiter for Solana swaps
- `tokenService.js`: Token metadata and decimal handling
- `solanaTokenService.js`: Solana-specific token operations
