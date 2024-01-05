from langchain.embeddings import OllamaEmbeddings as LangChainOllamaEmbeddings
from llama_index import ServiceContext, VectorStoreIndex
from llama_index.embeddings import OllamaEmbedding as LlamaIndexOllamaEmbeddings

# having factories ensures all embeddings are computed from the same embedding model


def langchain_embeddings_factory():
    return LangChainOllamaEmbeddings()  # uses llama2


def llamaindex_embeddings_factory():
    return LlamaIndexOllamaEmbeddings(model_name="llama2")  # uses llama2


def build_llamaindex_index(embed_model, documents):
    service_context = ServiceContext.from_defaults(embed_model=embed_model, llm=None, chunk_size=4096)
    # TODO, persist locally
    index = VectorStoreIndex.from_documents(
        documents,
        service_context=service_context,
    )
    return index
