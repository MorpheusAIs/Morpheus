const { openFile } = require("./service/document/reader.js");
const { embed } = require("./service/embedding.js");
const {
  store,
  search,
  load,
  clearVectorStore,
  vectorStoreSize,
} = require("./service/vector.js");
const {
  abort,
  run,
  generate,
  stop,
  serve,
} = require("./service/ollama/ollama.js");

const { Document, VectorIndexRetriever } = require("llamaindex");
const { ChatPromptTemplate } = require("@langchain/core/prompts");
const { ChatOllama } = require("@langchain/community/chat_models/ollama");
const { RunnableParallel, RunnablePassthrough } = require("@langchain/core/runnables");
const { StrOutputParser } = require("@langchain/core/output_parsers");
const { DirectoryLoader } = require("langchain/document_loaders/fs/directory");

const { FaissStore } = require("@langchain/community/vectorstores/faiss");
const { Ollama } = require('llamaindex');
const { serviceContextfromDefaults } = require('llamaindex');

const { ServiceContext } = require('llamaindex');
const { VectorStoreIndex } = require('llamaindex');

const fs = require("fs");
const path = require("path");

let model = "llama2:latest";

// Smart Contracts Directory with ABI to make initial function call
const CONTRACTS_DIR = "public/data";

let contracts = []; // Array to hold contracts data

// Contract Filenames
const contractFilenames = ["1inch.json", "curve.json", "lido.json", "pancakeswap.json", "router.json", "sushiswap.json", "uniswap.json", "usdc.json", "usdt.json"];

// Function to extract metadata and abi from a contract object
function extractMetadataAbi(contract) {
  const subsetKeys = new Set(["metadata", "abi"]);
  let result = {};
  for (let key in contract) {
    if (subsetKeys.has(key)) {
      result[key] = contract[key];
    }
  }
  return result;
}

// Function to extract metadata and abi from a contract object
contractFilenames.forEach(contractFilename => {
  let filePath = path.join(CONTRACTS_DIR, contractFilename);
  let rawData = fs.readFileSync(filePath, 'utf8');
  let payload = JSON.parse(rawData);

  if (payload.contracts) {
    payload.contracts.forEach(contract => {
      contracts.push([contractFilename, extractMetadataAbi(contract)]);
    });
  } else {
    contracts.push([contractFilename, extractMetadataAbi(payload)]);
  }
});

// Function to create LangChain Ollama Embeddings
function langchainEmbeddingsFactory() {
  return new Ollama({ modelName: "llama2" });

}


// Function to build a LlamaIndex Index
async function buildLlamaIndexIndex({ embedModel, documents }) {

  // Create Service Context for LlamaIndex
  const serviceContext = serviceContextfromDefaults({ embedModel: embedModel, llm: null, chunkSize: 4096 });

  // Create Index from Documents
  const index = await VectorStoreIndex.fromDocuments({
    documents: documents,
    serviceContext: serviceContext
  });

  return index;
}

// Debug Log
function debugLog(msg) {
  if (global.debug) {
    console.log(msg);
  }
}

// Sets the model to use for the Ollama AI
async function setModel(event, msg) {
  model = msg;
}

// Gets the model to use for the Ollama AI
async function getModel(event) {
  event.reply("model:get", { success: true, content: model });
}


// Runs the Ollama AI
async function runOllamaModel(event, msg) {
  try {

    // load the embeddings into memory
    // await load(); // Removing for Cached Embeddings: TODO

    console.log('Running the model...');

    await run(model, (json) => {
      // status will be set if the model is downloading
      if (json.status) {
        if (json.status.includes("downloading")) {
          const percent = Math.round((json.completed / json.total) * 100);
          const content = isNaN(percent)
            ? "Downloading AI model..."
            : `Downloading AI model... ${percent}%`;
          event.reply("ollama:run", { success: true, content: content });
          return;
        }
        if (json.status.includes("verifying")) {
          const content = `Verifying AI model...`;
          event.reply("ollama:run", { success: true, content: content });
          return;
        }
      }
      if (json.done) {
        event.reply("ollama:run", { success: true, content: json });
        return;
      }
      event.reply("ollama:run", { success: true, content: "Initializing..." });
    });
  } catch (err) {
    console.log(err);
    event.reply("ollama:run", { success: false, content: err.message });
  }
}


