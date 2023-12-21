// Dynamically import the ml-distance library
let ml_distance;
import("ml-distance").then((module) => {
  ml_distance = module;
});

const fs = require("fs");
const path = require("path");


class SmartRankMemoryVector {
  constructor(metadata, abi, embedding) {
    this.metadata = metadata;
    this.abi = abi;
    this.embedding = embedding;
  }
}

class MemoryVectorStore {
  memoryVectors = [];
  similarity = null;

  static instance = null;

  constructor() {
    if (ml_distance) {
      this.similarity = ml_distance.similarity.cosine;
    }
  }

  static getMemoryVectorStore() {
    if (this.instance === null) {
      this.instance = new this();
    }
    return this.instance;
  }

  addEmbeddings(embeddings) {

    const vectors = embeddings.map((item) => {
      return new SmartRankMemoryVector(item.metadata, item.abi, item.embedding);
    });

    this.memoryVectors = this.memoryVectors.concat(vectors);

  }

  addSmartRankEmbeddings(embeddings) {

    const vectors = embeddings && embeddings instanceof Array && embeddings.map((item) => {

      console.log("Adding smart rank embeddings for " + item.metadata.contract_name);

      return new SmartRankMemoryVector(item.metadata, item.abi, item.embeddings);

    });

    this.memoryVectors = this.memoryVectors.concat(vectors);

  }

  clear() {
    this.memoryVectors = [];
  }

  similaritySearchVector(query, k) {

    const results = this.memoryVectors.map((vector) => ({
      
      similarity: this.similarity(query, vector.embeddings),
      document: vector.abi,

    }));

    results.sort((a, b) => (a.similarity > b.similarity ? -1 : 1));

    return results.slice(0, k).map((result) => result.document);
  }
}

function clearVectorStore() {
  MemoryVectorStore.getMemoryVectorStore().clear();
}

async function load() {

  const store = MemoryVectorStore.getMemoryVectorStore();

  var dataFilePath;

  for (const file of fs.readdirSync("public/data")) {

    if (file.endsWith(".json") && !file.includes("dex.json")) {

      dataFilePath = path.join("public/data", file);

      console.log("Loading smart contracts from " + dataFilePath);

      const rawData = fs.readFileSync(dataFilePath, "utf8");
      const embeddingsData = JSON.parse(rawData);

      if (embeddingsData) {

        const embeddingsArray = embeddingsData

        store.addSmartRankEmbeddings(embeddingsArray);

      }

    }

  }

};

async function store(embeddings) {
  const store = MemoryVectorStore.getMemoryVectorStore();
  return store.addEmbeddings(embeddings);
}

function search(embedding, k) {
  const store = MemoryVectorStore.getMemoryVectorStore();
  return store.similaritySearchVector(embedding, k);
}

function vectorStoreSize() {
  const store = MemoryVectorStore.getMemoryVectorStore();
  return store.memoryVectors.length;
}

module.exports = {
  clearVectorStore,
  vectorStoreSize,
  store,
  search,
  load,
};
