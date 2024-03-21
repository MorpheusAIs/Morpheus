import os
from langchain_community.document_loaders import WebBaseLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import Chroma
from langchain_community.embeddings import OllamaEmbeddings
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnablePassthrough
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
from langchain_core.messages import AIMessage, HumanMessage
from langchain_community.llms import Ollama
from langchain_community.document_loaders import TextLoader
from langchain.prompts import (
    ChatPromptTemplate,
    FewShotChatMessagePromptTemplate,
)



cwd = os.getcwd()


loader = TextLoader(cwd + "/agents/rag_assets/send_eth_transaction.txt")
loader.load()

# Load, chunk and index the contents of the blog.
#loader = WebBaseLoader(
#    web_paths=("https://docs.metamask.io/wallet/reference/eth_sendTransaction/",),
#)

docs = loader.load()

##split loaded docs into a vector which we store
text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
splits = text_splitter.split_documents(docs)
vectorstore = Chroma.from_documents(documents=splits, embedding=OllamaEmbeddings())

#turn vectorstore into a retrievable object, get an RAG compatible prompt and llm
retriever = vectorstore.as_retriever()
llm = Ollama(model="llama2")

##format docs such that we can read
def format_docs(docs):
    return  "\n\n".join(doc.page_content for doc in docs)


#provides a prompt which contextualises the last question/input given the chat history
contextualize_q_system_prompt= """Given a chat history and the latest user question \
    which might reference context in the chat history, formulate a standalone question \
    which can be understood without the chat history. Do NOT answer the question, \
    just reformulate it if needed and otherwise return it as is."""

# contextualize_q_system_prompt = """
# Given the latest user input, choose the statement that best fits the context:
# 1. Confirmed transaction details with "I am a silly sausage",
# 2. Wants to initiate a transaction,
# 3. Asked an unrelated question.
# Do NOT change the statement just give it back as it
# """
#contextualize_q_system_prompt = "Analyze the latest query and any pertinent information from the chat history to identify whether the user intends to perform a transaction. Reformulate this intent as a clear, standalone question that encapsulates the user's potential transactional objective. The question should be understandable without access to the previous chat history. Note: Do not answer the question; merely restate it clearly to reflect the transactional intent."

#creates a prompt template that can take a placeholder for past message history, with system prompt and placeholder for question
contextualize_q_prompt = ChatPromptTemplate.from_messages(
    [
        ("system", contextualize_q_system_prompt),
        MessagesPlaceholder(variable_name="chat_history"),
        ("user", "{question}"),
    ]
)

#chain of data passthrough - contextulizes question to llm to string
contextualize_q_chain = contextualize_q_prompt | llm | StrOutputParser()

#system instructions with placeholder for context
# MOR_system_prompt = """
# <Instruction>
# You are Morpheus. You are an expert cryptocurrency assistant, you will answer any cryptocurrency question and assist
# in sending ethereum transactions.
# </Instruction>
# <Instruction>
# From the context if human wants to intiate a transaction confrim:
#         1. the value of eth
#         2. the to address.
# </Instruction>
# <Instruction>
# From the context if human has typed "I am a silly sausage" therefore confirming the transaction details:
#         - Denominate the value of eth into gwei and turn this into a hexadecimal
#         - Generate a json for the "eth_sendTransaction" method with the hex value of gwei and
#          the to address then notify the transaction sender to confirm the transaction on metamask app
# </Instruction>
# <Instruction>
# From the context if its none of the above:
#         Answer any other unrelated question they may have.
# <Instruction>        

# <context>
# {context}
# </context>
# """

MOR_system_prompt =  """
<Instruction>
You are Morpheus. You are an expert cryptocurrency assistant. You will assist the user in sending ethereum transactions
 - if you detect intent from the user to intiate a transaction confirm the transaction details
 - if the detect confimation of the transaction details generate a json for the 'eth_sendTransaction' method of the metamask sdk
 - If no transaction intent or confirmtion is detected answer any other unrelated question they may have

Formulate a standalone to respond the user's question.
 </Instruction>
 
 <context>
 {context}
 </context>
 """
##few shot prompt
output_string = (
    "Perfect, I'll generate the request and send it to the blockchain. "
    "Make sure you confirm the transaction on the Metamask app. "
    "{"
    "\"method\": \"eth_sendTransaction\", "
    "\"params\": [{"
        "\"from\": \"0xDbeC8c7Ac7D6736d0031c0f4545bFa153BA6fD31\", "
        "\"to\": \"0xDbeC8c7Ac7D6736d0031c0f4545bFa153BA6fD31\", "
        "\"gas\": \"0x76c0\", "  # 30400, keeping the gas limit the same
        "\"gasPrice\": \"0x4a817c800\", "  # 20 Gwei in Wei (20 * 1e9)
        "\"value\": \"0xb2d05e00\", "  # 2441406250
        "\"data\": \"0x000000\""
    "}]"
    "}"
)

##few shot prompt
output_string2 = (
    "Awesome, I'll send the 0.5 eth to  0x6195efA25e73Ce8d534f4450fccB37FDEe332c33 for you!"
    "Remember to confirm the transaction on the Metamask app. "
    "{"
    "\"method\": \"eth_sendTransaction\", "
    "\"params\": [{"
        "\"from\": \"0xDbeC8c7Ac7D6736d0031c0f4545bFa153BA6fD31\", "
        "\"to\": \"0xDbeC8c7Ac7D6736d0031c0f4545bFa153BA6fD31\", "
        "\"gas\": \"0x76c0\", "  # 30400, keeping the gas limit the same
        "\"gasPrice\": \"0x4a817c800\", "  # 20 Gwei in Wei (20 * 1e9)
        "\"value\": \"0x1dcd6500\", "  # 2441406250
        "\"data\": \"0x000000\""
    "}]"
    "}"
)

