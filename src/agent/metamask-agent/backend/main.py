from fastapi import FastAPI
from utils.models import TransactionRequest, ModelInference, Prompt
from utils.functions import convert_to_messages
#from agents.metamask import rag_chain
from agents.metamask2 import MOR_prompt, llm
import re
import json
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

##api endpoints
app = FastAPI()


# Define a list of allowed origins for CORS
origins = [
    "http://localhost:8080",  # Allow local development frontend
    "https://www.example.com",  # Allow a production frontend
]

# Add CORSMiddleware to the application
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # List of allowed origins
    allow_credentials=True,  # Allow credentials (cookies, authorization headers, etc.)
    allow_methods=["*"],  # Allow all methods
    allow_headers=["*"],  # Allow all headers
)



@app.get("/test")
def prompt_model(str: str):
    return str


@app.post("/prompt_ollama")
async def prompt_model(
    prompt: Prompt
    ) -> ModelInference: 
    
    global user_prompt
    if prompt.chat_history_str != None:
        chat_history = convert_to_messages(prompt.chat_history_str)
        user_prompt = MOR_prompt + chat_history + "\n<\Chat History>"  + f"\nIf the user's question relates to a message in the Chat History, use it as context and answer the question directly. Now answer the following question:{prompt} "
    else:
        user_prompt = MOR_prompt + "\n<\Chat History>"  + f"\n If the user's question relates to a message in the Chat History, use it as context and answer the question directly. Now answer the following question:{prompt} "
    
    ai_msg = llm.invoke(user_prompt)

    #TODO: use another configured chain to check for confirmed user intent and fill metamask params

    #for now use existence of json as validation
    #regular expression to find json
    json_str = re.search(r'({.*})', ai_msg, re.DOTALL)

    data = {}
    txConfirmed = False #TODO:set this with secondary model to check confirmation - run concurrently w user prompt
    if json_str:
        json_data = json_str.group(1)
        
        # Attempt to remove comments (not standard in JSON)
        json_data = re.sub(r'//.*?\n', '', json_data)
        
        try:
            # Convert JSON string to Python dictionary
            data = json.loads(json_data)
            txConfirmed = True
            print(data)
        except json.JSONDecodeError as e:
            print(f"Error decoding JSON: {e}")
    else:
        print("No JSON found")

        
    model_inference = ModelInference(message=ai_msg, executeTransactionBool=txConfirmed)
    if txConfirmed:
        transaction_request = TransactionRequest(**data)
        model_inference.transactionRequest = transaction_request

    return model_inference
