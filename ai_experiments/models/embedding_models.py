from langchain.embeddings import OllamaEmbeddings


# having a factory ensures all embeddings are computed from the same embedding model
def embeddings_factory():
    return OllamaEmbeddings()  # uses llama2
