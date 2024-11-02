import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
    spec: Oas;
    core: APICore;
    constructor();
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config: ConfigOptions): void;
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
    auth(...values: string[] | number[]): this;
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
    server(url: string, variables?: {}): void;
    /**
     * Get tagged accounts
     * <h3>The endpoint supports batch retrieval of accounts with the ability to customise the
     * query</h3>
     *
     * @summary Get tagged accounts
     * @throws FetchError<400, types.GetMultipleAccountsResponse400> Bad Request
     * @throws FetchError<500, types.GetMultipleAccountsResponse500> Internal Server Error
     */
    get_multiple_accounts(body: types.GetMultipleAccountsBodyParam): Promise<FetchResponse<200, types.GetMultipleAccountsResponse200>>;
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
    get_account(metadata: types.GetAccountMetadataParam): Promise<FetchResponse<200, types.GetAccountResponse200>>;
    /**
     * Account's Transaction Fees
     * <h3>This endpoint returns you transactions fees accrued by account on a daily basis</h3>
     *
     * @summary Account's Transaction Fees
     * @throws FetchError<400, types.GetAccountTxFeesResponse400> Bad Request
     * @throws FetchError<500, types.GetAccountTxFeesResponse500> Internal Server Error
     */
    get_account_tx_fees(metadata: types.GetAccountTxFeesMetadataParam): Promise<FetchResponse<200, types.GetAccountTxFeesResponse200>>;
    /**
     * Get Blocks
     * <h3>This endpoint returns you a paginated list of blocks</h3>
     *
     * @summary Get Blocks
     * @throws FetchError<400, types.GetBlocksByPaginationResponse400> Bad Request
     * @throws FetchError<500, types.GetBlocksByPaginationResponse500> Internal Server Error
     */
    get_blocks_by_pagination(metadata?: types.GetBlocksByPaginationMetadataParam): Promise<FetchResponse<200, types.GetBlocksByPaginationResponse200>>;
    /**
     * Get Multiple Blocks
     * <h3>This endpoint returns you a list of blocks based on the input block numbers with the
     * ability to customise the query</h3>
     *
     * @summary Get Multiple Blocks
     * @throws FetchError<500, types.GetMultipleBlocksResponse500> Internal Server Error
     */
    get_multiple_blocks(body: types.GetMultipleBlocksBodyParam): Promise<FetchResponse<200, types.GetMultipleBlocksResponse200>>;
    /**
     * Get A Specific Block
     * <h3>This endpoints returns you the information of the block given the block number</h3>
     *
     * @summary Get A Specific Block
     * @throws FetchError<404, types.GetBlockResponse404> Block Not Found
     * @throws FetchError<500, types.GetBlockResponse500> Internal Server Error
     */
    get_block(metadata: types.GetBlockMetadataParam): Promise<FetchResponse<200, types.GetBlockResponse200>>;
    /**
     * Accounts' Domains
     * <h3>This endpoint retrieves all domains and subdomains owned by the provided account
     * hash</h3>
     *
     * @summary Accounts' Domains
     * @throws FetchError<400, types.GetMultipleDomainsAndSubdomainsByHashResponse400> Bad Request
     * @throws FetchError<500, types.GetMultipleDomainsAndSubdomainsByHashResponse500> Internal Server Error
     */
    get_multiple_domains_and_subdomains_by_hash(body: types.GetMultipleDomainsAndSubdomainsByHashBodyParam): Promise<FetchResponse<200, types.GetMultipleDomainsAndSubdomainsByHashResponse200>>;
    /**
     * Account Favourite Domain
     * <h3>This endpoint returns you the favourited domain of the account hash provided</h3>
     *
     * @summary Account Favourite Domain
     * @throws FetchError<400, types.GetFavouriteDomainsByMultipleAccountsResponse400> Bad Request
     * @throws FetchError<500, types.GetFavouriteDomainsByMultipleAccountsResponse500> Internal Server Error
     */
    get_favourite_domains_by_multiple_accounts(body: types.GetFavouriteDomainsByMultipleAccountsBodyParam): Promise<FetchResponse<200, types.GetFavouriteDomainsByMultipleAccountsResponse200>>;
    /**
     * Get User's Favourite Domains
     * <h3>This endpoint returns you a list of domains that are set as favourite by the account
     * hash provided</h3>
     *
     * @summary Get User's Favourite Domains
     * @throws FetchError<500, types.GetFavouriteDomainsByAccountResponse500> Internal Server Error
     */
    get_favourite_domains_by_account(metadata: types.GetFavouriteDomainsByAccountMetadataParam): Promise<FetchResponse<200, types.GetFavouriteDomainsByAccountResponse200>>;
    /**
     * Subdomains Of Multiple Accounts
     * <h3>This endpoint returns you a list of subdomains owned based on the account hashes
     * that you input</h3>
     *
     * @summary Subdomains Of Multiple Accounts
     * @throws FetchError<400, types.GetSubdomainsByMultipleAccountsResponse400> Bad Request
     * @throws FetchError<500, types.GetSubdomainsByMultipleAccountsResponse500> Internal Server Error
     */
    get_subdomains_by_multiple_accounts(body: types.GetSubdomainsByMultipleAccountsBodyParam): Promise<FetchResponse<200, types.GetSubdomainsByMultipleAccountsResponse200>>;
    /**
     * Get An Account's Subdomains
     * <h3>This endpoint returns you subdomains that are owned by the given account hash</h3>
     *
     * @summary Get An Account's Subdomains
     * @throws FetchError<500, types.GetSubdomainsByAccountResponse500> Internal Server Error
     */
    get_subdomains_by_account(metadata: types.GetSubdomainsByAccountMetadataParam): Promise<FetchResponse<200, types.GetSubdomainsByAccountResponse200>>;
    /**
     * Specific Account's Domains
     * <h3>This endpoint retrieves all domains and subdomains owned by the provided account
     * hash</h3>
     *
     * @summary Specific Account's Domains
     * @throws FetchError<500, types.GetDomainsAndSubdomainsByHashResponse500> Internal Server Error
     */
    get_domains_and_subdomains_by_hash(metadata: types.GetDomainsAndSubdomainsByHashMetadataParam): Promise<FetchResponse<200, types.GetDomainsAndSubdomainsByHashResponse200>>;
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
    get_daily_tx_fees(metadata?: types.GetDailyTxFeesMetadataParam): Promise<FetchResponse<200, types.GetDailyTxFeesResponse200>>;
    /**
     * SolanaFM Tagged Token List
     * <h3>This end point returns you a paginated list of tokens available from our data store.
     * You can paginate through the response body to index all available tokens</h3>
     *
     * @summary SolanaFM Tagged Token List
     * @throws FetchError<400, types.GetTokensByPaginationResponse400> Bad Request
     * @throws FetchError<500, types.GetTokensByPaginationResponse500> Internal Server Error
     */
    get_tokens_by_pagination(): Promise<FetchResponse<200, types.GetTokensByPaginationResponse200>>;
    /**
     * Multiple Tokens
     * <h3>This endpoint allows you to batch retrieve tokens based on a list of provided token
     * hashes</h3>
     *
     * @summary Multiple Tokens
     * @throws FetchError<400, types.GetTokensByAccountHashesResponse400> Bad Request
     * @throws FetchError<500, types.GetTokensByAccountHashesResponse500> Internal Server Error
     */
    get_tokens_by_account_hashes(body: types.GetTokensByAccountHashesBodyParam): Promise<FetchResponse<200, types.GetTokensByAccountHashesResponse200>>;
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
    get_token_by_account_hash(metadata: types.GetTokenByAccountHashMetadataParam): Promise<FetchResponse<200, types.GetTokenByAccountHashResponse200>>;
    /**
     * All Transfer Actions
     * <h3>This endpoint returns you a list of all possible actions identified in a transfers
     * model</h3>
     *
     * @summary All Transfer Actions
     * @throws FetchError<500, types.GetActionsResponse500> Internal Server Error
     */
    get_actions(): Promise<FetchResponse<200, types.GetActionsResponse200>>;
    /**
     * Owner Token Accounts
     * <h3>This endpoint returns you all the accounts (e.g. token accounts, NFTs, cNFTs) owned
     * by the provided account hash</h3>
     *
     * @summary Owner Token Accounts
     * @throws FetchError<400, types.GetTokensOwnedByAccountHandlerResponse400> Bad Request
     * @throws FetchError<500, types.GetTokensOwnedByAccountHandlerResponse500> Internal Server Error
     */
    get_tokens_owned_by_account_handler(metadata: types.GetTokensOwnedByAccountHandlerMetadataParam): Promise<FetchResponse<200, types.GetTokensOwnedByAccountHandlerResponse200>>;
    /**
     * Multiple Tokens Info V1
     * <h3>This endpoint allows batch retrieval of multiple tokens in a single query with the
     * ability to customise the query</h3>
     *
     * @summary Multiple Tokens Info V1
     * @throws FetchError<400, types.RetrieveMultipleTokensResponse400> Bad Request
     * @throws FetchError<500, types.RetrieveMultipleTokensResponse500> Internal Server Error
     */
    retrieve_multiple_tokens(body: types.RetrieveMultipleTokensBodyParam): Promise<FetchResponse<200, types.RetrieveMultipleTokensResponse200>>;
    /**
     * Token Info V1
     * <h3>This endpoint returns you information of a token by the given token hash</h3>
     *
     * @summary Token Info V1
     * @throws FetchError<500, types.GetOneTokenResponse500> Internal Server Error
     */
    get_one_token(metadata: types.GetOneTokenMetadataParam): Promise<FetchResponse<200, types.GetOneTokenResponse200>>;
    /**
     * User's Token Accounts
     * <h3>This endpoint returns you a list of token accounts owned by the user with an option
     * to filter by Token Mints</h3>
     *
     * @summary User's Token Accounts
     * @throws FetchError<400, types.GetUserTokenAccountsResponse400> Bad Request
     * @throws FetchError<500, types.GetUserTokenAccountsResponse500> Internal Server Error
     */
    get_user_token_accounts(body: types.GetUserTokenAccountsBodyParam, metadata: types.GetUserTokenAccountsMetadataParam): Promise<FetchResponse<200, types.GetUserTokenAccountsResponse200>>;
    /**
     * Mint Token Accounts
     * <h3>This endpoint returns you a paginated list of token accounts owned by the provided
     * token mint</h3>
     *
     * @summary Mint Token Accounts
     * @throws FetchError<400, types.GetTokenAccountsForTokenMintResponse400> Bad Request
     * @throws FetchError<500, types.GetTokenAccountsForTokenMintResponse500> Internal Server Error
     */
    get_token_accounts_for_token_mint(metadata: types.GetTokenAccountsForTokenMintMetadataParam): Promise<FetchResponse<200, types.GetTokenAccountsForTokenMintResponse200>>;
    /**
     * On-Chain Token Data
     * <h3>This endpoint returns you the token data stored on-chain</h3>
     *
     * @summary On-Chain Token Data
     * @throws FetchError<400, types.GetTfiTokenDataResponse400> Bad Request
     * @throws FetchError<500, types.GetTfiTokenDataResponse500> Internal Server Error
     */
    get_tfi_token_data(metadata: types.GetTfiTokenDataMetadataParam): Promise<FetchResponse<200, types.GetTfiTokenDataResponse200>>;
    /**
     * Token Supply
     * <h3>This endpoint returns you on-chain token supply information</h3>
     *
     * @summary Token Supply
     * @throws FetchError<400, types.GetTokenCirculatingSupplyResponse400> Bad Request
     * @throws FetchError<500, types.GetTokenCirculatingSupplyResponse500> Internal Server Error
     */
    get_token_circulating_supply(metadata: types.GetTokenCirculatingSupplyMetadataParam): Promise<FetchResponse<200, types.GetTokenCirculatingSupplyResponse200>>;
    /**
     * Account Transactions
     *
     * <h3>Retrieve a list of finalised transactions that the account is involved in.</h3>
     *
     * @summary Account Transactions
     */
    get_account_transactions(metadata: types.GetAccountTransactionsMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Account Transfers
     *
     * <h3>Retrieve a list of transfers that the account is involved in.</h3>
     *
     * @summary Account Transfers
     */
    get_account_transfers_v1(metadata: types.GetAccountTransfersV1MetadataParam): Promise<FetchResponse<number, unknown>>;
    download_csv_v1(metadata: types.DownloadCsvV1MetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Multiple Transaction Transfers
     * <h3>Retrieve a list of transfers for a given list of transaction hashes.</h3>
     *
     * @summary Multiple Transaction Transfers
     */
    post_transfers(body: types.PostTransfersBodyParam): Promise<FetchResponse<200, types.PostTransfersResponse200>>;
    /**
     * Transfer Transactions
     *
     * <h3>Retrieve a list of transfers for a given transaction hash.</h3>
     *
     * @summary Transfer Transactions
     */
    get_transfers(metadata: types.GetTransfersMetadataParam): Promise<FetchResponse<200, types.GetTransfersResponse200>>;
}
declare const createSDK: SDK;
export = createSDK;
