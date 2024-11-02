import { ZeroXService } from './zeroXService.js';

const testDocument = {
    "tokenSymbol": "TRUMP",
    "sellChain": "base",
    "sellAddress": "0x57F5fbD3DE65DFC0bd3630F732969e5fb97E6d37",
    "sellPrice": 4.153107683805349,
    "buyChain": "ethereum",
    "buyAddress": "0x576e2BeD8F7b46D34016198911Cdf9886f78bea7",
    "buyPrice": 4.102277169382412,
    "priceDifferencePercent": "1.239",
    "ethereumRole": "buy"
};

async function runTest() {
    const startTime = new Date();
    console.log(`[${startTime.toISOString()}] Starting test with document:`, testDocument);
    
    const zeroXService = new ZeroXService();
    
    try {
        const quotes = await zeroXService.processArbitrageOpportunity(testDocument);
        
        console.log('\n=== Final Test Results ===');
        console.log('-------------------------');
        console.log(`Token Symbol: ${testDocument.tokenSymbol}`);
        console.log(`Buy Chain: ${testDocument.buyChain}`);
        console.log(`Sell Chain: ${testDocument.sellChain}`);
        
        console.log('\nToken Metadata:');
        console.log('Buy Token:', quotes.metadata.buyToken);
        console.log('Sell Token:', quotes.metadata.sellToken);
        console.log('Buy USDC:', quotes.metadata.buyUsdc);
        console.log('Sell USDC:', quotes.metadata.sellUsdc);
        
        console.log('\nBuy Quote Summary (USDC -> Token):');
        console.log('Price:', quotes.buyQuote.price);
        console.log('Amount In:', quotes.startUsdcAmount, 'USDC');
        console.log('Amount Out:', quotes.tokenAmount, quotes.metadata.buyToken.symbol);
        console.log('Estimated Gas:', quotes.buyQuote.estimatedGas);
        console.log('Protocol:', quotes.buyQuote.sources?.find(s => s.proportion !== '0')?.name || 'Unknown');
        
        console.log('\nSell Quote Summary (Token -> USDC):');
        console.log('Price:', quotes.sellQuote.price);
        console.log('Amount In:', quotes.tokenAmount, quotes.metadata.sellToken.symbol);
        console.log('Amount Out:', quotes.finalUsdcAmount, 'USDC');
        console.log('Estimated Gas:', quotes.sellQuote.estimatedGas);
        console.log('Protocol:', quotes.sellQuote.sources?.find(s => s.proportion !== '0')?.name || 'Unknown');
        
        console.log('\nResults:');
        console.log('Initial USDC:', quotes.startUsdcAmount);
        console.log('Final USDC:', quotes.finalUsdcAmount);
        console.log('Potential Profit (USDC):', quotes.potentialProfit);
        console.log('Total Processing Time:', quotes.processingTime, 'ms');
        
    } catch (error) {
        console.error(`[${new Date().toISOString()}] Test failed:`, error.message);
        if (error.response?.data) {
            console.error('API Error Details:', error.response.data);
        }
    }
}

// Run the test
runTest().catch(console.error);
