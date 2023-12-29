"""
Download llama2
"""

from langchain.chat_models import ChatOllama
from langchain.vectorstores import FAISS
from langchain.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnablePassthrough, RunnableParallel

from contracts.contracts_loader import contracts
from models.embedding_models import embeddings_factory
from models.seq2seq_models import phase1_prompt_template, phase2_prompt_template


TOP_K_METADATA = 2
TOP_K_ABIS= 5

num_contracts = len(contracts)
documents_contracts_metadata = [str(contract[1]["metadata"]) for contract in contracts]  # preserves index order with contracts
documents_contracts_abis = [str(contract[1]["abi"]) for contract in contracts]  # preserves index order with contracts


metadata_in_memory_vectorstore = FAISS.from_texts(
    documents_contracts_metadata,
    embedding=embeddings_factory(),
)
metadata_retriever = metadata_in_memory_vectorstore.as_retriever(search_kwargs={"k": TOP_K_METADATA})
phase1_model = ChatOllama(model="llama2:7b")
phase1_prompt = ChatPromptTemplate.from_template(phase1_prompt_template)
# for debug purposes until we get langsmith access
# docs = metadata_retriever.get_relevant_documents("I want to send 10ETH to 0xbnferkjbejknwejknvekjvnrjub")

# abi_in_memory_vectorstore = FAISS.from_texts(
#     documents_contracts_abis,
#     embedding=embeddings_factory()
# )
# abi_retriever = abi_in_memory_vectorstore.as_retriever(search_kwargs={"k": TOP_K_ABIS})
# phase2_model = ChatOllama(model="llama2:7b")
# phase2_prompt = ChatPromptTemplate.from_template(phase2_prompt_template)

if __name__ == "__main__":

    # TODO, consider completion (LLM) model instead of chat

    # for prompt
    # prompt_embeddings = embeddings_factory()
    NLQ = "I want to send 10ETH to 0xbnferkjbejknwejknvekjvnrjub"   # replace with input() or cli args

    setup_and_retrieval = RunnableParallel(
        {"nlq": RunnablePassthrough(),  # gets set by the RunnableParallel.invoke() method
         "context": metadata_retriever}
    )

    chain = (
        setup_and_retrieval
        | phase1_prompt
        | phase1_model
        | StrOutputParser()
    )

    ret = chain.invoke(NLQ)

    print(ret)