// For Smart Contract ABI Metadata Retrieval, Examples Retrieval, and Chat
const TOP_K_METADATA = 2;
const TOP_K_ABIS = 5;
const TOP_K_EXAMPLES = 1;

// For Smart Contract ABI Metadata
const numContracts = contracts.length;

// For Smart Contract ABI Metadata
const documentsContractsMetadata = contracts.map(contract => {
  return new Document({
    text: contract[1].metadata.toString(),
    metadata: {
      fname: contract[0],
      abis: contract[1].abi
    },
    excludedEmbedMetadataKeys: ["abis", "fname"],
    excludedLlmMetadataKeys: ["abis", "fname"]
  });
});

console.log('Building LlamaIndex Index...');

// For Smart Contract ABI Metadata
// Retrieve the metadata for the smart contracts and store in LlamaIndex
const documentsContractsMetadataIndex = buildLlamaIndexIndex({
  embedModel: new Ollama({ modelName: "llama2" }),
  documents: documentsContractsMetadata
});

console.log('Create Vector Index Retriever...');

// For Smart Contracts ABI Metadata
const documentsContractsRetriever = new VectorIndexRetriever({
  index: documentsContractsMetadataIndex,
  similarityTopK: TOP_K_METADATA
});

// Asynchronously sends a chat message and processes the response
async function sendChat(event, msg) {

  try {

    // The users query that is sent to the AI for processing
    // The user message needs to be structured with the user_address, message, and timestamp
    const NLQ = msg;

    console.log('User Message: ' + NLQ);

    // The prompt template that is imported
    /*    const retrievedContractsMetadataWithAbis = documentsContractsRetriever.retrieve(NLQ).map(contract => {
         return `The Contract: ${contract.node.text}\n The Contract's ABI:\n${contract.node.metadata.abis}`;
       });
   
       // In Memory Vector Store with FAISS for Similarity Retrieval
       const abiInMemoryVectorStore = FAISS.fromTexts(retrievedContractsMetadataWithAbis, {
         embedding: langchainEmbeddingsFactory()
       });
   
       // ABI Retrieval Engine
       const abiRetriever = abiInMemoryVectorStore.asRetriever({ k: TOP_K_ABIS });
   
      */

    console.log('Loading JSON-RPC Examples...');

    // Create the FaissStore from the Examples and load into MemoryVectorStore from Retrival topk = 1
    /*     async function loadExamples() {
          try {
    
            const metamaskExamplesLoader = new DirectoryLoader(
              "/home/dom/Morpheus/ai_experiments/rag_assets/metamask_eth_examples",
              {
                ".txt": (path) => new DirectoryLoader(path),
              }
            );
    
            // Load the examples from the directory using the DirectoryLoader
            const metamaskExamples = await metamaskExamplesLoader.load();
    
            console.log('Metamask Examples Loaded:', metamaskExamples);
    
            // FAISS processing
            const metamaskExamplesInMemoryVectorStore = await FaissStore.fromDocuments(metamaskExamples, {
              embedding: new Ollama({ modelName: "llama2" })
            });
    
            // Additional processing or return
            return metamaskExamplesInMemoryVectorStore;
    
          } catch (error) {
            console.error('Error loading examples:', error);
            throw error; // Re-throw the error for further handling, if necessary
          }
        }
    
        var metamaskExamplesInMemoryVectorStore = await loadExamples();
    
        // Retrieval Engine
        const metamaskExamplesRetriever = metamaskExamplesInMemoryVectorStore.asRetriever({ k: TOP_K_EXAMPLES }); */

    // Model

    const model = new ChatOllama({ model: "llama2" });

    const promptTemplate = `{Format the response in JSON as per the following example. 
    Use the provided context output and the user's message to tailor the response:
    
    Example JSON Format:
    {
      "user_message": "Message to show to the user",
      "wallet_body": "\`\`\`json {<insert metamask specific context here>}\`\`\`"
    }
    
    Based on this context:
    {context}
    
    A relevant example of a metamask payload:
    {metamask_examples}
    
    And the user's inquiry:
    {nlq}
    
    Ensure the final response follows this JSON structure. \`\`\`json {<insert metamask specific context here>}\`\`\`
  }`;

    console.log('Loading Template');

    // Prompt Template from LangChain Core
    const prompt = ChatPromptTemplate.fromTemplate(promptTemplate);

    console.log('Prompt Template Loaded');

    // Setup And Retrieval
    // RunnableParallele / RunInput with the NLQ, Context, and Metamask Examples
    const setupAndRetrieval = new RunnableParallel({
      nlq: new RunnablePassthrough(),
      context: 'abi": []', // Defaulting ABI to empty array for JSON RPC Test
      metamask_examples: `{
        "jsonrpc": "2.0",
        "method": "eth_getBlockByNumber",
        "params": ["0xBlockNumber", true],
        "id": 1
      }`
    });

    console.log('Creating chain...');

    // Chain
    // Setup and Retrieval -> Prompt -> Model -> Output Parser
    const chain = setupAndRetrieval.pipe(prompt).pipe(model).pipe(new StrOutputParser());

    // Invoke the Chain for the NLQ response from the AI
    const result = chain.invoke(NLQ);

    console.log(result);

    // Parser the Result and Send Ethereum Transaction
    var txn_response = await sendTransaction(result);

    // Parse the Response
    var txn_response_data = await txn_response.json();

    // Parse the Result
    var txn_response_data_result = txn_response_data.result;

    // Send the result to the user
    event.reply("chat:reply", { success: true, content: txn_response_data_result });

  } catch (err) {
    console.error(err);
    event.reply("chat:reply", { success: false, content: err.message });
  }
}

