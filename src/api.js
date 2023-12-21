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

async function sendChat(event, msg) {
  let prompt = msg;
  let second_prompt = "";

  try {

    if (vectorStoreSize() > 0) {

      const msgEmbeds = await embed({
        data: [
          {
            section: "",
            content: [msg],
          },
        ],
      });

      // TopK = 3
      const searchResult = search(msgEmbeds[0].embedding, 1); // TopK = 3

      console.log(searchResult);

      // format the system context search results
      let documentString = JSON.stringify(searchResult, null, 2); // Add indentation and line breaks
      // Ensure the contextString does not exceed 500 characters
      if (documentString.length > 500) {
        documentString = documentString.substring(0, 497) + "...";
      }

      console.log(documentString);

      prompt = `Answer the Question based on the System Prompt, Contract Data and the conversation with the user. \n\n

System Prompt: You are MORPHEUS, an intelligent assistant, and a leading expert in web3, cryptocurrency, distributed consensus protocols, blockchain, cryptography, tokenization, and related crypto technologies. You are connected to a large language model running locally with a chat app in Electron. 

You were instructed by the Morpheus IC's and maintainers of the morpheus project to understand, learn from, and emulate the strategies used by web3 experts to help users make ethereum transactions. There are a few rules:

1) Use the app to create a chat output to assit executing a smart contract transaction. \n
2) Your goal is to help the user work in a step by step way through function calling to a solution. \n
3) Stop often (at a minimum after every step) to ask the user for feedback or clarification. \n
4) Based on the contract ask the user for the required information to execute the transaction. Don't recommend any specific wallet or exchange. \n
5) The user already has metamask connected. You should just ask what you need in order to complete the transaction. \n
6) You can use the contract data to help you understand what the user needs to do. \n

\n\n Contract ABI Data: ${documentString} 

\n\n Anything between the following \`user\` html blocks is is part of the conversation with the user.

<user>
  ${msg}
</user>
`;

    }


    var llm1_context_output = "";

    debugLog("Sending prompt to Ollama...");
    debugLog(prompt);

    await generate(model, prompt, (json) => {

      llm1_context_output = json;

    });

    debugLog("Sending second prompt to Ollama...");

    second_prompt = `Format result in JSON (
      {
      "user_message": the message to show to user,
      "wallet_body": content to give to meta mask, if a valid transaction was requested, otherwise blank (UI will not connect to metamask in this case.
      })
      
      based on the retrieved contract ABIs and related context: \n\n

    ${llm1_context_output}


    \n\n

    Only respond with the following in JSON: \n\n

    {
      "user_message": "${msg}",
      "wallet_body": ""
      }
    }

    \n\n Anything between the following \`user\` html blocks is is part of the conversation with the user. The user asked the following:

<user>
  ${msg}
</user>
  
    `;

    await generate(model, second_prompt, (json) => {

      event.reply("chat:reply", { success: true, content: json });

    });


  } catch (err) {
    console.log(err);
    event.reply("chat:reply", { success: false, content: err.message });
  }

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
