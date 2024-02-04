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

const { Document, VectorIndexRetriever, Ollama } = require("llamaindex");
const { ChatPromptTemplate, SystemMessagePromptTemplate, HumanMessagePromptTemplate } = require("@langchain/core/prompts");
const { ChatOllama } = require("@langchain/community/chat_models/ollama");
const { RunnableSequence, RunnableParallel, RunnablePassthrough } = require("@langchain/core/runnables");
const { StrOutputParser, StringOutputParser } = require("@langchain/core/output_parsers");
const { DirectoryLoader } = require("langchain/document_loaders/fs/directory");
const { TextLoader } = require("langchain/document_loaders/fs/text");
const { RecursiveCharacterTextSplitter } = require("langchain/text_splitter");
const { HNSWLib } = require("@langchain/community/vectorstores/hnswlib");
const { FaissStore } = require("@langchain/community/vectorstores/faiss");

const { ServiceContext } = require('llamaindex');
const { VectorStoreIndex } = require('llamaindex');
const { serviceContextFromDefaults } = require("llamaindex");

// Console FS
const fs = require("fs");
const path = require("path");

let model = "llama2:latest";

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

// Send Regular Chat
async function sendChat(event, msg) {
  let prompt = msg;
  if (vectorStoreSize() > 0) {
    const msgEmbeds = await embed({
      data: [
        {
          section: "",
          content: [msg],
        },
      ],
    });
    const searchResult = search(msgEmbeds[0].embedding, 20);
    // format the system context search results
    let documentString = searchResult.join("\n\n");
    // Ensure the contextString does not exceed 500 characters
    if (documentString.length > 500) {
      documentString = documentString.substring(0, 497) + "...";
    }
    prompt = `Using the provided document, answer the user question to the best of your ability. You must try to use information from the provided document. Combine information in the document into a coherent answer.
If there is nothing in the document relevant to the user question, say "Hmm, I don't see anything about that in this document." before providing any other information you know.
Anything between the following \`document\` html blocks is retrieved from a knowledge bank, not part of the conversation with the user.
<document>
    ${documentString}
<document/>

If there is no relevant information within the document, say "Hmm, I don't see anything about that in this document." before providing any other information you know. Anything between the preceding 'document' html blocks is retrieved from a knowledge bank, not part of the conversation with the user.

Anything between the following \`user\` html blocks is is part of the conversation with the user.
<user>
  ${msg}
</user>
`;
  }
  try {
    debugLog("Sending prompt to Ollama...");
    debugLog(prompt);
    await generate(model, prompt, (json) => {
      // Reply with the content every time we receive data
      event.reply("chat:reply", { success: true, content: json });
    });
  } catch (err) {
    console.log(err);
    event.reply("chat:reply", { success: false, content: err.message });
  }
}


/* // Ethereum JSON RPC Morpheus Agent
Use LLM to generate JSON that is passed to Metamask JSON-RPC Call
Provide Examples of Metamask JSON RPC
Detect the Intent and Parameters needed for Txns
Respond back to the user with the correct information from on chain
Using Infura RPC Call to start
Use Router Based on the Function Name and Function Response
For Smart Contract ABI Metadata Retrieval, Examples Retrieval, and Chat */

const TOP_K_METADATA = 2;
const TOP_K_ABIS = 5;
const TOP_K_EXAMPLES = 1;

// Smart Contracts Directory with ABI to make initial function call
const CONTRACTS_DIR = "public/data";

// Contracts
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

// Create OllamaEmbedding
const ollamaEmbeds = new Ollama({ model: "llama2" });

var index = VectorStoreIndex.fromDocuments(documentsContractsMetadata, {
  serviceContext: serviceContextFromDefaults({ embedModel: ollamaEmbeds, llm: new Ollama({ model: "llama2" }), chunkSize: 4096 })
});

// Create Documents Contract Metadata Index
const documentsContractsMetadataIndex = index;

// For Smart Contracts ABI Metadata
const documentsContractsRetriever = new VectorIndexRetriever({
  index: documentsContractsMetadataIndex,
  similarityTopK: TOP_K_METADATA
});

