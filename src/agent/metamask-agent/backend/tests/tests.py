import bs4
import os
import re
import json
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



cwd = os.getcwd()


loader = TextLoader(cwd + "/rag_assets/send_eth_transaction.txt")
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


#creates a prompt template that can take a placeholder for past message history, with system prompt and placeholder for question
contextualize_q_prompt = ChatPromptTemplate.from_messages(
    [
        ("system", contextualize_q_system_prompt),
        MessagesPlaceholder(variable_name="chat_history"),
        ("human", "{question}"),
    ]
)

#chain of data passthrough - contextulizes question to llm to string
contextualize_q_chain = contextualize_q_prompt | llm | StrOutputParser()

#system instructions with placeholder for context
MOR_system_prompt = """
<Instruction>
As MORPHEUS, an AI assistant in assisting executing transactions. 
    - Detect the intent of sending a crypto transaction. 
    - If intent is detected confirm the following
        1. address of token they want to send
        2. the amount of tokens 
        3. the target address.
    - Given a chat history and the latest user question, if the user has confirmed the transaction intent and parameters
        - Generate a json with the parameters need use the "eth_sendTransaction" method with the metamask sdk and present it to the user
        - notify them to sign and confirm the transaction on metamask
</Instruction>

<context>
{context}
</context>
"""

#allows specified system instructions to hold placeholders for question history and question
MOR_prompt = ChatPromptTemplate.from_messages(
    [
        ("system", MOR_system_prompt),
        MessagesPlaceholder(variable_name="chat_history"),
        ("human", "{question}")
    ]
)

#if there is history present contextualise last input/question in standalone question (used to pass through context of history into system prompt)
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
    | MOR_prompt
    | llm
)

chat_history = []

question = "I want to send 3 eth to my friend adam"
ai_msg = rag_chain.invoke({"question": question, "chat_history": chat_history})
chat_history.extend([HumanMessage(content=question), AIMessage(content=ai_msg)])

question = "my friends address is 0x23412342, yes 3 eth"
ai_msg = rag_chain.invoke({"question": question, "chat_history": chat_history})
chat_history.extend([HumanMessage(content=question), AIMessage(content=ai_msg)])
print(chat_history)

#regular expression to find json
json_str = re.search(r'({.*})', ai_msg, re.DOTALL)

if json_str:
    json_data = json_str.group(1)
    
    # Attempt to remove comments (not standard in JSON)
    json_data = re.sub(r'//.*?\n', '', json_data)
    
    try:
        # Convert JSON string to Python dictionary
        data = json.loads(json_data)
        print(data)
    except json.JSONDecodeError as e:
        print(f"Error decoding JSON: {e}")
else:
    print("No JSON found")
