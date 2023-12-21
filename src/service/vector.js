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

  addSmartRankEmbeddings(item) {

    // Ensure item is valid and has necessary properties
    if (item && item.metadata && item.abi && item.embeddings) {
      // Create a new SmartRankMemoryVector from the item
      const vector = new SmartRankMemoryVector(item.metadata, item.abi, item.embeddings);
  
      // Add the new vector to the memoryVectors array
      this.memoryVectors = this.memoryVectors.concat(vector);

    } else {

      console.error('Invalid item provided to addSmartRankEmbeddings');

    }
  }
  

  clear() {
    this.memoryVectors = [];
  }

  similaritySearchVector(query, k) {

    console.log('Query', query);

    const results = this.memoryVectors.map((vector) => ({
      
      similarity: this.similarity(query, vector.embedding),
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

      console.log("Loaded " + embeddingsData.metadata.contract_name);
        
      store.addSmartRankEmbeddings(embeddingsData);

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
