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

const { Document, VectorIndexRetriever, Ollama, serviceContextFromDefaults } = require("llamaindex");
const { ChatPromptTemplate, SystemMessagePromptTemplate, HumanMessagePromptTemplate } = require("@langchain/core/prompts");
const { ChatOllama } = require("@langchain/community/chat_models/ollama");
const { RunnableSequence, RunnableParallel, RunnablePassthrough } = require("@langchain/core/runnables");
const { StrOutputParser, StringOutputParser } = require("@langchain/core/output_parsers");
const { DirectoryLoader } = require("langchain/document_loaders/fs/directory");
const { TextLoader } = require("langchain/document_loaders/fs/text");
const { RecursiveCharacterTextSplitter } = require("langchain/text_splitter");
const { HNSWLib } = require("@langchain/community/vectorstores/hnswlib");
const { FaissStore } = require("@langchain/community/vectorstores/faiss");
const { OllamaEmbeddings } = require("langchain/embeddings/ollama");

const { ServiceContext } = require('llamaindex');
const { VectorStoreIndex } = require('llamaindex');

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


// For Smart Contract ABI Metadata Retrieval, Examples Retrieval, and Chat
const TOP_K_METADATA = 2;
const TOP_K_ABIS = 5;
const TOP_K_EXAMPLES = 1;

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

const serviceContext = serviceContextfromDefaults({ embedModel: new Ollama({ modelName: "llama2" }), llm: null, chunkSize: 4096 });

// Create Index from Documents
var index = VectorStoreIndex.fromDocuments(documentsContractsMetadata, {
  serviceContext: serviceContext
});

const documentsContractsMetadataIndex = index;

// For Smart Contracts ABI Metadata
const documentsContractsRetriever = new VectorIndexRetriever({
  index: documentsContractsMetadataIndex,
  similarityTopK: TOP_K_METADATA
});

// Asynchronously sends a chat message and processes the response
async function sendMorpheusChat(event, msg) {

  try {

    var NLQ = msg;
    var abiRetriever;

    console.log('User Message:', NLQ);

    async function loadContractABIs() {

      try {

        const retrievedContracts = await documentsContractsRetriever.retrieve(NLQ);

        console.log('Retrieved Contracts:', retrievedContracts);

        const formattedContracts = retrievedContracts.map(contract => {
          return `The Contract: ${contract.node.text}\nThe Contract's ABI:\n${contract.node.metadata.abis}`;
        });

        return createInMemoryVectorStore(formattedContracts);

      } catch (error) {
        console.error('Error loading contracts:', error);
        throw error;
      }
    }

    async function createInMemoryVectorStore(contracts) {

      const embeddings = new OllamaEmbeddings({
        model: "llama2",
        baseUrl: "http://localhost:11434",
      });
      return FAISS.fromTexts(contracts, embeddings);
    }

    const abiInMemoryVectorStore = await loadContractABIs();

    const contractAbiRetriever = await abiInMemoryVectorStore.asRetriever({ k: TOP_K_ABIS });

    async function loadMetamaskExamples() {
      try {
        const directoryLoader = new DirectoryLoader("/home/dom/Morpheus/ai_experiments/rag_assets/metamask_eth_examples", {
          ".txt": (path) => new TextLoader(path),
        });

        const examples = await directoryLoader.load();
        return createFaissStoreFromExamples(examples);
      } catch (error) {
        console.error('Error loading examples:', error);
        throw error;
      }
    }

    async function createFaissStoreFromExamples(examples) {
      const embeddings = new OllamaEmbeddings({
        model: "llama2",
        baseUrl: "http://localhost:11434",
      });
      return FaissStore.fromDocuments(examples, embeddings);
    }

    const metamaskExamplesInMemoryVectorStore = await loadMetamaskExamples();

    // Retrieval Engine
    const metamaskExamplesRetriever = metamaskExamplesInMemoryVectorStore.asRetriever({ k: TOP_K_EXAMPLES });

    const model = new ChatOllama({ model: "llama2" });

    const promptTemplate = `
    Format the response in JSON as per the following example. 
    Use the provided context output and the user's message to tailor the response:
    
    Example JSON Format:
    {{
      "user_message": "Message to show to the user",
      "json_rpc_data": "JSON body to send to the wallet",
    }}

    ABI as Context:
    {context}
    
    An relevant example of a metamask payload:
    {metamask_examples}
    
    And the user's inquiry:
    {nlq}
    
    Ensure the final response follows this JSON structure.`;

    console.log('Loading Template...');


    // Loading Messages
    const messages = [
      SystemMessagePromptTemplate.fromTemplate(promptTemplate),
      HumanMessagePromptTemplate.fromTemplate("{nlq}"),
    ];

    const prompt = ChatPromptTemplate.fromMessages(messages);

    console.log('Prompt Template Loaded');

    const chain = RunnableSequence.from([
      {
        nlq: new RunnablePassthrough(),
        context: contractAbiRetriever,
        metamask_examples: metamaskExamplesRetriever
      },
      prompt,
      model,
      new StringOutputParser(),
    ]);

    // Invoke the Chain for the NLQ response from the AI
    const result = await chain.invoke({ nlq: NLQ });

    console.log('Result:', result);

    /*     // Parser the Result and Send Ethereum Transaction
        var txn_response = await sendTransaction(result);
    
        // Parse the Response
        var txn_response_data = await txn_response.json();
    
        // Parse the Result
        var txn_response_data_result = txn_response_data.result; */

    // Send the result to the user

    event.reply("chat:reply", { success: true, content: result });

  } catch (err) {
    console.error(err);
    event.reply("chat:reply", { success: false, content: err.message });
  }
}

// SendTransaction
async function sendTransaction(route, txn_parameters) {

  // Get the Transaction Data from the AI
  var data = txn_parameters

  // Call a JSON-RPC method with the transaction data returned from the AI
  var API_KEY = '';

  // Check the JSON RPC Transaction
  console.log(txn_parameters);

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
  sendMorpheusChat,
  sendTransaction,
  loadDocument,
  serveOllama,
  runOllamaModel,
  stopOllama,
};
