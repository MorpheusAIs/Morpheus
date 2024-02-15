from pydantic import BaseModel, Field, field_validator

#Metamask Dictionary of supported methods (for use in Morpheus AI)
TransactionMethods = {
    "eth_sendTransaction": "Ethereum transaction",
    # Add more methods over time
}

# Class validator to check returned JSON from LLM is consistent with Metamask Requirements
class TransactionParams(BaseModel):
    from_: str = Field(..., pattern=r"^0x[a-fA-F0-9]{40}$", alias="from") 
    to: str = Field(..., pattern=r"^0x[a-fA-F0-9]{40}$")
    gas: str = Field(..., pattern=r"^0x([1-9a-f]+[0-9a-f]*|0)$")
    gasPrice: str = Field(..., pattern=r"^0x([1-9a-f]+[0-9a-f]*|0)$")
    value: str = Field(..., pattern=r"^0x([1-9a-f]+[0-9a-f]*|0)$")
    data: str = Field(..., pattern=r"^0x[0-9a-f]*$") 

class TransactionRequest(BaseModel):
    method: str
    params: list[TransactionParams] 
    @field_validator('method')
    def supported_methods(cls, method):
        if method not in TransactionMethods:
            raise ValueError(f"Morpheus currently supports the following methods: {list(TransactionMethods.keys())}")
        return method

class ModelInference(BaseModel):
    message: str
    executeTransactionBool: bool
    transactionRequest: TransactionRequest | None = None

class Prompt(BaseModel):
    prompt: str
    chat_history_str: list[str] | None = None