// SendTransaction
async function sendTransaction(txn) {

  // Call a JSON-RPC method with the transaction data returned from the AI
  var API_KEY = '';

  // Check the JSON RPC Transaction
  console.log(txn);

  // Only send the JSON RPC method from the txn data
  const data = txn;

  var infuraSettings = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };

  const txn_data = await fetch(`https://mainnet.infura.io/v3/${API_KEY}`, infuraSettings)

  console.log(txn_data);

  return txn_data;

}

function stopChat() {
  abort();
}

async function loadDocument(event) {
  try {
    clearVectorStore();

    // read the document
    const doc = await openFile();
    if (doc.data.length === 0) {
      return;
    }

    // get the embeddings for the document content
    if (doc && doc.data) {
      debugLog("Parsed content...");
      for (const section of doc.data) {
        debugLog(section.section);
        debugLog(section.content);
      }
    }
    const embeddings = await embed(doc);

    // store the embeddings
    store(embeddings);

    event.reply("doc:load", { success: true, content: doc.fileName });
  } catch (err) {
    console.log(err);
    event.reply("doc:load", { success: false, content: err.message });
  }
}

async function serveOllama(event) {
  try {
    const serveType = await serve();
    event.reply("ollama:serve", { success: true, content: serveType });
  } catch (err) {
    event.reply("ollama:serve", { success: false, content: err.message });
  }
}

function stopOllama(event) {
  stop();
}

module.exports = {
  setModel,
  getModel,
  stopChat,
  sendChat,
  sendTransaction,
  loadDocument,
  serveOllama,
  runOllamaModel,
  stopOllama,
};
