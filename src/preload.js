// preload.js


// This part of the code exposes a custom API to the renderer process using contextBridge.
const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  sendChat: (text) => ipcRenderer.send("chat:send", text),
  onChatReply: (callback) => {
    ipcRenderer.on("chat:reply", (event, data) => {
      callback(event, data);
    });
  },
  stopChat: () => ipcRenderer.send("chat:stop"),
  loadDocument: () => ipcRenderer.send("doc:load"),
  onDocumentLoaded: (callback) => {
    ipcRenderer.on("doc:load", (event, data) => {
      callback(event, data);
    });
  },
  serveOllama: () => ipcRenderer.send("ollama:serve"),
  onOllamaServe: (callback) => {
    ipcRenderer.on("ollama:serve", (event, data) => {
      callback(event, data);
    });
  },
  runOllama: () => ipcRenderer.send("ollama:run"),
  onOllamaRun: (callback) => {
    ipcRenderer.on("ollama:run", (event, data) => {
      callback(event, data);
    });
  },
  getModel: () => ipcRenderer.send("model:get"),
  onModelGet: (callback) => {
    ipcRenderer.on("model:get", (event, data) => {
      callback(event, data);
    });
  },
  setModel: (model) => ipcRenderer.send("model:set", model),
});