// Asynchronously sends a chat message and processes the response
async function sendMorpheusChat(event, msg) {

  console.log('Sending Morpheus Chat...');

  try {

    // User Message
    var NLQ = msg;
    var abiRetriever;

    // Console log the user NLQ
    console.log('User Message:', NLQ);

    /*
    // Load Contract ABIs
    async function loadContractABIs() {

      try {

        // Retrieve contracts based on the user message
        const retrievedContracts = await documentsContractsRetriever.retrieve(NLQ);

        console.log('Retrieved Contracts:', retrievedContracts);

        // Format the Retreived Contracts based on the results
        const formattedContracts = retrievedContracts.map(contract => {
          return `The Contract: ${contract.node.text}\nThe Contract's ABI:\n${contract.node.metadata.abis}`;
        });

        console.log('Formatted Contracts:', formattedContracts);

        // Create In Memory Vector Store
        return createInMemoryVectorStore(formattedContracts);

      } catch (error) {

        console.error('Error loading contracts:', error);
        throw error;
        
      }
    }

    // Create In Memory Vector Store
    async function createInMemoryVectorStore(contracts) {

      // Create Ollama
      const llm = new Ollama({
        model: "llama2",
        baseUrl: "http://localhost:11434",
      });

      // Create Embeddings
      const embeddings = llm.getTextEmbedding();

      return FAISS.fromTexts(contracts, embeddings);

    }

    // Load Contract ABIs
    const abiInMemoryVectorStore = await loadContractABIs();

    // Create ABI Retriever
    const contractAbiRetriever = await abiInMemoryVectorStore.asRetriever({ k: TOP_K_ABIS });

    // Load Metamask Examples
    async function loadMetamaskExamples() {
      try {
        const directoryLoader = new DirectoryLoader("Morpheus/ai_experiments/rag_assets/metamask_eth_examples", {
          ".txt": (path) => new TextLoader(path),
        });

        const examples = await directoryLoader.load();

        return createFaissStoreFromExamples(examples);

      } catch (error) {
        console.error('Error loading examples:', error);
        throw error;
      }
    }

    // Create Faiss Store
    async function createFaissStoreFromExamples(examples) {

      // Create Ollama
      const llm = new Ollama({
        model: "llama2",
        baseUrl: "http://localhost:11434",
      });

      // Embeddings
      const embeddings = llm.getTextEmbedding();

      return FaissStore.fromDocuments(examples, embeddings);
    }

    // Metamask Examples
    const metamaskExamplesInMemoryVectorStore = await loadMetamaskExamples();

    // Retrieval Engine
    const metamaskExamplesRetriever = metamaskExamplesInMemoryVectorStore.asRetriever({ k: TOP_K_EXAMPLES });

    */

    // Ollama ChatOllama
    const model = new ChatOllama({ model: "llama2" });

    // Prompt Template to Generate the JSON Body with the Method and Params
    const promptTemplate = `
    You are the Morpheus Agent helping the user with their JSON-RPC call. Format the response in JSON as per the following example. However there are a few rules: \n\n
    1. Only respond with the JSON-RPC method and params. \n
    2. Limit the response to 200 characters. \n
    3. Do not provide any additional information or explanation on how you created the response.
    4. Do not provide any text before the JSON response. Only respond with the JSON. \n
    \n\n
    Use the provided context output and the user's message to tailor the response.
    \n
    A relevant example of a JSON RPC payload:
    {{
      "jsonrpc": "2.0",
      "method": "eth_blockNumber",
      "params": [],
      "id": 1
    }}
    \n\n
    Generate the JSON based on the user's inquiry:
    {nlq}`;

    // Loading Messages
    const messages = [
      SystemMessagePromptTemplate.fromTemplate(promptTemplate),
      HumanMessagePromptTemplate.fromTemplate("{nlq}"),
    ];

    // Chat Prompt Template
    const prompt = ChatPromptTemplate.fromMessages(messages);

    console.log('Prompt Template Loaded');

    // Create Chain
    const chain = RunnableSequence.from([
      {
        nlq: new RunnablePassthrough(),
        // context: contractAbiRetriever,
        // metamask_examples: metamaskExamplesRetriever
      },
      prompt,
      model,
      new StringOutputParser(),
    ]);

    // Invoke the Chain for the NLQ response from the AI
    const result = await chain.invoke({ nlq: NLQ });

    console.log('Result:', result);

    // Get the JSON Result and Conver to JSON Object
    var result_json_object = JSON.parse(result);

    // Parse the JSON ReSponse from the LLM for the Method and Params
    const _result_json = result_json_object;

    // Retreive the Function Name from the JSON
    const _function_name = _result_json.method ? _result_json.method : 'eth_getBlockByNumber';

    // Retreive the Function Parameters from the JSON
    const _function_parameters = _result_json.params ? _result_json.params : ["latest", true];

    // Result from the Ethereum JSON-RPC Call
    var txn_response = await sendTransaction(_function_name, _function_parameters);

    console.log('Transaction Response:', txn_response);

    // Send the result to the user
    event.reply("morpheus-chat:reply", { success: true, content: txn_response });

  } catch (err) {
    console.error(err);
    event.reply("morpheus-chat:reply", { success: false, content: err.message });
  }
}

