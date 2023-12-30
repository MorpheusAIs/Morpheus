"""
Download llama2
"""

from langchain.vectorstores import FAISS
from langchain.chat_models import ChatOllama
from langchain.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnablePassthrough, RunnableParallel

from llama_index import Document
from llama_index.retrievers import VectorIndexRetriever

from ai_experiments.models.embedding import build_llamaindex_index
from contracts.contracts_loader import contracts
from models.embedding import llamaindex_embeddings_factory, langchain_embeddings_factory
from models.seq2seq_models import phase2_prompt_template


TOP_K_METADATA = 2
TOP_K_ABIS= 5

num_contracts = len(contracts)
documents_contracts_metadata = [
    Document(text=str(contract[1]["metadata"]),
             metadata=
             {
                "fname": contract[0],
                "abis": contract[1]["abi"]  # inclusion results in slow similarity search (idk why)
             }
             ) for contract in contracts
]
for doc in documents_contracts_metadata:
    doc.excluded_embed_metadata_keys = [
        "abis",
        "fname"
    ]  # prevents embedding of metadata

    doc.excluded_llm_metadata_keys = [
        "abis",
        "fname"
    ]

documents_contracts_metadata_index = build_llamaindex_index(embed_model=llamaindex_embeddings_factory(),
                                                            documents=documents_contracts_metadata)

documents_contracts_retriever = VectorIndexRetriever(index=documents_contracts_metadata_index,
                                                     similarity_top_k=TOP_K_METADATA)


if __name__ == "__main__":

    # TODO, consider completion (LLM) model instead of chat

    # for prompt
    NLQ = "I want to send 10ETH to 0xbnferkjbejknwejknvekjvnrjub"   # replace with input() or cli args

    # phase one can be simplified by not invoking an LLM at all, instead just do a retrieval
    retrieved_contracts_with_abis = documents_contracts_retriever.retrieve(NLQ)

    retrieved_contracts_with_abis = [
        f"The Contract: {contract.node.text}\nThe Contract's ABI:\n{contract.node.metadata['abis']}" for contract in retrieved_contracts_with_abis
    ]

    abi_in_memory_vectorstore = FAISS.from_texts(
        retrieved_contracts_with_abis,
        embedding=langchain_embeddings_factory()
    )

    abi_retriever = abi_in_memory_vectorstore.as_retriever(search_kwargs={"k": TOP_K_ABIS})
    phase2_model = ChatOllama(model="llama2:7b")
    phase2_prompt = ChatPromptTemplate.from_template(phase2_prompt_template)

    setup_and_retrieval = RunnableParallel(
        {"nlq": RunnablePassthrough(),  # gets set by the RunnableParallel.invoke() method
         "context": abi_retriever}
    )

    chain = (
        setup_and_retrieval
        | phase2_prompt
        | phase2_model
        | StrOutputParser()
    )

    ret = chain.invoke(NLQ)

    print(ret)
