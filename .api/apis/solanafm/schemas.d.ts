declare const DownloadCsvV1: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly hash: {
                    readonly type: "string";
                    readonly examples: readonly ["nix9RErnQYXpuf329ntPgSzThogtfeyUempD7zDrnSH"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Account pubkey";
                };
            };
            readonly required: readonly ["hash"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly actions: {
                    readonly type: readonly ["string", "null"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Vector of actions to filter";
                };
                readonly utcFrom: {
                    readonly type: readonly ["integer", "null"];
                    readonly format: "int64";
                    readonly minimum: 0;
                    readonly examples: readonly [1698796800];
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The start UTC epoch to query transactions for.";
                };
                readonly utcTo: {
                    readonly type: readonly ["integer", "null"];
                    readonly format: "int64";
                    readonly minimum: 0;
                    readonly examples: readonly [1698883199];
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The end UTC epoch to query transactions for.";
                };
                readonly inflow: {
                    readonly type: readonly ["boolean", "null"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Whether the transactions should include inflow movements.";
                };
                readonly outflow: {
                    readonly type: readonly ["boolean", "null"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Whether the transactions should include outflow movements.";
                };
                readonly mint: {
                    readonly type: readonly ["string", "null"];
                    readonly examples: readonly ["EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v,DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The mint(s) to query transactions for.\n\nMultiple mints can be specified by comma-separating them.";
                };
                readonly mints: {
                    readonly type: readonly ["string", "null"];
                    readonly examples: readonly ["EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v,DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The mint(s) to query transactions for.\n\nMultiple mints can be specified by comma-separating them.";
                };
                readonly amountFrom: {
                    readonly type: readonly ["integer", "null"];
                    readonly format: "int64";
                    readonly minimum: 0;
                    readonly examples: readonly [1698796800];
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The amount range for selected mints.";
                };
                readonly amountTo: {
                    readonly type: readonly ["integer", "null"];
                    readonly format: "int64";
                    readonly minimum: 0;
                    readonly examples: readonly [1698883199];
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The amount range for selected mints.";
                };
                readonly program: {
                    readonly type: readonly ["string", "null"];
                    readonly examples: readonly ["EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v,DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The program(s) to query transactions for.\n\nMultiple programs can be specified by comma-separating them.";
                };
                readonly programs: {
                    readonly type: readonly ["string", "null"];
                    readonly examples: readonly ["EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v,DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The program(s) to query transactions for.\n\nMultiple programs can be specified by comma-separating them.";
                };
                readonly limit: {
                    readonly type: readonly ["integer", "null"];
                    readonly maximum: 1000;
                    readonly minimum: 1;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The maximum number of transactions to return per page.\n\nThe default and maximum is 1000.";
                };
                readonly page: {
                    readonly type: readonly ["integer", "null"];
                    readonly format: "int64";
                    readonly default: 1;
                    readonly minimum: 1;
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The page number to retreive.\n\nThe default is 1.";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetAccount: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly hash: {
                    readonly type: "string";
                    readonly examples: readonly ["AK2VbkdYLHSiJKS6AGUfNZYNaejABkV6VYDX1Vrgxfo"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The account/wallet hash to query for";
                };
            };
            readonly required: readonly ["hash"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["accountHash", "data"];
            readonly properties: {
                readonly accountHash: {
                    readonly type: "string";
                };
                readonly data: {
                    readonly type: "object";
                    readonly required: readonly ["friendlyName", "abbreviation", "category", "network", "tags"];
                    readonly properties: {
                        readonly abbreviation: {
                            readonly type: "string";
                            readonly description: "Account abbreviation (e.g. USDC)";
                        };
                        readonly category: {
                            readonly type: "string";
                            readonly description: "Category of the Account (e.g. Tokens)";
                        };
                        readonly flag: {
                            readonly type: readonly ["string", "null"];
                            readonly description: "SolanaFM flagged accounts (e.g. scammer, hacker)";
                        };
                        readonly friendlyName: {
                            readonly type: "string";
                            readonly description: "SolanaFM labelled name / on-chain indexed name (e.g. USD Coin)";
                        };
                        readonly logoURI: {
                            readonly type: readonly ["string", "null"];
                            readonly description: "Image url for the account";
                        };
                        readonly network: {
                            readonly type: "string";
                            readonly description: "(e.g. mainnet/devnet)";
                        };
                        readonly tags: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                            readonly description: "SolanaFM labelled tags";
                        };
                        readonly voteKey: {
                            readonly type: readonly ["string", "null"];
                            readonly description: "Vote key only exists for validator accounts";
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly description: "This is where we have our API error response struct\nFeel free to design your own API Error response\nFor this example I am referencing Google's JSON API error response\nhttps://cloud.google.com/apis/design/errors";
            readonly required: readonly ["code", "message", "status"];
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 0;
                    readonly examples: readonly ["500"];
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal Server Error"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["500"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly description: "This is where we have our API error response struct\nFeel free to design your own API Error response\nFor this example I am referencing Google's JSON API error response\nhttps://cloud.google.com/apis/design/errors";
            readonly required: readonly ["code", "message", "status"];
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 0;
                    readonly examples: readonly ["500"];
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal Server Error"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["500"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly description: "This is where we have our API error response struct\nFeel free to design your own API Error response\nFor this example I am referencing Google's JSON API error response\nhttps://cloud.google.com/apis/design/errors";
            readonly required: readonly ["code", "message", "status"];
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 0;
                    readonly examples: readonly ["500"];
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal Server Error"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["500"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetAccountTransactions: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly hash: {
                    readonly type: "string";
                    readonly examples: readonly ["nix9RErnQYXpuf329ntPgSzThogtfeyUempD7zDrnSH"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Account pubkey";
                };
            };
            readonly required: readonly ["hash"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly actions: {
                    readonly type: readonly ["string", "null"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Vector of actions to filter";
                };
                readonly utcFrom: {
                    readonly type: readonly ["integer", "null"];
                    readonly format: "int64";
                    readonly minimum: 0;
                    readonly examples: readonly [1698796800];
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The start UTC epoch to query transactions for.";
                };
                readonly utcTo: {
                    readonly type: readonly ["integer", "null"];
                    readonly format: "int64";
                    readonly minimum: 0;
                    readonly examples: readonly [1698883199];
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The end UTC epoch to query transactions for.";
                };
                readonly inflow: {
                    readonly type: readonly ["boolean", "null"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Whether the transactions should include inflow movements.";
                };
                readonly outflow: {
                    readonly type: readonly ["boolean", "null"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Whether the transactions should include outflow movements.";
                };
                readonly mint: {
                    readonly type: readonly ["string", "null"];
                    readonly examples: readonly ["EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v,DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The mint(s) to query transactions for.\n\nMultiple mints can be specified by comma-separating them.";
                };
                readonly mints: {
                    readonly type: readonly ["string", "null"];
                    readonly examples: readonly ["EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v,DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The mint(s) to query transactions for.\n\nMultiple mints can be specified by comma-separating them.";
                };
                readonly amountFrom: {
                    readonly type: readonly ["integer", "null"];
                    readonly format: "int64";
                    readonly minimum: 0;
                    readonly examples: readonly [1698796800];
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The amount range for selected mints.";
                };
                readonly amountTo: {
                    readonly type: readonly ["integer", "null"];
                    readonly format: "int64";
                    readonly minimum: 0;
                    readonly examples: readonly [1698883199];
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The amount range for selected mints.";
                };
                readonly program: {
                    readonly type: readonly ["string", "null"];
                    readonly examples: readonly ["EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v,DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The program(s) to query transactions for.\n\nMultiple programs can be specified by comma-separating them.";
                };
                readonly programs: {
                    readonly type: readonly ["string", "null"];
                    readonly examples: readonly ["EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v,DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The program(s) to query transactions for.\n\nMultiple programs can be specified by comma-separating them.";
                };
                readonly limit: {
                    readonly type: readonly ["integer", "null"];
                    readonly maximum: 1000;
                    readonly minimum: 1;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The maximum number of transactions to return per page.\n\nThe default and maximum is 1000.";
                };
                readonly page: {
                    readonly type: readonly ["integer", "null"];
                    readonly format: "int64";
                    readonly default: 1;
                    readonly minimum: 1;
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The page number to retreive.\n\nThe default is 1.";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetAccountTransfersV1: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly hash: {
                    readonly type: "string";
                    readonly examples: readonly ["nix9RErnQYXpuf329ntPgSzThogtfeyUempD7zDrnSH"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Account pubkey";
                };
            };
            readonly required: readonly ["hash"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly utcFrom: {
                    readonly type: readonly ["integer", "null"];
                    readonly format: "int64";
                    readonly minimum: 0;
                    readonly examples: readonly [1698796800];
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The start UTC epoch to query transfers for.";
                };
                readonly utcTo: {
                    readonly type: readonly ["integer", "null"];
                    readonly format: "int64";
                    readonly minimum: 0;
                    readonly examples: readonly [1698883199];
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The end UTC epoch to query transfers for.";
                };
                readonly inflow: {
                    readonly type: readonly ["boolean", "null"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Whether the transfers should include inflow movements.";
                };
                readonly outflow: {
                    readonly type: readonly ["boolean", "null"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Whether the transfers should include outflow movements.";
                };
                readonly mint: {
                    readonly type: readonly ["string", "null"];
                    readonly examples: readonly ["EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v,DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The mint(s) to query transfers for.\n\nMultiple mints can be specified by comma-separating them.";
                };
                readonly limit: {
                    readonly type: readonly ["integer", "null"];
                    readonly maximum: 100;
                    readonly minimum: 1;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The maximum number of transfers to return per page.\n\nThe default and maximum is 100.";
                };
                readonly page: {
                    readonly type: readonly ["integer", "null"];
                    readonly format: "int64";
                    readonly default: 1;
                    readonly minimum: 1;
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The page number to retreive.\n\nThe default is 1.";
                };
            };
            readonly required: readonly [];
        }];
    };
};
declare const GetAccountTxFees: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly hash: {
                    readonly type: "string";
                    readonly examples: readonly ["AK2VbkdYLHSiJKS6AGUfNZYNaejABkV6VYDX1Vrgxfo"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The account/wallet hash to query for";
                };
            };
            readonly required: readonly ["hash"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly from: {
                    readonly type: readonly ["string", "null"];
                    readonly examples: readonly ["2024-01-01"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The start date to query for";
                };
                readonly to: {
                    readonly type: readonly ["string", "null"];
                    readonly examples: readonly ["2024-02-01"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The end date to query for";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly required: readonly ["tx_fees", "time"];
                readonly properties: {
                    readonly time: {
                        readonly type: "string";
                    };
                    readonly tx_fees: {
                        readonly type: "integer";
                        readonly format: "int64";
                        readonly description: "Transaction Fees accrued for the day";
                        readonly minimum: -9223372036854776000;
                        readonly maximum: 9223372036854776000;
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly description: "This is where we have our API error response struct\nFeel free to design your own API Error response\nFor this example I am referencing Google's JSON API error response\nhttps://cloud.google.com/apis/design/errors";
            readonly required: readonly ["code", "message", "status"];
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 0;
                    readonly examples: readonly ["500"];
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal Server Error"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["500"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly description: "This is where we have our API error response struct\nFeel free to design your own API Error response\nFor this example I am referencing Google's JSON API error response\nhttps://cloud.google.com/apis/design/errors";
            readonly required: readonly ["code", "message", "status"];
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 0;
                    readonly examples: readonly ["500"];
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal Server Error"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["500"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetActions: {
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly description: "This is where we have our API error response struct\nFeel free to design your own API Error response\nFor this example I am referencing Google's JSON API error response\nhttps://cloud.google.com/apis/design/errors";
            readonly required: readonly ["code", "message", "status"];
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 0;
                    readonly examples: readonly ["500"];
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal Server Error"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["500"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetBlock: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly block_number: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: 0;
                    readonly examples: readonly [200000000];
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The block number to query for";
                };
            };
            readonly required: readonly ["block_number"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["blockNumber", "data"];
            readonly properties: {
                readonly blockNumber: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly description: "The block number retrieved";
                    readonly minimum: 0;
                    readonly maximum: 9223372036854776000;
                };
                readonly data: {
                    readonly type: "object";
                    readonly required: readonly ["epoch", "previousHash", "producer", "hash", "parentNumber", "number", "dataSize", "numberOfTransactions", "successfulTransactions", "voteTransactions", "totalTxFees", "numberOfRewards", "totalRewardAmount", "totalComputeUnitsConsumed", "totalComputeUnitsLimit", "blockTime"];
                    readonly properties: {
                        readonly blockTime: {
                            readonly type: "integer";
                            readonly format: "int64";
                            readonly description: "The time that this block is produced";
                            readonly minimum: 0;
                            readonly maximum: 9223372036854776000;
                        };
                        readonly dataSize: {
                            readonly type: "integer";
                            readonly format: "int64";
                            readonly description: "The data size of this block";
                            readonly minimum: 0;
                            readonly maximum: 9223372036854776000;
                        };
                        readonly epoch: {
                            readonly type: "integer";
                            readonly format: "int32";
                            readonly description: "The epoch that this block belongs to";
                            readonly minimum: 0;
                            readonly maximum: 2147483647;
                        };
                        readonly hash: {
                            readonly type: "string";
                            readonly description: "The block hash";
                        };
                        readonly number: {
                            readonly type: "integer";
                            readonly format: "int64";
                            readonly description: "The block number";
                            readonly minimum: 0;
                            readonly maximum: 9223372036854776000;
                        };
                        readonly numberOfRewards: {
                            readonly type: "integer";
                            readonly format: "int32";
                            readonly description: "The number of rewards being issued";
                            readonly minimum: 0;
                            readonly maximum: 2147483647;
                        };
                        readonly numberOfTransactions: {
                            readonly type: "integer";
                            readonly format: "int32";
                            readonly description: "The number of transactions produced in this block";
                            readonly minimum: 0;
                            readonly maximum: 2147483647;
                        };
                        readonly parentNumber: {
                            readonly type: "integer";
                            readonly format: "int64";
                            readonly description: "The parent's block number";
                            readonly minimum: 0;
                            readonly maximum: 9223372036854776000;
                        };
                        readonly previousHash: {
                            readonly type: "string";
                            readonly description: "The previous block's block hash";
                        };
                        readonly producer: {
                            readonly oneOf: readonly [{
                                readonly type: "object";
                                readonly required: readonly ["String"];
                                readonly properties: {
                                    readonly String: {
                                        readonly type: "string";
                                        readonly description: "The block producer account hash";
                                    };
                                };
                            }, {
                                readonly type: "object";
                                readonly required: readonly ["Account"];
                                readonly properties: {
                                    readonly Account: {
                                        readonly type: "object";
                                        readonly required: readonly ["accountHash"];
                                        readonly properties: {
                                            readonly accountHash: {
                                                readonly type: "string";
                                                readonly description: "The pubkey of the account returned";
                                            };
                                            readonly data: {
                                                readonly type: readonly ["object", "null"];
                                                readonly required: readonly ["friendlyName", "abbreviation", "category", "network", "tags"];
                                                readonly properties: {
                                                    readonly abbreviation: {
                                                        readonly type: "string";
                                                        readonly description: "Account abbreviation (e.g. USDC)";
                                                    };
                                                    readonly category: {
                                                        readonly type: "string";
                                                        readonly description: "Category of the Account (e.g. Tokens)";
                                                    };
                                                    readonly flag: {
                                                        readonly type: readonly ["string", "null"];
                                                        readonly description: "SolanaFM flagged accounts (e.g. scammer, hacker)";
                                                    };
                                                    readonly friendlyName: {
                                                        readonly type: "string";
                                                        readonly description: "SolanaFM labelled name / on-chain indexed name (e.g. USD Coin)";
                                                    };
                                                    readonly logoURI: {
                                                        readonly type: readonly ["string", "null"];
                                                        readonly description: "Image url for the account";
                                                    };
                                                    readonly network: {
                                                        readonly type: "string";
                                                        readonly description: "(e.g. mainnet/devnet)";
                                                    };
                                                    readonly tags: {
                                                        readonly type: "array";
                                                        readonly description: "SolanaFM labelled tags";
                                                        readonly items: {
                                                            readonly type: "string";
                                                        };
                                                    };
                                                    readonly voteKey: {
                                                        readonly type: readonly ["string", "null"];
                                                        readonly description: "Vote key only exists for validator accounts";
                                                    };
                                                };
                                            };
                                            readonly onchain: {
                                                readonly type: readonly ["object", "null"];
                                                readonly required: readonly ["lamports", "data", "owner", "executable", "rentEpoch"];
                                                readonly properties: {
                                                    readonly data: {
                                                        readonly oneOf: readonly [{
                                                            readonly type: "string";
                                                            readonly format: "binary";
                                                        }, {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "string";
                                                            };
                                                        }, {
                                                            readonly type: "object";
                                                            readonly required: readonly ["info", "account_type"];
                                                            readonly properties: {
                                                                readonly account_type: {
                                                                    readonly type: "string";
                                                                };
                                                                readonly info: {};
                                                            };
                                                        }];
                                                    };
                                                    readonly executable: {
                                                        readonly type: "boolean";
                                                        readonly description: "Indicates whether the account is an executable account or not";
                                                    };
                                                    readonly lamports: {
                                                        readonly type: "integer";
                                                        readonly format: "int64";
                                                        readonly description: "Amount of lamports in the account";
                                                        readonly minimum: 0;
                                                        readonly maximum: 9223372036854776000;
                                                    };
                                                    readonly owner: {
                                                        readonly type: "string";
                                                        readonly description: "Owner of the account";
                                                    };
                                                    readonly rentEpoch: {
                                                        readonly type: "integer";
                                                        readonly format: "int64";
                                                        readonly description: "Rent epoch of the account";
                                                        readonly minimum: 0;
                                                        readonly maximum: 9223372036854776000;
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            }];
                        };
                        readonly successfulTransactions: {
                            readonly type: "integer";
                            readonly format: "int32";
                            readonly description: "The number of successful transactions in this block";
                            readonly minimum: 0;
                            readonly maximum: 2147483647;
                        };
                        readonly totalComputeUnitsConsumed: {
                            readonly type: "integer";
                            readonly format: "int64";
                            readonly description: "The total compute units consumed producing this block";
                            readonly minimum: 0;
                            readonly maximum: 9223372036854776000;
                        };
                        readonly totalComputeUnitsLimit: {
                            readonly type: "integer";
                            readonly format: "int64";
                            readonly description: "The total compute limits indicated for this block";
                            readonly minimum: 0;
                            readonly maximum: 9223372036854776000;
                        };
                        readonly totalRewardAmount: {
                            readonly type: "integer";
                            readonly format: "int64";
                            readonly description: "The total reward amount";
                            readonly minimum: 0;
                            readonly maximum: 9223372036854776000;
                        };
                        readonly totalTxFees: {
                            readonly type: "integer";
                            readonly format: "int64";
                            readonly description: "The total transaction fees collected in the block";
                            readonly minimum: 0;
                            readonly maximum: 9223372036854776000;
                        };
                        readonly voteTransactions: {
                            readonly type: "integer";
                            readonly format: "int32";
                            readonly description: "The number of vote transactions in this blocl";
                            readonly minimum: 0;
                            readonly maximum: 2147483647;
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly description: "This is where we have our API error response struct\nFeel free to design your own API Error response\nFor this example I am referencing Google's JSON API error response\nhttps://cloud.google.com/apis/design/errors";
            readonly required: readonly ["code", "message", "status"];
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 0;
                    readonly examples: readonly ["500"];
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal Server Error"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["500"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly description: "This is where we have our API error response struct\nFeel free to design your own API Error response\nFor this example I am referencing Google's JSON API error response\nhttps://cloud.google.com/apis/design/errors";
            readonly required: readonly ["code", "message", "status"];
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 0;
                    readonly examples: readonly ["500"];
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal Server Error"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["500"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetBlocksByPagination: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly params: {
                    readonly type: readonly ["object", "null"];
                    readonly properties: {
                        readonly from: {
                            readonly type: readonly ["string", "null"];
                            readonly description: "Cursor to the next/previous page.\nWhen not provided, latest blocks will be returned";
                        };
                        readonly pageSize: {
                            readonly type: readonly ["integer", "null"];
                            readonly description: "Defines the number of blocks returned in a page.\nDefaults to 50 when not provided";
                            readonly minimum: 0;
                        };
                        readonly paginationType: {
                            readonly type: readonly ["string", "null"];
                            readonly description: "Sets the pagination type (either `blockNumber` or `blockTime`)";
                        };
                        readonly reverse: {
                            readonly type: readonly ["boolean", "null"];
                            readonly description: "Only accepts (True/False).\nIndicates the pagination order of the block.\nIf set true, returns an ascending order from older blocks to newer blocks.\nIf set false, returns a descending order from newer blocks to older blocks.";
                        };
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Input the optional query parameters";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["data", "pagination"];
            readonly properties: {
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly required: readonly ["blockNumber", "data"];
                        readonly properties: {
                            readonly blockNumber: {
                                readonly type: "integer";
                                readonly format: "int64";
                                readonly description: "The block number retrieved";
                                readonly minimum: 0;
                                readonly maximum: 9223372036854776000;
                            };
                            readonly data: {
                                readonly type: "object";
                                readonly required: readonly ["epoch", "previousHash", "producer", "hash", "parentNumber", "number", "dataSize", "numberOfTransactions", "successfulTransactions", "voteTransactions", "totalTxFees", "numberOfRewards", "totalRewardAmount", "totalComputeUnitsConsumed", "totalComputeUnitsLimit", "blockTime"];
                                readonly properties: {
                                    readonly blockTime: {
                                        readonly type: "integer";
                                        readonly format: "int64";
                                        readonly description: "The time that this block is produced";
                                        readonly minimum: 0;
                                        readonly maximum: 9223372036854776000;
                                    };
                                    readonly dataSize: {
                                        readonly type: "integer";
                                        readonly format: "int64";
                                        readonly description: "The data size of this block";
                                        readonly minimum: 0;
                                        readonly maximum: 9223372036854776000;
                                    };
                                    readonly epoch: {
                                        readonly type: "integer";
                                        readonly format: "int32";
                                        readonly description: "The epoch that this block belongs to";
                                        readonly minimum: 0;
                                        readonly maximum: 2147483647;
                                    };
                                    readonly hash: {
                                        readonly type: "string";
                                        readonly description: "The block hash";
                                    };
                                    readonly number: {
                                        readonly type: "integer";
                                        readonly format: "int64";
                                        readonly description: "The block number";
                                        readonly minimum: 0;
                                        readonly maximum: 9223372036854776000;
                                    };
                                    readonly numberOfRewards: {
                                        readonly type: "integer";
                                        readonly format: "int32";
                                        readonly description: "The number of rewards being issued";
                                        readonly minimum: 0;
                                        readonly maximum: 2147483647;
                                    };
                                    readonly numberOfTransactions: {
                                        readonly type: "integer";
                                        readonly format: "int32";
                                        readonly description: "The number of transactions produced in this block";
                                        readonly minimum: 0;
                                        readonly maximum: 2147483647;
                                    };
                                    readonly parentNumber: {
                                        readonly type: "integer";
                                        readonly format: "int64";
                                        readonly description: "The parent's block number";
                                        readonly minimum: 0;
                                        readonly maximum: 9223372036854776000;
                                    };
                                    readonly previousHash: {
                                        readonly type: "string";
                                        readonly description: "The previous block's block hash";
                                    };
                                    readonly producer: {
                                        readonly oneOf: readonly [{
                                            readonly type: "object";
                                            readonly required: readonly ["String"];
                                            readonly properties: {
                                                readonly String: {
                                                    readonly type: "string";
                                                    readonly description: "The block producer account hash";
                                                };
                                            };
                                        }, {
                                            readonly type: "object";
                                            readonly required: readonly ["Account"];
                                            readonly properties: {
                                                readonly Account: {
                                                    readonly type: "object";
                                                    readonly required: readonly ["accountHash"];
                                                    readonly properties: {
                                                        readonly accountHash: {
                                                            readonly type: "string";
                                                            readonly description: "The pubkey of the account returned";
                                                        };
                                                        readonly data: {
                                                            readonly type: readonly ["object", "null"];
                                                            readonly required: readonly ["friendlyName", "abbreviation", "category", "network", "tags"];
                                                            readonly properties: {
                                                                readonly abbreviation: {
                                                                    readonly type: "string";
                                                                    readonly description: "Account abbreviation (e.g. USDC)";
                                                                };
                                                                readonly category: {
                                                                    readonly type: "string";
                                                                    readonly description: "Category of the Account (e.g. Tokens)";
                                                                };
                                                                readonly flag: {
                                                                    readonly type: readonly ["string", "null"];
                                                                    readonly description: "SolanaFM flagged accounts (e.g. scammer, hacker)";
                                                                };
                                                                readonly friendlyName: {
                                                                    readonly type: "string";
                                                                    readonly description: "SolanaFM labelled name / on-chain indexed name (e.g. USD Coin)";
                                                                };
                                                                readonly logoURI: {
                                                                    readonly type: readonly ["string", "null"];
                                                                    readonly description: "Image url for the account";
                                                                };
                                                                readonly network: {
                                                                    readonly type: "string";
                                                                    readonly description: "(e.g. mainnet/devnet)";
                                                                };
                                                                readonly tags: {
                                                                    readonly type: "array";
                                                                    readonly description: "SolanaFM labelled tags";
                                                                    readonly items: {
                                                                        readonly type: "string";
                                                                    };
                                                                };
                                                                readonly voteKey: {
                                                                    readonly type: readonly ["string", "null"];
                                                                    readonly description: "Vote key only exists for validator accounts";
                                                                };
                                                            };
                                                        };
                                                        readonly onchain: {
                                                            readonly type: readonly ["object", "null"];
                                                            readonly required: readonly ["lamports", "data", "owner", "executable", "rentEpoch"];
                                                            readonly properties: {
                                                                readonly data: {
                                                                    readonly oneOf: readonly [{
                                                                        readonly type: "string";
                                                                        readonly format: "binary";
                                                                    }, {
                                                                        readonly type: "array";
                                                                        readonly items: {
                                                                            readonly type: "string";
                                                                        };
                                                                    }, {
                                                                        readonly type: "object";
                                                                        readonly required: readonly ["info", "account_type"];
                                                                        readonly properties: {
                                                                            readonly account_type: {
                                                                                readonly type: "string";
                                                                            };
                                                                            readonly info: {};
                                                                        };
                                                                    }];
                                                                };
                                                                readonly executable: {
                                                                    readonly type: "boolean";
                                                                    readonly description: "Indicates whether the account is an executable account or not";
                                                                };
                                                                readonly lamports: {
                                                                    readonly type: "integer";
                                                                    readonly format: "int64";
                                                                    readonly description: "Amount of lamports in the account";
                                                                    readonly minimum: 0;
                                                                    readonly maximum: 9223372036854776000;
                                                                };
                                                                readonly owner: {
                                                                    readonly type: "string";
                                                                    readonly description: "Owner of the account";
                                                                };
                                                                readonly rentEpoch: {
                                                                    readonly type: "integer";
                                                                    readonly format: "int64";
                                                                    readonly description: "Rent epoch of the account";
                                                                    readonly minimum: 0;
                                                                    readonly maximum: 9223372036854776000;
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        }];
                                    };
                                    readonly successfulTransactions: {
                                        readonly type: "integer";
                                        readonly format: "int32";
                                        readonly description: "The number of successful transactions in this block";
                                        readonly minimum: 0;
                                        readonly maximum: 2147483647;
                                    };
                                    readonly totalComputeUnitsConsumed: {
                                        readonly type: "integer";
                                        readonly format: "int64";
                                        readonly description: "The total compute units consumed producing this block";
                                        readonly minimum: 0;
                                        readonly maximum: 9223372036854776000;
                                    };
                                    readonly totalComputeUnitsLimit: {
                                        readonly type: "integer";
                                        readonly format: "int64";
                                        readonly description: "The total compute limits indicated for this block";
                                        readonly minimum: 0;
                                        readonly maximum: 9223372036854776000;
                                    };
                                    readonly totalRewardAmount: {
                                        readonly type: "integer";
                                        readonly format: "int64";
                                        readonly description: "The total reward amount";
                                        readonly minimum: 0;
                                        readonly maximum: 9223372036854776000;
                                    };
                                    readonly totalTxFees: {
                                        readonly type: "integer";
                                        readonly format: "int64";
                                        readonly description: "The total transaction fees collected in the block";
                                        readonly minimum: 0;
                                        readonly maximum: 9223372036854776000;
                                    };
                                    readonly voteTransactions: {
                                        readonly type: "integer";
                                        readonly format: "int32";
                                        readonly description: "The number of vote transactions in this blocl";
                                        readonly minimum: 0;
                                        readonly maximum: 2147483647;
                                    };
                                };
                            };
                        };
                    };
                    readonly description: "A list of block data to be returned";
                };
                readonly pagination: {
                    readonly type: "object";
                    readonly properties: {
                        readonly next: {
                            readonly type: readonly ["integer", "null"];
                            readonly format: "int64";
                            readonly description: "The next cursor pointer";
                            readonly minimum: 0;
                            readonly maximum: 9223372036854776000;
                        };
                        readonly previous: {
                            readonly type: readonly ["integer", "null"];
                            readonly format: "int64";
                            readonly description: "The previous cursor pointer";
                            readonly minimum: 0;
                            readonly maximum: 9223372036854776000;
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly description: "This is where we have our API error response struct\nFeel free to design your own API Error response\nFor this example I am referencing Google's JSON API error response\nhttps://cloud.google.com/apis/design/errors";
            readonly required: readonly ["code", "message", "status"];
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 0;
                    readonly examples: readonly ["500"];
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal Server Error"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["500"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly description: "This is where we have our API error response struct\nFeel free to design your own API Error response\nFor this example I am referencing Google's JSON API error response\nhttps://cloud.google.com/apis/design/errors";
            readonly required: readonly ["code", "message", "status"];
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 0;
                    readonly examples: readonly ["500"];
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal Server Error"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["500"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetDailyTxFees: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly date: {
                    readonly type: readonly ["string", "null"];
                    readonly examples: readonly ["19-07-2022"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The date in `dd-mm-yyyy` format to get the transaction fees";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["date", "totalTxFees"];
            readonly properties: {
                readonly date: {
                    readonly type: "string";
                    readonly description: "The date of the data retrieved";
                };
                readonly totalTxFees: {
                    readonly type: "integer";
                    readonly description: "The total transaction fees accumulated";
                    readonly minimum: 0;
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly description: "This is where we have our API error response struct\nFeel free to design your own API Error response\nFor this example I am referencing Google's JSON API error response\nhttps://cloud.google.com/apis/design/errors";
            readonly required: readonly ["code", "message", "status"];
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 0;
                    readonly examples: readonly ["500"];
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal Server Error"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["500"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly description: "This is where we have our API error response struct\nFeel free to design your own API Error response\nFor this example I am referencing Google's JSON API error response\nhttps://cloud.google.com/apis/design/errors";
            readonly required: readonly ["code", "message", "status"];
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 0;
                    readonly examples: readonly ["500"];
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal Server Error"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["500"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetDomainsAndSubdomainsByHash: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly hash: {
                    readonly type: "string";
                    readonly examples: readonly ["nix9RErnQYXpuf329ntPgSzThogtfeyUempD7zDrnSH"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The wallet hash that owns a domain/subdomain";
                };
            };
            readonly required: readonly ["hash"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly required: readonly ["owner", "domains"];
                readonly properties: {
                    readonly domains: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "object";
                            readonly required: readonly ["name", "nameServiceAccount", "subdomains"];
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                    readonly description: "The name of the domain";
                                };
                                readonly nameServiceAccount: {
                                    readonly type: "string";
                                    readonly description: "The name service account hash of the domain";
                                };
                                readonly subdomains: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "object";
                                        readonly required: readonly ["name", "subdomainHash"];
                                        readonly properties: {
                                            readonly name: {
                                                readonly type: "string";
                                                readonly description: "The name of the subdomain";
                                            };
                                            readonly subdomainHash: {
                                                readonly type: "string";
                                                readonly description: "The subdomain account hash";
                                            };
                                        };
                                    };
                                    readonly description: "A list of subdomains that belongs to this current domain";
                                };
                            };
                        };
                        readonly description: "A list of Bonfida Domain Objects";
                    };
                    readonly owner: {
                        readonly type: "string";
                        readonly description: "The owner hash of the domain/subdomain account";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly description: "This is where we have our API error response struct\nFeel free to design your own API Error response\nFor this example I am referencing Google's JSON API error response\nhttps://cloud.google.com/apis/design/errors";
            readonly required: readonly ["code", "message", "status"];
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 0;
                    readonly examples: readonly ["500"];
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal Server Error"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["500"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetFavouriteDomainsByAccount: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly hash: {
                    readonly type: "string";
                    readonly examples: readonly ["AK2VbkdYLHSiJKS6AGUfNZYNaejABkV6VYDX1Vrgxfo"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The wallet hash that owns the domain";
                };
            };
            readonly required: readonly ["hash"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["domains"];
            readonly properties: {
                readonly domains: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly required: readonly ["name", "nameServiceAccount", "owner", "favourite"];
                        readonly properties: {
                            readonly favourite: {
                                readonly type: "boolean";
                                readonly description: "Indicates whether the domain is set as favourite";
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly description: "The domain name";
                            };
                            readonly nameServiceAccount: {
                                readonly type: "string";
                                readonly description: "The account hash of the domain";
                            };
                            readonly owner: {
                                readonly type: "string";
                                readonly description: "The owner's hash of the domain";
                            };
                        };
                    };
                    readonly description: "A list of favoutire domains";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly description: "This is where we have our API error response struct\nFeel free to design your own API Error response\nFor this example I am referencing Google's JSON API error response\nhttps://cloud.google.com/apis/design/errors";
            readonly required: readonly ["code", "message", "status"];
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 0;
                    readonly examples: readonly ["500"];
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal Server Error"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["500"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetFavouriteDomainsByMultipleAccounts: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["accountHashes", "fidaType"];
        readonly properties: {
            readonly accountHashes: {
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                };
                readonly description: "The list of domain owner account hashes to query for";
            };
            readonly fidaType: {
                readonly type: "string";
                readonly description: "Fida type to filter the results\nOptions are either `OWNER` or `NAME_SERVICE`";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly required: readonly ["owner", "name", "nameServiceAccount"];
                readonly properties: {
                    readonly name: {
                        readonly type: "string";
                        readonly description: "The name of the domain";
                    };
                    readonly nameServiceAccount: {
                        readonly type: "string";
                        readonly description: "The name service account hash of the domain";
                    };
                    readonly owner: {
                        readonly type: "string";
                        readonly description: "The domain owner's account hash";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly description: "This is where we have our API error response struct\nFeel free to design your own API Error response\nFor this example I am referencing Google's JSON API error response\nhttps://cloud.google.com/apis/design/errors";
            readonly required: readonly ["code", "message", "status"];
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 0;
                    readonly examples: readonly ["500"];
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal Server Error"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["500"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly description: "This is where we have our API error response struct\nFeel free to design your own API Error response\nFor this example I am referencing Google's JSON API error response\nhttps://cloud.google.com/apis/design/errors";
            readonly required: readonly ["code", "message", "status"];
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 0;
                    readonly examples: readonly ["500"];
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal Server Error"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["500"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetMultipleAccounts: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["accountHashes"];
        readonly properties: {
            readonly accountHashes: {
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                    readonly examples: readonly ["Cs23cJMRuahuKh5oNhVmLhM2UrtaZLULLF3HqrxfTnHc"];
                };
                readonly description: "The account/wallet hashes to query for";
                readonly examples: readonly ["Cs23cJMRuahuKh5oNhVmLhM2UrtaZLULLF3HqrxfTnHc", "A6TDkkwU1BS6Ywe5xcaWsZjuYci8YzzqXA6363khgoP5"];
            };
            readonly fields: {
                readonly type: readonly ["array", "null"];
                readonly items: {
                    readonly type: "string";
                    readonly examples: readonly ["Cs23cJMRuahuKh5oNhVmLhM2UrtaZLULLF3HqrxfTnHc"];
                };
                readonly description: "Specify the field objects to be returned in the result\nAvailable array fields: `data`, `onchain`, `*`";
                readonly examples: readonly ["onchain"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly required: readonly ["accountHash"];
                readonly properties: {
                    readonly accountHash: {
                        readonly type: "string";
                        readonly description: "The pubkey of the account returned";
                    };
                    readonly data: {
                        readonly type: readonly ["object", "null"];
                        readonly required: readonly ["friendlyName", "abbreviation", "category", "network", "tags"];
                        readonly properties: {
                            readonly abbreviation: {
                                readonly type: "string";
                                readonly description: "Account abbreviation (e.g. USDC)";
                            };
                            readonly category: {
                                readonly type: "string";
                                readonly description: "Category of the Account (e.g. Tokens)";
                            };
                            readonly flag: {
                                readonly type: readonly ["string", "null"];
                                readonly description: "SolanaFM flagged accounts (e.g. scammer, hacker)";
                            };
                            readonly friendlyName: {
                                readonly type: "string";
                                readonly description: "SolanaFM labelled name / on-chain indexed name (e.g. USD Coin)";
                            };
                            readonly logoURI: {
                                readonly type: readonly ["string", "null"];
                                readonly description: "Image url for the account";
                            };
                            readonly network: {
                                readonly type: "string";
                                readonly description: "(e.g. mainnet/devnet)";
                            };
                            readonly tags: {
                                readonly type: "array";
                                readonly description: "SolanaFM labelled tags";
                                readonly items: {
                                    readonly type: "string";
                                };
                            };
                            readonly voteKey: {
                                readonly type: readonly ["string", "null"];
                                readonly description: "Vote key only exists for validator accounts";
                            };
                        };
                    };
                    readonly onchain: {
                        readonly type: readonly ["object", "null"];
                        readonly required: readonly ["lamports", "data", "owner", "executable", "rentEpoch"];
                        readonly properties: {
                            readonly data: {
                                readonly oneOf: readonly [{
                                    readonly type: "string";
                                    readonly format: "binary";
                                }, {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "string";
                                    };
                                }, {
                                    readonly type: "object";
                                    readonly required: readonly ["info", "account_type"];
                                    readonly properties: {
                                        readonly account_type: {
                                            readonly type: "string";
                                        };
                                        readonly info: {};
                                    };
                                }];
                            };
                            readonly executable: {
                                readonly type: "boolean";
                                readonly description: "Indicates whether the account is an executable account or not";
                            };
                            readonly lamports: {
                                readonly type: "integer";
                                readonly format: "int64";
                                readonly description: "Amount of lamports in the account";
                                readonly minimum: 0;
                                readonly maximum: 9223372036854776000;
                            };
                            readonly owner: {
                                readonly type: "string";
                                readonly description: "Owner of the account";
                            };
                            readonly rentEpoch: {
                                readonly type: "integer";
                                readonly format: "int64";
                                readonly description: "Rent epoch of the account";
                                readonly minimum: 0;
                                readonly maximum: 9223372036854776000;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly description: "This is where we have our API error response struct\nFeel free to design your own API Error response\nFor this example I am referencing Google's JSON API error response\nhttps://cloud.google.com/apis/design/errors";
            readonly required: readonly ["code", "message", "status"];
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 0;
                    readonly examples: readonly ["500"];
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal Server Error"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["500"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly description: "This is where we have our API error response struct\nFeel free to design your own API Error response\nFor this example I am referencing Google's JSON API error response\nhttps://cloud.google.com/apis/design/errors";
            readonly required: readonly ["code", "message", "status"];
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 0;
                    readonly examples: readonly ["500"];
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal Server Error"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["500"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetMultipleBlocks: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["blockNumbers"];
        readonly properties: {
            readonly blockNumbers: {
                readonly type: "array";
                readonly items: {
                    readonly type: "integer";
                    readonly format: "int64";
                    readonly minimum: 0;
                    readonly maximum: 9223372036854776000;
                };
                readonly description: "A list of block numbers to query for";
            };
            readonly hydration: {
                readonly type: readonly ["object", "null"];
                readonly required: readonly ["accountHash"];
                readonly properties: {
                    readonly accountHash: {
                        readonly type: "boolean";
                        readonly description: "(true/false) to include hydration of account info in the response";
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly required: readonly ["blockNumber", "data"];
                readonly properties: {
                    readonly blockNumber: {
                        readonly type: "integer";
                        readonly format: "int64";
                        readonly description: "The block number retrieved";
                        readonly minimum: 0;
                        readonly maximum: 9223372036854776000;
                    };
                    readonly data: {
                        readonly type: "object";
                        readonly required: readonly ["epoch", "previousHash", "producer", "hash", "parentNumber", "number", "dataSize", "numberOfTransactions", "successfulTransactions", "voteTransactions", "totalTxFees", "numberOfRewards", "totalRewardAmount", "totalComputeUnitsConsumed", "totalComputeUnitsLimit", "blockTime"];
                        readonly properties: {
                            readonly blockTime: {
                                readonly type: "integer";
                                readonly format: "int64";
                                readonly description: "The time that this block is produced";
                                readonly minimum: 0;
                                readonly maximum: 9223372036854776000;
                            };
                            readonly dataSize: {
                                readonly type: "integer";
                                readonly format: "int64";
                                readonly description: "The data size of this block";
                                readonly minimum: 0;
                                readonly maximum: 9223372036854776000;
                            };
                            readonly epoch: {
                                readonly type: "integer";
                                readonly format: "int32";
                                readonly description: "The epoch that this block belongs to";
                                readonly minimum: 0;
                                readonly maximum: 2147483647;
                            };
                            readonly hash: {
                                readonly type: "string";
                                readonly description: "The block hash";
                            };
                            readonly number: {
                                readonly type: "integer";
                                readonly format: "int64";
                                readonly description: "The block number";
                                readonly minimum: 0;
                                readonly maximum: 9223372036854776000;
                            };
                            readonly numberOfRewards: {
                                readonly type: "integer";
                                readonly format: "int32";
                                readonly description: "The number of rewards being issued";
                                readonly minimum: 0;
                                readonly maximum: 2147483647;
                            };
                            readonly numberOfTransactions: {
                                readonly type: "integer";
                                readonly format: "int32";
                                readonly description: "The number of transactions produced in this block";
                                readonly minimum: 0;
                                readonly maximum: 2147483647;
                            };
                            readonly parentNumber: {
                                readonly type: "integer";
                                readonly format: "int64";
                                readonly description: "The parent's block number";
                                readonly minimum: 0;
                                readonly maximum: 9223372036854776000;
                            };
                            readonly previousHash: {
                                readonly type: "string";
                                readonly description: "The previous block's block hash";
                            };
                            readonly producer: {
                                readonly oneOf: readonly [{
                                    readonly type: "object";
                                    readonly required: readonly ["String"];
                                    readonly properties: {
                                        readonly String: {
                                            readonly type: "string";
                                            readonly description: "The block producer account hash";
                                        };
                                    };
                                }, {
                                    readonly type: "object";
                                    readonly required: readonly ["Account"];
                                    readonly properties: {
                                        readonly Account: {
                                            readonly type: "object";
                                            readonly required: readonly ["accountHash"];
                                            readonly properties: {
                                                readonly accountHash: {
                                                    readonly type: "string";
                                                    readonly description: "The pubkey of the account returned";
                                                };
                                                readonly data: {
                                                    readonly type: readonly ["object", "null"];
                                                    readonly required: readonly ["friendlyName", "abbreviation", "category", "network", "tags"];
                                                    readonly properties: {
                                                        readonly abbreviation: {
                                                            readonly type: "string";
                                                            readonly description: "Account abbreviation (e.g. USDC)";
                                                        };
                                                        readonly category: {
                                                            readonly type: "string";
                                                            readonly description: "Category of the Account (e.g. Tokens)";
                                                        };
                                                        readonly flag: {
                                                            readonly type: readonly ["string", "null"];
                                                            readonly description: "SolanaFM flagged accounts (e.g. scammer, hacker)";
                                                        };
                                                        readonly friendlyName: {
                                                            readonly type: "string";
                                                            readonly description: "SolanaFM labelled name / on-chain indexed name (e.g. USD Coin)";
                                                        };
                                                        readonly logoURI: {
                                                            readonly type: readonly ["string", "null"];
                                                            readonly description: "Image url for the account";
                                                        };
                                                        readonly network: {
                                                            readonly type: "string";
                                                            readonly description: "(e.g. mainnet/devnet)";
                                                        };
                                                        readonly tags: {
                                                            readonly type: "array";
                                                            readonly description: "SolanaFM labelled tags";
                                                            readonly items: {
                                                                readonly type: "string";
                                                            };
                                                        };
                                                        readonly voteKey: {
                                                            readonly type: readonly ["string", "null"];
                                                            readonly description: "Vote key only exists for validator accounts";
                                                        };
                                                    };
                                                };
                                                readonly onchain: {
                                                    readonly type: readonly ["object", "null"];
                                                    readonly required: readonly ["lamports", "data", "owner", "executable", "rentEpoch"];
                                                    readonly properties: {
                                                        readonly data: {
                                                            readonly oneOf: readonly [{
                                                                readonly type: "string";
                                                                readonly format: "binary";
                                                            }, {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "string";
                                                                };
                                                            }, {
                                                                readonly type: "object";
                                                                readonly required: readonly ["info", "account_type"];
                                                                readonly properties: {
                                                                    readonly account_type: {
                                                                        readonly type: "string";
                                                                    };
                                                                    readonly info: {};
                                                                };
                                                            }];
                                                        };
                                                        readonly executable: {
                                                            readonly type: "boolean";
                                                            readonly description: "Indicates whether the account is an executable account or not";
                                                        };
                                                        readonly lamports: {
                                                            readonly type: "integer";
                                                            readonly format: "int64";
                                                            readonly description: "Amount of lamports in the account";
                                                            readonly minimum: 0;
                                                            readonly maximum: 9223372036854776000;
                                                        };
                                                        readonly owner: {
                                                            readonly type: "string";
                                                            readonly description: "Owner of the account";
                                                        };
                                                        readonly rentEpoch: {
                                                            readonly type: "integer";
                                                            readonly format: "int64";
                                                            readonly description: "Rent epoch of the account";
                                                            readonly minimum: 0;
                                                            readonly maximum: 9223372036854776000;
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                }];
                            };
                            readonly successfulTransactions: {
                                readonly type: "integer";
                                readonly format: "int32";
                                readonly description: "The number of successful transactions in this block";
                                readonly minimum: 0;
                                readonly maximum: 2147483647;
                            };
                            readonly totalComputeUnitsConsumed: {
                                readonly type: "integer";
                                readonly format: "int64";
                                readonly description: "The total compute units consumed producing this block";
                                readonly minimum: 0;
                                readonly maximum: 9223372036854776000;
                            };
                            readonly totalComputeUnitsLimit: {
                                readonly type: "integer";
                                readonly format: "int64";
                                readonly description: "The total compute limits indicated for this block";
                                readonly minimum: 0;
                                readonly maximum: 9223372036854776000;
                            };
                            readonly totalRewardAmount: {
                                readonly type: "integer";
                                readonly format: "int64";
                                readonly description: "The total reward amount";
                                readonly minimum: 0;
                                readonly maximum: 9223372036854776000;
                            };
                            readonly totalTxFees: {
                                readonly type: "integer";
                                readonly format: "int64";
                                readonly description: "The total transaction fees collected in the block";
                                readonly minimum: 0;
                                readonly maximum: 9223372036854776000;
                            };
                            readonly voteTransactions: {
                                readonly type: "integer";
                                readonly format: "int32";
                                readonly description: "The number of vote transactions in this blocl";
                                readonly minimum: 0;
                                readonly maximum: 2147483647;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly description: "This is where we have our API error response struct\nFeel free to design your own API Error response\nFor this example I am referencing Google's JSON API error response\nhttps://cloud.google.com/apis/design/errors";
            readonly required: readonly ["code", "message", "status"];
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 0;
                    readonly examples: readonly ["500"];
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal Server Error"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["500"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetMultipleDomainsAndSubdomainsByHash: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["accountHashes"];
        readonly properties: {
            readonly accountHashes: {
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly additionalProperties: {
                readonly type: "object";
                readonly required: readonly ["owner", "domains"];
                readonly properties: {
                    readonly domains: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "object";
                            readonly required: readonly ["name", "nameServiceAccount", "subdomains"];
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                    readonly description: "The name of the domain";
                                };
                                readonly nameServiceAccount: {
                                    readonly type: "string";
                                    readonly description: "The name service account hash of the domain";
                                };
                                readonly subdomains: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "object";
                                        readonly required: readonly ["name", "subdomainHash"];
                                        readonly properties: {
                                            readonly name: {
                                                readonly type: "string";
                                                readonly description: "The name of the subdomain";
                                            };
                                            readonly subdomainHash: {
                                                readonly type: "string";
                                                readonly description: "The subdomain account hash";
                                            };
                                        };
                                    };
                                    readonly description: "A list of subdomains that belongs to this current domain";
                                };
                            };
                        };
                        readonly description: "A list of Bonfida Domain Objects";
                    };
                    readonly owner: {
                        readonly type: "string";
                        readonly description: "The owner hash of the domain/subdomain account";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly description: "This is where we have our API error response struct\nFeel free to design your own API Error response\nFor this example I am referencing Google's JSON API error response\nhttps://cloud.google.com/apis/design/errors";
            readonly required: readonly ["code", "message", "status"];
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 0;
                    readonly examples: readonly ["500"];
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal Server Error"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["500"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly description: "This is where we have our API error response struct\nFeel free to design your own API Error response\nFor this example I am referencing Google's JSON API error response\nhttps://cloud.google.com/apis/design/errors";
            readonly required: readonly ["code", "message", "status"];
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 0;
                    readonly examples: readonly ["500"];
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal Server Error"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["500"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetOneToken: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly hash: {
                    readonly type: "string";
                    readonly examples: readonly ["EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Retrieve information about a token given the hash";
                };
            };
            readonly required: readonly ["hash"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly description: "This is where we have our API error response struct\nFeel free to design your own API Error response\nFor this example I am referencing Google's JSON API error response\nhttps://cloud.google.com/apis/design/errors";
            readonly required: readonly ["code", "message", "status"];
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 0;
                    readonly examples: readonly ["500"];
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal Server Error"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["500"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetSubdomainsByAccount: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly hash: {
                    readonly type: "string";
                    readonly examples: readonly ["AK2VbkdYLHSiJKS6AGUfNZYNaejABkV6VYDX1Vrgxfo"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The domain owner's account hash";
                };
            };
            readonly required: readonly ["hash"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["owner", "subdomains"];
            readonly properties: {
                readonly owner: {
                    readonly type: "string";
                    readonly description: "The owner's hash of the domain";
                };
                readonly subdomains: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly required: readonly ["name", "subdomainHash"];
                        readonly properties: {
                            readonly name: {
                                readonly type: "string";
                                readonly description: "The name of the subdomain";
                            };
                            readonly subdomainHash: {
                                readonly type: "string";
                                readonly description: "The subdomain account hash";
                            };
                        };
                    };
                    readonly description: "The list of subdomains owned";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly description: "This is where we have our API error response struct\nFeel free to design your own API Error response\nFor this example I am referencing Google's JSON API error response\nhttps://cloud.google.com/apis/design/errors";
            readonly required: readonly ["code", "message", "status"];
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 0;
                    readonly examples: readonly ["500"];
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal Server Error"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["500"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetSubdomainsByMultipleAccounts: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["accountHashes"];
        readonly properties: {
            readonly accountHashes: {
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                };
                readonly description: "The list of domain owner's account hashes";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly required: readonly ["owner", "subdomains"];
                readonly properties: {
                    readonly owner: {
                        readonly type: "string";
                        readonly description: "The owner's hash of the domain";
                    };
                    readonly subdomains: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "object";
                            readonly required: readonly ["name", "subdomainHash"];
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                    readonly description: "The name of the subdomain";
                                };
                                readonly subdomainHash: {
                                    readonly type: "string";
                                    readonly description: "The subdomain account hash";
                                };
                            };
                        };
                        readonly description: "The list of subdomains owned";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly description: "This is where we have our API error response struct\nFeel free to design your own API Error response\nFor this example I am referencing Google's JSON API error response\nhttps://cloud.google.com/apis/design/errors";
            readonly required: readonly ["code", "message", "status"];
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 0;
                    readonly examples: readonly ["500"];
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal Server Error"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["500"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly description: "This is where we have our API error response struct\nFeel free to design your own API Error response\nFor this example I am referencing Google's JSON API error response\nhttps://cloud.google.com/apis/design/errors";
            readonly required: readonly ["code", "message", "status"];
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 0;
                    readonly examples: readonly ["500"];
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal Server Error"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["500"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetTfiTokenData: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly mint: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["mint"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly description: "This is where we have our API error response struct\nFeel free to design your own API Error response\nFor this example I am referencing Google's JSON API error response\nhttps://cloud.google.com/apis/design/errors";
            readonly required: readonly ["code", "message", "status"];
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 0;
                    readonly examples: readonly ["500"];
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal Server Error"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["500"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly description: "This is where we have our API error response struct\nFeel free to design your own API Error response\nFor this example I am referencing Google's JSON API error response\nhttps://cloud.google.com/apis/design/errors";
            readonly required: readonly ["code", "message", "status"];
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 0;
                    readonly examples: readonly ["500"];
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal Server Error"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["500"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetTokenAccountsForTokenMint: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly mint: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["mint"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly type: readonly ["integer", "null"];
                    readonly format: "int64";
                    readonly minimum: 0;
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Page number of the next page to retrieve";
                };
                readonly pageSize: {
                    readonly type: readonly ["integer", "null"];
                    readonly format: "int64";
                    readonly minimum: 0;
                    readonly maximum: 9223372036854776000;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of items to return in a single response";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly description: "This is where we have our API error response struct\nFeel free to design your own API Error response\nFor this example I am referencing Google's JSON API error response\nhttps://cloud.google.com/apis/design/errors";
            readonly required: readonly ["code", "message", "status"];
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 0;
                    readonly examples: readonly ["500"];
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal Server Error"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["500"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly description: "This is where we have our API error response struct\nFeel free to design your own API Error response\nFor this example I am referencing Google's JSON API error response\nhttps://cloud.google.com/apis/design/errors";
            readonly required: readonly ["code", "message", "status"];
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 0;
                    readonly examples: readonly ["500"];
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal Server Error"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["500"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetTokenByAccountHash: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly hash: {
                    readonly type: "string";
                    readonly examples: readonly ["EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The token hash to query by";
                };
            };
            readonly required: readonly ["hash"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["tokenHash", "data"];
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly required: readonly ["mint", "cache_name", "cache_symbol", "decimals", "description", "cache_logo", "tags", "verified", "network", "metadata_token"];
                    readonly properties: {
                        readonly cache_logo: {
                            readonly type: "string";
                            readonly description: "Image url of the token logo";
                        };
                        readonly cache_name: {
                            readonly type: "string";
                            readonly description: "Token name (e.g. USD Coin) that is either indexed or labelled by the SolanaFM team";
                        };
                        readonly cache_symbol: {
                            readonly type: "string";
                            readonly description: "Token symbol (e.g. USDC) that is either indexed or labelled by the SolanaFM team";
                        };
                        readonly decimals: {
                            readonly type: "integer";
                            readonly format: "int32";
                            readonly description: "Decimal place of the token";
                            readonly minimum: 0;
                            readonly maximum: 2147483647;
                        };
                        readonly description: {
                            readonly type: "string";
                            readonly description: "Description of the token";
                        };
                        readonly metadata_token: {
                            readonly type: "string";
                            readonly description: "Token's metadata field";
                        };
                        readonly mint: {
                            readonly type: "string";
                            readonly description: "Token mint hash";
                        };
                        readonly network: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                            readonly description: "(e.g. mainnet, devnet)";
                        };
                        readonly tags: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                            readonly description: "SolanaFM labelled tags";
                        };
                        readonly verified: {
                            readonly type: "string";
                            readonly description: "Indicates if the token is verified on-chain";
                        };
                    };
                };
                readonly tokenHash: {
                    readonly type: "string";
                    readonly description: "Token hash based on the hash that you queried for";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly description: "This is where we have our API error response struct\nFeel free to design your own API Error response\nFor this example I am referencing Google's JSON API error response\nhttps://cloud.google.com/apis/design/errors";
            readonly required: readonly ["code", "message", "status"];
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 0;
                    readonly examples: readonly ["500"];
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal Server Error"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["500"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly description: "This is where we have our API error response struct\nFeel free to design your own API Error response\nFor this example I am referencing Google's JSON API error response\nhttps://cloud.google.com/apis/design/errors";
            readonly required: readonly ["code", "message", "status"];
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 0;
                    readonly examples: readonly ["500"];
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal Server Error"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["500"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly description: "This is where we have our API error response struct\nFeel free to design your own API Error response\nFor this example I am referencing Google's JSON API error response\nhttps://cloud.google.com/apis/design/errors";
            readonly required: readonly ["code", "message", "status"];
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 0;
                    readonly examples: readonly ["500"];
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal Server Error"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["500"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetTokenCirculatingSupply: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly mint: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["mint"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly circulatingSupply: {
                    readonly type: readonly ["number", "null"];
                    readonly format: "double";
                    readonly description: "The circulating supply indicated on the token";
                    readonly minimum: -1.7976931348623157e+308;
                    readonly maximum: 1.7976931348623157e+308;
                };
                readonly decimals: {
                    readonly type: readonly ["integer", "null"];
                    readonly format: "int32";
                    readonly description: "The decimals position";
                    readonly minimum: 0;
                    readonly maximum: 2147483647;
                };
                readonly realCirculatingSupply: {
                    readonly type: readonly ["number", "null"];
                    readonly format: "double";
                    readonly description: "The real circulating supply computed based on (total_circulating_supply - total_burnt)";
                    readonly minimum: -1.7976931348623157e+308;
                    readonly maximum: 1.7976931348623157e+308;
                };
                readonly tokenWithheldAmount: {
                    readonly type: readonly ["number", "null"];
                    readonly format: "double";
                    readonly description: "The withheld amount by the withheld authority itself";
                    readonly minimum: -1.7976931348623157e+308;
                    readonly maximum: 1.7976931348623157e+308;
                };
                readonly totalWithheldAmount: {
                    readonly type: readonly ["number", "null"];
                    readonly format: "double";
                    readonly description: "The mint withheld amount - token accounts withheld amount";
                    readonly minimum: -1.7976931348623157e+308;
                    readonly maximum: 1.7976931348623157e+308;
                };
                readonly userTotalWithheldAmount: {
                    readonly type: readonly ["number", "null"];
                    readonly format: "double";
                    readonly description: "The withheld authority total withheld amount";
                    readonly minimum: -1.7976931348623157e+308;
                    readonly maximum: 1.7976931348623157e+308;
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly description: "This is where we have our API error response struct\nFeel free to design your own API Error response\nFor this example I am referencing Google's JSON API error response\nhttps://cloud.google.com/apis/design/errors";
            readonly required: readonly ["code", "message", "status"];
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 0;
                    readonly examples: readonly ["500"];
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal Server Error"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["500"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly description: "This is where we have our API error response struct\nFeel free to design your own API Error response\nFor this example I am referencing Google's JSON API error response\nhttps://cloud.google.com/apis/design/errors";
            readonly required: readonly ["code", "message", "status"];
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 0;
                    readonly examples: readonly ["500"];
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal Server Error"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["500"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetTokensByAccountHashes: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["tokenHashes"];
        readonly properties: {
            readonly hydration: {
                readonly type: readonly ["object", "null"];
                readonly required: readonly ["accountHash"];
                readonly properties: {
                    readonly accountHash: {
                        readonly type: "boolean";
                        readonly description: "(true/false) to include hydration of account info in the response";
                    };
                };
            };
            readonly tokenHashes: {
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                };
                readonly description: "List of token hashes to be queried\n(min length: 1, max length: 50)";
                readonly examples: readonly ["BaconSBRjNckjeQCi6E2Ndg8wSmAwPgmfmZnF6ZmyFhz", "12oQm6EX2yMCQgt4sdno8iEyBaHmMvvH9kJGoM8VaeYX"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly required: readonly ["tokenHash", "data"];
                readonly properties: {
                    readonly data: {
                        readonly type: "object";
                        readonly required: readonly ["mint", "cache_name", "cache_symbol", "decimals", "description", "cache_logo", "tags", "verified", "network", "metadata_token"];
                        readonly properties: {
                            readonly cache_logo: {
                                readonly type: "string";
                                readonly description: "Image url of the token logo";
                            };
                            readonly cache_name: {
                                readonly type: "string";
                                readonly description: "Token name (e.g. USD Coin) that is either indexed or labelled by the SolanaFM team";
                            };
                            readonly cache_symbol: {
                                readonly type: "string";
                                readonly description: "Token symbol (e.g. USDC) that is either indexed or labelled by the SolanaFM team";
                            };
                            readonly decimals: {
                                readonly type: "integer";
                                readonly format: "int32";
                                readonly description: "Decimal place of the token";
                                readonly minimum: 0;
                                readonly maximum: 2147483647;
                            };
                            readonly description: {
                                readonly type: "string";
                                readonly description: "Description of the token";
                            };
                            readonly metadata_token: {
                                readonly type: "string";
                                readonly description: "Token's metadata field";
                            };
                            readonly mint: {
                                readonly type: "string";
                                readonly description: "Token mint hash";
                            };
                            readonly network: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "string";
                                };
                                readonly description: "(e.g. mainnet, devnet)";
                            };
                            readonly tags: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "string";
                                };
                                readonly description: "SolanaFM labelled tags";
                            };
                            readonly verified: {
                                readonly type: "string";
                                readonly description: "Indicates if the token is verified on-chain";
                            };
                        };
                    };
                    readonly tokenHash: {
                        readonly type: "string";
                        readonly description: "Token hash based on the hash that you queried for";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly description: "This is where we have our API error response struct\nFeel free to design your own API Error response\nFor this example I am referencing Google's JSON API error response\nhttps://cloud.google.com/apis/design/errors";
            readonly required: readonly ["code", "message", "status"];
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 0;
                    readonly examples: readonly ["500"];
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal Server Error"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["500"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly description: "This is where we have our API error response struct\nFeel free to design your own API Error response\nFor this example I am referencing Google's JSON API error response\nhttps://cloud.google.com/apis/design/errors";
            readonly required: readonly ["code", "message", "status"];
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 0;
                    readonly examples: readonly ["500"];
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal Server Error"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["500"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetTokensByPagination: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["data", "pagination"];
            readonly properties: {
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly required: readonly ["tokenHash", "data"];
                        readonly properties: {
                            readonly data: {
                                readonly type: "object";
                                readonly required: readonly ["mint", "cache_name", "cache_symbol", "decimals", "description", "cache_logo", "tags", "verified", "network", "metadata_token"];
                                readonly properties: {
                                    readonly cache_logo: {
                                        readonly type: "string";
                                        readonly description: "Image url of the token logo";
                                    };
                                    readonly cache_name: {
                                        readonly type: "string";
                                        readonly description: "Token name (e.g. USD Coin) that is either indexed or labelled by the SolanaFM team";
                                    };
                                    readonly cache_symbol: {
                                        readonly type: "string";
                                        readonly description: "Token symbol (e.g. USDC) that is either indexed or labelled by the SolanaFM team";
                                    };
                                    readonly decimals: {
                                        readonly type: "integer";
                                        readonly format: "int32";
                                        readonly description: "Decimal place of the token";
                                        readonly minimum: 0;
                                        readonly maximum: 2147483647;
                                    };
                                    readonly description: {
                                        readonly type: "string";
                                        readonly description: "Description of the token";
                                    };
                                    readonly metadata_token: {
                                        readonly type: "string";
                                        readonly description: "Token's metadata field";
                                    };
                                    readonly mint: {
                                        readonly type: "string";
                                        readonly description: "Token mint hash";
                                    };
                                    readonly network: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "string";
                                        };
                                        readonly description: "(e.g. mainnet, devnet)";
                                    };
                                    readonly tags: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "string";
                                        };
                                        readonly description: "SolanaFM labelled tags";
                                    };
                                    readonly verified: {
                                        readonly type: "string";
                                        readonly description: "Indicates if the token is verified on-chain";
                                    };
                                };
                            };
                            readonly tokenHash: {
                                readonly type: "string";
                                readonly description: "Token hash based on the hash that you queried for";
                            };
                        };
                    };
                    readonly description: "A list of tokens";
                };
                readonly pagination: {
                    readonly type: "object";
                    readonly properties: {
                        readonly next: {
                            readonly type: readonly ["string", "null"];
                            readonly description: "Next cursor string";
                        };
                        readonly previous: {
                            readonly type: readonly ["string", "null"];
                            readonly description: "Prev cursor string";
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly description: "This is where we have our API error response struct\nFeel free to design your own API Error response\nFor this example I am referencing Google's JSON API error response\nhttps://cloud.google.com/apis/design/errors";
            readonly required: readonly ["code", "message", "status"];
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 0;
                    readonly examples: readonly ["500"];
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal Server Error"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["500"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly description: "This is where we have our API error response struct\nFeel free to design your own API Error response\nFor this example I am referencing Google's JSON API error response\nhttps://cloud.google.com/apis/design/errors";
            readonly required: readonly ["code", "message", "status"];
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 0;
                    readonly examples: readonly ["500"];
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal Server Error"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["500"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetTokensOwnedByAccountHandler: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly "account-hash": {
                    readonly type: "string";
                    readonly examples: readonly ["AK2VbkdYLHSiJKS6AGUfNZYNaejABkV6VYDX1Vrgxfo"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The account/wallet hash to query for";
                };
            };
            readonly required: readonly ["account-hash"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly tokenType: {
                    readonly type: readonly ["string", "null"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filtering the returned results based on the type of account\nAvailable filters: `CompressedNonFungible`, `Fungible`, `Legacy`, `NonFungible`";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["pubkey", "tokens"];
            readonly properties: {
                readonly message: {
                    readonly type: readonly ["string", "null"];
                };
                readonly pubkey: {
                    readonly type: "string";
                    readonly description: "Account hash that you input in your API query";
                };
                readonly tokens: {
                    readonly type: "object";
                    readonly description: "A key-value mapping of all the initialised token accounts of the owner";
                    readonly additionalProperties: {
                        readonly type: "object";
                        readonly required: readonly ["mint"];
                        readonly properties: {
                            readonly ata: {
                                readonly type: readonly ["string", "null"];
                                readonly description: "Associated token account of the owner that supports the token mint\nThis field will be null for cNFTs";
                            };
                            readonly balance: {
                                readonly type: readonly ["number", "null"];
                                readonly format: "double";
                                readonly description: "The ui amount of the token balance";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                            readonly mint: {
                                readonly type: "string";
                                readonly description: "The token mint hash";
                            };
                            readonly tokenData: {
                                readonly description: "Asset's token details";
                                readonly nullable: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly description: "This is where we have our API error response struct\nFeel free to design your own API Error response\nFor this example I am referencing Google's JSON API error response\nhttps://cloud.google.com/apis/design/errors";
            readonly required: readonly ["code", "message", "status"];
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 0;
                    readonly examples: readonly ["500"];
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal Server Error"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["500"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly description: "This is where we have our API error response struct\nFeel free to design your own API Error response\nFor this example I am referencing Google's JSON API error response\nhttps://cloud.google.com/apis/design/errors";
            readonly required: readonly ["code", "message", "status"];
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 0;
                    readonly examples: readonly ["500"];
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal Server Error"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["500"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetTransfers: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly hash: {
                    readonly type: "string";
                    readonly examples: readonly ["XYTAd8UQSiiuyD4FCFFxBcxpkFUWiJJBXpV5uSzZ4UthJKB1zCHtjzvwZkvvJDR12C4yQkQdequ2NkdXXUUmzJw"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Transaction signature";
                };
            };
            readonly required: readonly ["hash"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly required: readonly ["transactionHash", "data"];
            readonly properties: {
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly required: readonly ["instructionIndex", "innerInstructionIndex", "action", "status", "token", "amount", "timestamp"];
                        readonly properties: {
                            readonly action: {
                                readonly type: "string";
                                readonly description: "The transfer action identified by the SolanaFM team";
                            };
                            readonly amount: {
                                readonly type: "integer";
                                readonly format: "int64";
                                readonly description: "The amount that is being transferred";
                                readonly minimum: 0;
                                readonly maximum: 9223372036854776000;
                            };
                            readonly destination: {
                                readonly type: readonly ["string", "null"];
                                readonly description: "The destination account hash of the fund";
                            };
                            readonly destinationAssociation: {
                                readonly type: readonly ["string", "null"];
                                readonly description: "The associated destination account hash";
                            };
                            readonly innerInstructionIndex: {
                                readonly type: "integer";
                                readonly format: "int32";
                                readonly description: "The inner instruction index of this movement";
                                readonly minimum: -2147483648;
                                readonly maximum: 2147483647;
                            };
                            readonly instructionIndex: {
                                readonly type: "integer";
                                readonly format: "int32";
                                readonly description: "The instruction index of this movement";
                                readonly minimum: -2147483648;
                                readonly maximum: 2147483647;
                            };
                            readonly source: {
                                readonly type: readonly ["string", "null"];
                                readonly description: "The source account hash of the funds";
                            };
                            readonly sourceAssociation: {
                                readonly type: readonly ["string", "null"];
                                readonly description: "The associated source account hash";
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly description: "The status of the transfer";
                            };
                            readonly timestamp: {
                                readonly type: "integer";
                                readonly format: "int64";
                                readonly description: "The timestamp of the transaction";
                                readonly minimum: 0;
                                readonly maximum: 9223372036854776000;
                            };
                            readonly token: {
                                readonly type: "string";
                                readonly description: "The token hash involved in the movement";
                            };
                        };
                    };
                    readonly description: "A list of all the individual fund movements";
                };
                readonly transactionHash: {
                    readonly type: "string";
                    readonly description: "The transaction hash of the transfer";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetUserTokenAccounts: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly includeSolBalance: {
                readonly type: readonly ["boolean", "null"];
                readonly description: "Optional parameter to include sol balance of the main wallet";
            };
            readonly tokenHashes: {
                readonly type: readonly ["array", "null"];
                readonly items: {
                    readonly type: "string";
                };
                readonly description: "An array of token mints to filter the token accounts by";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly hash: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["hash"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly description: "This is where we have our API error response struct\nFeel free to design your own API Error response\nFor this example I am referencing Google's JSON API error response\nhttps://cloud.google.com/apis/design/errors";
            readonly required: readonly ["code", "message", "status"];
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 0;
                    readonly examples: readonly ["500"];
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal Server Error"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["500"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly description: "This is where we have our API error response struct\nFeel free to design your own API Error response\nFor this example I am referencing Google's JSON API error response\nhttps://cloud.google.com/apis/design/errors";
            readonly required: readonly ["code", "message", "status"];
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 0;
                    readonly examples: readonly ["500"];
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal Server Error"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["500"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostTransfers: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["transactionHashes"];
        readonly properties: {
            readonly transactionHashes: {
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                };
                readonly description: "A list of transaction hashes to query for";
                readonly examples: readonly ["112YB4bgpRpXpjea39vxY2bAgeDTkSB5RUjryp7dJitMao3WKHbMr2ACWfsZrWyCERGypQn3Yi5Xmao5JZwcYt5", "112TZTmNNcLBMxn3oCBAnh59JUeHDU6QfqHWGsfEoVKrpmYtAA37MoPpYWnkHrjtvgfg7NTRj6x7KiCY5cdyKEf"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly required: readonly ["transactionHash", "data"];
                readonly properties: {
                    readonly data: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "object";
                            readonly required: readonly ["instructionIndex", "innerInstructionIndex", "action", "status", "token", "amount", "timestamp"];
                            readonly properties: {
                                readonly action: {
                                    readonly type: "string";
                                    readonly description: "The transfer action identified by the SolanaFM team";
                                };
                                readonly amount: {
                                    readonly type: "integer";
                                    readonly format: "int64";
                                    readonly description: "The amount that is being transferred";
                                    readonly minimum: 0;
                                    readonly maximum: 9223372036854776000;
                                };
                                readonly destination: {
                                    readonly type: readonly ["string", "null"];
                                    readonly description: "The destination account hash of the fund";
                                };
                                readonly destinationAssociation: {
                                    readonly type: readonly ["string", "null"];
                                    readonly description: "The associated destination account hash";
                                };
                                readonly innerInstructionIndex: {
                                    readonly type: "integer";
                                    readonly format: "int32";
                                    readonly description: "The inner instruction index of this movement";
                                    readonly minimum: -2147483648;
                                    readonly maximum: 2147483647;
                                };
                                readonly instructionIndex: {
                                    readonly type: "integer";
                                    readonly format: "int32";
                                    readonly description: "The instruction index of this movement";
                                    readonly minimum: -2147483648;
                                    readonly maximum: 2147483647;
                                };
                                readonly source: {
                                    readonly type: readonly ["string", "null"];
                                    readonly description: "The source account hash of the funds";
                                };
                                readonly sourceAssociation: {
                                    readonly type: readonly ["string", "null"];
                                    readonly description: "The associated source account hash";
                                };
                                readonly status: {
                                    readonly type: "string";
                                    readonly description: "The status of the transfer";
                                };
                                readonly timestamp: {
                                    readonly type: "integer";
                                    readonly format: "int64";
                                    readonly description: "The timestamp of the transaction";
                                    readonly minimum: 0;
                                    readonly maximum: 9223372036854776000;
                                };
                                readonly token: {
                                    readonly type: "string";
                                    readonly description: "The token hash involved in the movement";
                                };
                            };
                        };
                        readonly description: "A list of all the individual fund movements";
                    };
                    readonly transactionHash: {
                        readonly type: "string";
                        readonly description: "The transaction hash of the transfer";
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const RetrieveMultipleTokens: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly tokenHashes: {
                readonly type: readonly ["array", "null"];
                readonly items: {
                    readonly type: "string";
                };
                readonly description: "@deprecated\nUse the tokens field instead, this is to have backwards compatibility with the v0 tokens api";
                readonly deprecated: true;
                readonly examples: readonly ["BaconSBRjNckjeQCi6E2Ndg8wSmAwPgmfmZnF6ZmyFhz", "12oQm6EX2yMCQgt4sdno8iEyBaHmMvvH9kJGoM8VaeYX"];
            };
            readonly tokens: {
                readonly type: readonly ["array", "null"];
                readonly items: {
                    readonly type: "string";
                };
                readonly description: "The list of token hashes to be queried for";
                readonly examples: readonly ["BaconSBRjNckjeQCi6E2Ndg8wSmAwPgmfmZnF6ZmyFhz", "12oQm6EX2yMCQgt4sdno8iEyBaHmMvvH9kJGoM8VaeYX"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly description: "This is where we have our API error response struct\nFeel free to design your own API Error response\nFor this example I am referencing Google's JSON API error response\nhttps://cloud.google.com/apis/design/errors";
            readonly required: readonly ["code", "message", "status"];
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 0;
                    readonly examples: readonly ["500"];
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal Server Error"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["500"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly description: "This is where we have our API error response struct\nFeel free to design your own API Error response\nFor this example I am referencing Google's JSON API error response\nhttps://cloud.google.com/apis/design/errors";
            readonly required: readonly ["code", "message", "status"];
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                    readonly format: "int32";
                    readonly minimum: 0;
                    readonly examples: readonly ["500"];
                    readonly maximum: 2147483647;
                };
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal Server Error"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["500"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
export { DownloadCsvV1, GetAccount, GetAccountTransactions, GetAccountTransfersV1, GetAccountTxFees, GetActions, GetBlock, GetBlocksByPagination, GetDailyTxFees, GetDomainsAndSubdomainsByHash, GetFavouriteDomainsByAccount, GetFavouriteDomainsByMultipleAccounts, GetMultipleAccounts, GetMultipleBlocks, GetMultipleDomainsAndSubdomainsByHash, GetOneToken, GetSubdomainsByAccount, GetSubdomainsByMultipleAccounts, GetTfiTokenData, GetTokenAccountsForTokenMint, GetTokenByAccountHash, GetTokenCirculatingSupply, GetTokensByAccountHashes, GetTokensByPagination, GetTokensOwnedByAccountHandler, GetTransfers, GetUserTokenAccounts, PostTransfers, RetrieveMultipleTokens };
