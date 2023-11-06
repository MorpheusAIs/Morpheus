var rebuildRules = undefined;
if (typeof chrome !== "undefined" && chrome.runtime && chrome.runtime.id) {
  // Running in extension
  document.getElementById('host-address-select').style.display = 'block';
  rebuildRules = async function (domain) {
    const domains = [domain];
    /** @type {chrome.declarativeNetRequest.Rule[]} */
    const rules = [{
      id: 1,
      condition: {
        requestDomains: domains
      },
      action: {
        type: 'modifyHeaders',
        requestHeaders: [{
          header: 'origin',
          operation: 'set',
          value: `http://${domain}`,
        }],
      },
    }];
    await chrome.declarativeNetRequest.updateDynamicRules({
      removeRuleIds: rules.map(r => r.id),
      addRules: rules,
    });
  }
}

async function populateModels() {
  const models = await getModels();
  // Populate your UI elements with model data
  // let modelsList = document.getElementById('models-list');
  // models.forEach(model => {
  //   let option = document.createElement('option');
  //   option.value = model.name;
  //   option.textContent = model.name;
  //   modelsList.appendChild(option);
  // });
}


var ollama_host = localStorage.getItem("host-address");
if (!ollama_host){
  ollama_host = 'localhost'
} else {
  document.getElementById("host-address").value = ollama_host;
}

if (rebuildRules){
  rebuildRules(ollama_host);
}

function setHostAddress(){
  ollama_host = document.getElementById("host-address").value;
  localStorage.setItem("host-address", ollama_host);
  populateModels();
  if (rebuildRules){
    rebuildRules(ollama_host);
  }
}

const URL = `http://${ollama_host}:11434/api/generate`;

function getNewModels() {
  // models.json is an array of model names with their tags as a static file since I cant find an api that gives the list
  return window.ollama.getNewModels(); 
}


async function getModels(){
  const response = await fetch(`http://${ollama_host}:11434/api/tags`);
  const data = await response.json();
  return data;
}


// Function to send a POST request to the API
function postRequest(data, signal) {
  return fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
    signal: signal
  });
}

// Function to stream the response from the server
async function getResponse(response, callback) {
  const reader = response.body.getReader();
  let partialLine = '';

  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    // Decode the received value and split by lines
    const textChunk = new TextDecoder().decode(value);
    const lines = (partialLine + textChunk).split('\n');
    partialLine = lines.pop(); // The last line might be incomplete

    for (const line of lines) {
      if (line.trim() === '') continue;
      const parsedResponse = JSON.parse(line);
      callback(parsedResponse); // Process each response word
    }
  }

  // Handle any remaining line
  if (partialLine.trim() !== '') {
    const parsedResponse = JSON.parse(partialLine);
    callback(parsedResponse);
  }
}


const modelSelectElement = document.getElementById('install-model-select');
const modelTagSelectElement = document.getElementById('install-model-tag-select');
const modelInstallButton = document.getElementById('install-model-button');
const modelInstallProgress = document.getElementById('model-progress-bar');
var installing = false;

modelInstallButton.addEventListener('click', () => {
  if(selectedModel && selectedModelTag) {
    if(installing) return;
    installing = true;
    var xhr = new XMLHttpRequest();

    // Replace with your actual API URL
    var url = `http://${ollama_host}:11434/api/pull`;

    xhr.open("POST", url, true);

    // Set up a handler for when the request finishes.
    xhr.onload = function () {
      if (xhr.status === 200) {
        console.log('The request was successful!');
        populateModels();
        let modal = new bootstrap.Modal(document.getElementById('models-modal'));
        modal.hide();
      } else {
        console.error('There was a problem with the request.');
      }
      installing = false;
    };

    // Create a variable outside of the onprogress handler to store incomplete chunks
    var incompleteChunk = '';

    xhr.onprogress = function (ev) {
        // Add new data to the incomplete chunk
        incompleteChunk += xhr.responseText.substring(xhr.lastResponseLength);
        xhr.lastResponseLength = xhr.responseText.length;

        // Attempt to find complete JSON objects in the incompleteChunk
        let chunkBoundary;
        while ((chunkBoundary = incompleteChunk.indexOf('}\n{')) !== -1) {
            // Extract the chunk and add the closing brace that was used as the boundary
            let chunk = incompleteChunk.substring(0, chunkBoundary + 1);

            try {
                // Parse the chunk as JSON
                var json = JSON.parse(chunk);
                console.log('Stream update:', json);
                if(json.total && json.completed) {
                  let percentage = json.completed / json.total;
                  modelInstallProgress.style.width = `${Math.round(percentage * 100000) / 1000}%`;

                }
                // Remove the parsed chunk from the buffer
                incompleteChunk = incompleteChunk.substring(chunkBoundary + 2); // Skip the }\n that we used as boundary
            } catch (e) {
                // console.error('Chunk is not a valid JSON object:', chunk);
                // If parsing fails, assume the JSON object is incomplete and wait for more data
                break;
            }
        }
    };

    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    // Send the request
    xhr.send(JSON.stringify({
      name: `${selectedModel}:${selectedModelTag}`,
      stream: true // Assuming you want the streamed response
    }));

  } else {
    alert('NO MODEL OR TAG');
  }
})

var loadedModels;

var selectedModel;
var selectedModelTag;

document.getElementById('model-install-button').addEventListener('click', async () => {
  let models = loadedModels = await window.ollama.getNewModels().catch((error) => {
    console.error()
  });
  if(!models) return;

  modelSelectElement.innerHTML = '';
  Object.keys(models).map((n, i) => {
    console.log('Model', n);
    if(i == 0) selectedModel = n;

    let opt = document.createElement('option');
    opt.innerHTML = opt.value = n;
    modelSelectElement.appendChild(opt);
  });

  // console.log(modelOptions);

  updateTags(selectedModel);
  

  let modal = new bootstrap.Modal(document.getElementById('models-modal'));
  modal.show();
});

modelSelectElement.addEventListener('input', (ev) => {
  console.log('SELECTED MODEL:', ev.target.value);
  selectedModel = ev.target.value;
  updateTags(selectedModel);
})

function updateTags(model) {
  if(!loadedModels) return;
  modelTagSelectElement.innerHTML = '';
  modelTagSelectElement.disabled = loadedModels[model].tags.length <= 0;

  loadedModels[model].tags.map((t, i) => {
    if(i == 0) selectedModelTag = t;
    let opt = document.createElement('option');
    opt.innerHTML = opt.value = t;
    modelTagSelectElement.appendChild(opt);
  })
}

modelTagSelectElement.addEventListener('input', (ev) => {
  console.log('SELECTED TAG: ', ev.target.value);
  selectedModelTag = ev.target.value;

})