// Ethereum API to make JSON RPC Call
async function ethereumAPI(function_name, function_parameters, api_key, network) {

  // Dynamically pass in the function name and function parameters into the data object
  var data = {
    "jsonrpc": "2.0",
    "method": function_name,
    "params": function_parameters,
    "id": 1
  };

  // Infura Settings
  var infuraSettings = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };

  // Transaction to Infura
  const txn_data = await fetch(`https://${network}.infura.io/v3/${api_key}`, infuraSettings)

  // Transaction Data JSON
  const txn_data_json = await txn_data.json();

  console.log(txn_data_json);

  // Set Vars
  var _function_response;
  var function_message_response;
  var block_number_hex_string;
  var balance_number_hex_string;
  var decimal_block_number;
  var decimal_balance_number;

  // Switch Statement for the Function Name
  switch (function_name) {

    case "eth_blockNumber":

      // Retrieve Block Number from the JSON Result
      block_number_hex_string = txn_data_json.result;
      decimal_block_number = parseInt(block_number_hex_string, 16);
      function_message_response = `The latest Ethereum blockheight is ${decimal_block_number} `
      _function_response = function_message_response;

      break;

    case "eth_getBlockByNumber":

      // The Block Result from the JSON RPC Call
      var txn_response_data_result = txn_data_json.result;
      block_number_hex_string = txn_response_data_result.number;
      decimal_block_number = parseInt(block_number_hex_string, 16)
      function_message_response = `The latest Ethereum block is ${decimal_block_number} `
      _function_response = function_message_response;

      break;

    case "eth_getBalance":

      // The Balance Result from the JSON RPC Call
      var txn_response_data_result = txn_data_json.result;
      balance_number_hex_string = txn_response_data_result;
      decimal_balance_number = parseInt(balance_number_hex_string, 16)
      function_message_response = `The balance is ${decimal_balance_number} `
      _function_response = function_message_response;

      break;

  }

  // Return the Function Response
  return _function_response;

}

// Send Transaction API
// Send Ethereum Transaction Transaction Router based on the function_name and function parameters
// Pass in the Function Name and Function Parameters to the JSON RPC Call API
// Based on the Function Name, Send back a Response with the Result from the Ethereum Blockchain
async function sendTransaction(function_name, function_parameters) {

  console.log('Function Name: ', function_name);
  console.log('Function Parameter: ', function_parameters);

  // Set Infura API Key
  var api_key = '';

  // Ethereum Function Router
  switch (function_name) {

    // Call Eth Contract Method
    case "eth_call":

      function_response = await ethereumAPI(function_name, function_parameters, api_key, "mainnet");
      break;

    // Get Eth Balance
    case "eth_getBalance":

      function_response = await ethereumAPI(function_name, function_parameters, api_key, "mainnet");
      break;


    case "eth_blockNumber":

      function_response = await ethereumAPI(function_name, function_parameters, api_key, "mainnet");
      break;

    // Get Eth Block By Number
    case "eth_getBlockByNumber":

      function_response = await ethereumAPI(function_name, function_parameters, api_key, "mainnet");
      break;

    // Get Eth Transaction by Hash
    case "eth_getTransactionByHash":

      function_response = await ethereumAPI(function_name, function_parameters, api_key, "mainnet");
      break;

    // Get Eth Transaction Count
    case "eth_getTransactionCount":

      function_response = await ethereumAPI(function_name, function_parameters, api_key, "mainnet");
      break;

    // Get Eth Transaction Receipt
    case "eth_getTransactionReceipt":

      function_response = await ethereumAPI(function_name, function_parameters, api_key, "mainnet");
      break;

    default:

      // Default for Testing
      function_response = await ethereumAPI("eth_getBlockByNumber", ["latest", true], api_key, "mainnet");
      break;

  };

  // Return the Function Response
  return function_response;

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
  sendMorpheusChat,
  sendTransaction,
  loadDocument,
  serveOllama,
  runOllamaModel,
  stopOllama,
};