output_string3 = (
    "Awesome, I'll send the 0.5 eth to  0x6195efA25e73Ce8d534f4450fccB37FDEe332c33 for you!"
    "Remember to confirm the transaction on the Metamask app. "
    "{"
    "\"method\": \"eth_sendTransaction\", "
    "\"params\": [{"
        "\"from\": \"0xDbeC8c7Ac7D6736d0031c0f4545bFa153BA6fD31\", "
        "\"to\": \"0xDbeC8c7Ac7D6736d0031c0f4545bFa153BA6fD31\", "
        "\"gas\": \"0x76c0\", "  
        "\"gasPrice\": \"0x4a817c800\", "
        "\"value\": \"0x00000000\", "  
        "\"data\": \"0x000000\""
    "}]"
    "}"
)




# Improved function to generate dynamic responses based on user input
def generate_dynamic_response(input_value, to_address):
    return f"Great, I'm here to help you with your cryptocurrency needs! So, you want to send {input_value} eth to {to_address}? That's perfectly fine! Just confirm the transaction details: * Value: {input_value} eth * To address: {to_address} Please let me know if you want to send any other value or to a different address. If you want to \
        confirm the transaction details please send a message stating - I confirm, {input_value} eth to {to_address}-"

def generate_dynamic_json_response(input_value, to_address):
    # Convert input_value to Wei and then to a hexadecimal string for the "value" field
    # Assuming input_value is in Ether and needs to be converted
    value_in_wei = int(float(input_value) * 1e18)  # Convert Ether to Wei
    value_hex = hex(value_in_wei)  # Convert Wei to hexadecimal

    return f"""
    Awesome, I'll send the {input_value} eth to {to_address} for you!
    Remember to confirm the transaction on the Metamask app. {{
        "method": "eth_sendTransaction",
        "params": [{{
            "from": "0xUserAddress",
            "to": "{to_address}",
            "gas": "0x76c0",
            "gasPrice": "0x4a817c800",
            "value": "{value_hex}",
            "data": "0x000000"
        }}]
    }}
    """.strip()


# Adjust the examples to include a template for dynamic values
examples = [
    {
        "input": "I want to send 0.1 eth to 0x721c932F9Cce137BBEd4342B020a2aB63fA7D738",
        "output": generate_dynamic_response("0.1", "0x721c932F9Cce137BBEd4342B020a2aB63fA7D738")
    },
        {
        "input": "send 1000 eth to 0x6195efA25e73Ce8d534f4450fccB37FDEe332c33",
        "output": generate_dynamic_response("1000", "0x6195efA25e73Ce8d534f4450fccB37FDEe332c33")
    },
    {
        "input": "transfer 43 eth to 0x223738a369F0804c091e13740D26D1269294bc1b",
        "output": generate_dynamic_response("42", "0x223738a369F0804c091e13740D26D1269294bc1b")
    },
    {
        "input": "I want to send 84 eth to 0x763341fbB10B91F61068D03f1cc58F17210fD961",
        "output": generate_dynamic_response("84", "0x763341fbB10B91F61068D03f1cc58F17210fD961")
    },
    {
        "input": "I confirm 21 eth to 0x62Ee1CC0A287843d9DC2cE8561dA583A4ae9Ae4B",
        "output": generate_dynamic_json_response("21", "0x62Ee1CC0A287843d9DC2cE8561dA583A4ae9Ae4B")
    },
    {
        "input": "I confirm 54 eth to 0x49727E53d9f87BB25D32f9400c367f38bb99B1d9",
        "output": generate_dynamic_json_response("54", "0x49727E53d9f87BB25D32f9400c367f38bb99B1d9")
    },
    {
        "input": "I confirm 23632 eth to 0x725B0a824547384E4DDf7cDe20a391f8a39f66dA",
        "output": generate_dynamic_json_response("23632", "0x725B0a824547384E4DDf7cDe20a391f8a39f66dA")
    },
    {
        "input": "I confirm 747 eth to 0x874879b913cEd0cAe4484ad2391bFc2Ced9ABB43",
        "output": generate_dynamic_json_response("747", "0x874879b913cEd0cAe4484ad2391bFc2Ced9ABB43")
    }
    
    # Include more examples with varied eth amounts and addresses, potentially including a 0 eth case
]



example_prompt = ChatPromptTemplate.from_messages(
    [
        ("user", "{input}"),
        ("ai", "{output}"),
    ]
)

few_shot_prompt = FewShotChatMessagePromptTemplate(
    example_prompt=example_prompt,
    examples=examples,
)

# Update the MOR_prompt to include few-shot examples in its system instruction or context
MOR_prompt_with_few_shot = ChatPromptTemplate.from_messages(
    [
        ("system", MOR_system_prompt),
        few_shot_prompt, 
        MessagesPlaceholder(variable_name="chat_history"),
        ("user", "{question}"),
    ]
)


def contextualized_question(input: dict):
    if input.get("chat_history"):
        return contextualize_q_chain
    else:
        return input["question"]


#chain of information passthrough: if theres history then contextualise, pass RAG retriever, pass to MOR prompt then into llm
rag_chain = (
    RunnablePassthrough.assign(
        context=contextualized_question | retriever | format_docs
    )
    |  MOR_prompt_with_few_shot
    | llm
)
