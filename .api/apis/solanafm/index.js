"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var oas_1 = __importDefault(require("oas"));
var core_1 = __importDefault(require("api/dist/core"));
var openapi_json_1 = __importDefault(require("./openapi.json"));
var SDK = /** @class */ (function () {
    function SDK() {
        this.spec = oas_1.default.init(openapi_json_1.default);
        this.core = new core_1.default(this.spec, 'solanafm/0.2.9 (api/6.1.2)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    SDK.prototype.config = function (config) {
        this.core.setConfig(config);
    };
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    SDK.prototype.auth = function () {
        var _a;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        (_a = this.core).setAuth.apply(_a, values);
        return this;
    };
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    SDK.prototype.server = function (url, variables) {
        if (variables === void 0) { variables = {}; }
        this.core.setServer(url, variables);
    };
    /**
     * Get tagged accounts
     * <h3>The endpoint supports batch retrieval of accounts with the ability to customise the
     * query</h3>
     *
     * @summary Get tagged accounts
     * @throws FetchError<400, types.GetMultipleAccountsResponse400> Bad Request
     * @throws FetchError<500, types.GetMultipleAccountsResponse500> Internal Server Error
     */
    SDK.prototype.get_multiple_accounts = function (body) {
        return this.core.fetch('/v0/accounts', 'post', body);
    };
    /**
     * Get a specific tagged account
     * <h3>This endpoint returns you the account data related to the account that you queried
     * for given the account hash</h3>
     *
     * @summary Get a specific tagged account
     * @throws FetchError<400, types.GetAccountResponse400> Bad Request
     * @throws FetchError<404, types.GetAccountResponse404> Account Not Found
     * @throws FetchError<500, types.GetAccountResponse500> Internal Server Error
     */
    SDK.prototype.get_account = function (metadata) {
        return this.core.fetch('/v0/accounts/{hash}', 'get', metadata);
    };
    /**
     * Account's Transaction Fees
     * <h3>This endpoint returns you transactions fees accrued by account on a daily basis</h3>
     *
     * @summary Account's Transaction Fees
     * @throws FetchError<400, types.GetAccountTxFeesResponse400> Bad Request
     * @throws FetchError<500, types.GetAccountTxFeesResponse500> Internal Server Error
     */
    SDK.prototype.get_account_tx_fees = function (metadata) {
        return this.core.fetch('/v0/accounts/{hash}/fees', 'get', metadata);
    };
    /**
     * Get Blocks
     * <h3>This endpoint returns you a paginated list of blocks</h3>
     *
     * @summary Get Blocks
     * @throws FetchError<400, types.GetBlocksByPaginationResponse400> Bad Request
     * @throws FetchError<500, types.GetBlocksByPaginationResponse500> Internal Server Error
     */
    SDK.prototype.get_blocks_by_pagination = function (metadata) {
        return this.core.fetch('/v0/blocks', 'get', metadata);
    };
    /**
     * Get Multiple Blocks
     * <h3>This endpoint returns you a list of blocks based on the input block numbers with the
     * ability to customise the query</h3>
     *
     * @summary Get Multiple Blocks
     * @throws FetchError<500, types.GetMultipleBlocksResponse500> Internal Server Error
     */
    SDK.prototype.get_multiple_blocks = function (body) {
        return this.core.fetch('/v0/blocks', 'post', body);
    };
    /**
     * Get A Specific Block
     * <h3>This endpoints returns you the information of the block given the block number</h3>
     *
     * @summary Get A Specific Block
     * @throws FetchError<404, types.GetBlockResponse404> Block Not Found
     * @throws FetchError<500, types.GetBlockResponse500> Internal Server Error
     */
    SDK.prototype.get_block = function (metadata) {
        return this.core.fetch('/v0/blocks/{block_number}', 'get', metadata);
    };
    /**
     * Accounts' Domains
     * <h3>This endpoint retrieves all domains and subdomains owned by the provided account
     * hash</h3>
     *
     * @summary Accounts' Domains
     * @throws FetchError<400, types.GetMultipleDomainsAndSubdomainsByHashResponse400> Bad Request
     * @throws FetchError<500, types.GetMultipleDomainsAndSubdomainsByHashResponse500> Internal Server Error
     */
    SDK.prototype.get_multiple_domains_and_subdomains_by_hash = function (body) {
        return this.core.fetch('/v0/domains/bonfida', 'post', body);
    };
    /**
     * Account Favourite Domain
     * <h3>This endpoint returns you the favourited domain of the account hash provided</h3>
     *
     * @summary Account Favourite Domain
     * @throws FetchError<400, types.GetFavouriteDomainsByMultipleAccountsResponse400> Bad Request
     * @throws FetchError<500, types.GetFavouriteDomainsByMultipleAccountsResponse500> Internal Server Error
     */
    SDK.prototype.get_favourite_domains_by_multiple_accounts = function (body) {
        return this.core.fetch('/v0/domains/bonfida/favourites', 'post', body);
    };
    /**
     * Get User's Favourite Domains
     * <h3>This endpoint returns you a list of domains that are set as favourite by the account
     * hash provided</h3>
     *
     * @summary Get User's Favourite Domains
     * @throws FetchError<500, types.GetFavouriteDomainsByAccountResponse500> Internal Server Error
     */
    SDK.prototype.get_favourite_domains_by_account = function (metadata) {
        return this.core.fetch('/v0/domains/bonfida/favourites/{hash}', 'get', metadata);
    };
    /**
     * Subdomains Of Multiple Accounts
     * <h3>This endpoint returns you a list of subdomains owned based on the account hashes
     * that you input</h3>
     *
     * @summary Subdomains Of Multiple Accounts
     * @throws FetchError<400, types.GetSubdomainsByMultipleAccountsResponse400> Bad Request
     * @throws FetchError<500, types.GetSubdomainsByMultipleAccountsResponse500> Internal Server Error
     */
    SDK.prototype.get_subdomains_by_multiple_accounts = function (body) {
        return this.core.fetch('/v0/domains/bonfida/subdomains', 'post', body);
    };
    /**
     * Get An Account's Subdomains
     * <h3>This endpoint returns you subdomains that are owned by the given account hash</h3>
     *
     * @summary Get An Account's Subdomains
     * @throws FetchError<500, types.GetSubdomainsByAccountResponse500> Internal Server Error
     */
    SDK.prototype.get_subdomains_by_account = function (metadata) {
        return this.core.fetch('/v0/domains/bonfida/subdomains/{hash}', 'get', metadata);
    };
    /**
     * Specific Account's Domains
     * <h3>This endpoint retrieves all domains and subdomains owned by the provided account
     * hash</h3>
     *
     * @summary Specific Account's Domains
     * @throws FetchError<500, types.GetDomainsAndSubdomainsByHashResponse500> Internal Server Error
     */
    SDK.prototype.get_domains_and_subdomains_by_hash = function (metadata) {
        return this.core.fetch('/v0/domains/bonfida/{hash}', 'get', metadata);
    };
    /**
     * Solana Daily Transaction Fees
     * <h3>This endpoint returns you the total transaction fees in <i style="text-decoration:
     * underline">lamports</i> for the specified
     * date. If no date is specified, it will be defaulted to today's date</h3>
     *
     * @summary Solana Daily Transaction Fees
     * @throws FetchError<400, types.GetDailyTxFeesResponse400> Bad Request
     * @throws FetchError<500, types.GetDailyTxFeesResponse500> Internal Server Error
     */
    SDK.prototype.get_daily_tx_fees = function (metadata) {
        return this.core.fetch('/v0/stats/tx-fees', 'get', metadata);
    };
    /**
     * SolanaFM Tagged Token List
     * <h3>This end point returns you a paginated list of tokens available from our data store.
     * You can paginate through the response body to index all available tokens</h3>
     *
     * @summary SolanaFM Tagged Token List
     * @throws FetchError<400, types.GetTokensByPaginationResponse400> Bad Request
     * @throws FetchError<500, types.GetTokensByPaginationResponse500> Internal Server Error
     */
    SDK.prototype.get_tokens_by_pagination = function () {
        return this.core.fetch('/v0/tokens', 'get');
    };
    /**
     * Multiple Tokens
     * <h3>This endpoint allows you to batch retrieve tokens based on a list of provided token
     * hashes</h3>
     *
     * @summary Multiple Tokens
     * @throws FetchError<400, types.GetTokensByAccountHashesResponse400> Bad Request
     * @throws FetchError<500, types.GetTokensByAccountHashesResponse500> Internal Server Error
     */
    SDK.prototype.get_tokens_by_account_hashes = function (body) {
        return this.core.fetch('/v0/tokens', 'post', body);
    };
    /**
     * Token Info
     * <h3>This endpoint returns you the information of a token based on the token hash
     * provided</h3>
     *
     * @summary Token Info
     * @throws FetchError<400, types.GetTokenByAccountHashResponse400> Bad Request
     * @throws FetchError<404, types.GetTokenByAccountHashResponse404> Not Found
     * @throws FetchError<500, types.GetTokenByAccountHashResponse500> Internal Server Error
     */
    SDK.prototype.get_token_by_account_hash = function (metadata) {
        return this.core.fetch('/v0/tokens/{hash}', 'get', metadata);
    };
    /**
     * All Transfer Actions
     * <h3>This endpoint returns you a list of all possible actions identified in a transfers
     * model</h3>
     *
     * @summary All Transfer Actions
     * @throws FetchError<500, types.GetActionsResponse500> Internal Server Error
     */
    SDK.prototype.get_actions = function () {
        return this.core.fetch('/v1/actions', 'get');
    };
    /**
     * Owner Token Accounts
     * <h3>This endpoint returns you all the accounts (e.g. token accounts, NFTs, cNFTs) owned
     * by the provided account hash</h3>
     *
     * @summary Owner Token Accounts
     * @throws FetchError<400, types.GetTokensOwnedByAccountHandlerResponse400> Bad Request
     * @throws FetchError<500, types.GetTokensOwnedByAccountHandlerResponse500> Internal Server Error
     */
    SDK.prototype.get_tokens_owned_by_account_handler = function (metadata) {
        return this.core.fetch('/v1/addresses/{account-hash}/tokens', 'get', metadata);
    };
    /**
     * Multiple Tokens Info V1
     * <h3>This endpoint allows batch retrieval of multiple tokens in a single query with the
     * ability to customise the query</h3>
     *
     * @summary Multiple Tokens Info V1
     * @throws FetchError<400, types.RetrieveMultipleTokensResponse400> Bad Request
     * @throws FetchError<500, types.RetrieveMultipleTokensResponse500> Internal Server Error
     */
    SDK.prototype.retrieve_multiple_tokens = function (body) {
        return this.core.fetch('/v1/tokens', 'post', body);
    };
    /**
     * Token Info V1
     * <h3>This endpoint returns you information of a token by the given token hash</h3>
     *
     * @summary Token Info V1
     * @throws FetchError<500, types.GetOneTokenResponse500> Internal Server Error
     */
    SDK.prototype.get_one_token = function (metadata) {
        return this.core.fetch('/v1/tokens/{hash}', 'get', metadata);
    };
    /**
     * User's Token Accounts
     * <h3>This endpoint returns you a list of token accounts owned by the user with an option
     * to filter by Token Mints</h3>
     *
     * @summary User's Token Accounts
     * @throws FetchError<400, types.GetUserTokenAccountsResponse400> Bad Request
     * @throws FetchError<500, types.GetUserTokenAccountsResponse500> Internal Server Error
     */
    SDK.prototype.get_user_token_accounts = function (body, metadata) {
        return this.core.fetch('/v1/tokens/{hash}/token-accounts', 'post', body, metadata);
    };
    /**
     * Mint Token Accounts
     * <h3>This endpoint returns you a paginated list of token accounts owned by the provided
     * token mint</h3>
     *
     * @summary Mint Token Accounts
     * @throws FetchError<400, types.GetTokenAccountsForTokenMintResponse400> Bad Request
     * @throws FetchError<500, types.GetTokenAccountsForTokenMintResponse500> Internal Server Error
     */
    SDK.prototype.get_token_accounts_for_token_mint = function (metadata) {
        return this.core.fetch('/v1/tokens/{mint}/holders', 'get', metadata);
    };
    /**
     * On-Chain Token Data
     * <h3>This endpoint returns you the token data stored on-chain</h3>
     *
     * @summary On-Chain Token Data
     * @throws FetchError<400, types.GetTfiTokenDataResponse400> Bad Request
     * @throws FetchError<500, types.GetTfiTokenDataResponse500> Internal Server Error
     */
    SDK.prototype.get_tfi_token_data = function (metadata) {
        return this.core.fetch('/v1/tokens/{mint}/info', 'get', metadata);
    };
    /**
     * Token Supply
     * <h3>This endpoint returns you on-chain token supply information</h3>
     *
     * @summary Token Supply
     * @throws FetchError<400, types.GetTokenCirculatingSupplyResponse400> Bad Request
     * @throws FetchError<500, types.GetTokenCirculatingSupplyResponse500> Internal Server Error
     */
    SDK.prototype.get_token_circulating_supply = function (metadata) {
        return this.core.fetch('/v1/tokens/{mint}/supply', 'get', metadata);
    };
    /**
     * Account Transactions
     *
     * <h3>Retrieve a list of finalised transactions that the account is involved in.</h3>
     *
     * @summary Account Transactions
     */
    SDK.prototype.get_account_transactions = function (metadata) {
        return this.core.fetch('/v0/accounts/{hash}/transactions', 'get', metadata);
    };
    /**
     * Account Transfers
     *
     * <h3>Retrieve a list of transfers that the account is involved in.</h3>
     *
     * @summary Account Transfers
     */
    SDK.prototype.get_account_transfers_v1 = function (metadata) {
        return this.core.fetch('/v0/accounts/{hash}/transfers', 'get', metadata);
    };
    SDK.prototype.download_csv_v1 = function (metadata) {
        return this.core.fetch('/v0/accounts/{hash}/transfers/csv', 'get', metadata);
    };
    /**
     * Multiple Transaction Transfers
     * <h3>Retrieve a list of transfers for a given list of transaction hashes.</h3>
     *
     * @summary Multiple Transaction Transfers
     */
    SDK.prototype.post_transfers = function (body) {
        return this.core.fetch('/v0/transfers', 'post', body);
    };
    /**
     * Transfer Transactions
     *
     * <h3>Retrieve a list of transfers for a given transaction hash.</h3>
     *
     * @summary Transfer Transactions
     */
    SDK.prototype.get_transfers = function (metadata) {
        return this.core.fetch('/v0/transfers/{hash}', 'get', metadata);
    };
    return SDK;
}());
var createSDK = (function () { return new SDK(); })();
module.exports = createSDK;
