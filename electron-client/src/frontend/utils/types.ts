export type ModelResponse = {
    response: string;
    transaction: transactionParams
};

export type transactionParams = {
    [key: string]: string 
}