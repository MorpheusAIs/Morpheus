from pydantic import BaseModel

class TransactionRequest(BaseModel):
    method: str
    params: list[dict] 

class EthSendTransactionParams(BaseModel):
    from_: str
    to: str
    gas: str
    gasPrice: str
    value: str
    data: str

class ModelInference(BaseModel):
    message: str
    executeTransactionBool: bool
    transactionRequest: TransactionRequest | None = None

class Prompt(BaseModel):
    prompt: str
    chat_history_str: list[str] | None = None