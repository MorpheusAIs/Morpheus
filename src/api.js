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

let model = "llama2:latest";

function debugLog(msg) {
  if (global.debug) {
    console.log(msg);
  }
}

async function setModel(event, msg) {
  model = msg;
}

async function getModel(event) {
  event.reply("model:get", { success: true, content: model });
}

async function runOllamaModel(event, msg) {
  try {

    // load the embeddings into memory
    await load();

    // send an empty message to the model to load it into memory
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

// Send Chat to Morpheus 

// Asynchronously sends a chat message and processes the response
async function sendChat(event, msg) {

  let primaryPrompt = msg;
  let secondaryPrompt = "";
  let llm1ContextOutput = "";

  try {

    if (vectorStoreSize() > 0) {

      const msgEmbeds = await embed({ data: [{ section: "", content: [msg] }] });
      const searchResult = search(msgEmbeds[0].embedding, 1);
      console.log(searchResult);

      let documentString = JSON.stringify(searchResult, null, 2);

      primaryPrompt = createPrimaryPrompt(documentString, msg);

      debugLog("Sending primary prompt to model...");

      llm1ContextOutput = await generateResponse(model, primaryPrompt);

      secondaryPrompt = createSecondaryPrompt(llm1ContextOutput, msg);
      debugLog("Sending secondary prompt to model...");

      const responseJson = await generateResponse(model, secondaryPrompt);

      event.reply("chat:reply", { success: true, content: responseJson });
    }
  } catch (err) {
    console.error(err);
    event.reply("chat:reply", { success: false, content: err.message });
  }
}

// Generates the primary prompt
function createPrimaryPrompt(documentString, userMessage) {
  return `As MORPHEUS, an AI assistant expert in web3 technologies, assist in executing a smart contract transaction. Use the provided Contract ABI data and the user's message to guide your response. Ensure to:

- Create a chat output to assist in executing a smart contract transaction.
- Guide the user step by step through function calling.
- Regularly ask the user for feedback or clarification.
- Request necessary information from the user to complete the transaction, without recommending specific wallets or exchanges.
- Utilize the user's existing metamask connection for transaction completion.

Contract ABI Data: ${documentString}

User Conversation:
<user>${userMessage}</user>`;
}


// Generates the secondary prompt for formatting the response with the user message and transaction input parameters
function createSecondaryPrompt(contextOutput, userMessage) {
  return `Format the response in JSON as per the following example. Use the provided context output and the user's message to tailor the response:

Example JSON Format:
{
  "user_message": "Message to show to the user",
  "wallet_body": "MetaMask transaction content or blank if not applicable"
}

Based on this context:
${contextOutput}

And the user's inquiry:
<user>${userMessage}</user>

Ensure the final response follows this JSON structure.`;
}


// Generates a response from the model based on the given prompt
async function generateResponse(model, prompt) {

  let output = "";

  await generate(model, prompt, (json) => {
    output = json;
  });

  return output;
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
  loadDocument,
  serveOllama,
  runOllamaModel,
  stopOllama,
};
