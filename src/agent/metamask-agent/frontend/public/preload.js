//this preload is passed to the BrowserWindow constructor this will allow
//us to expose objects to the render processes (doesnt run node) through through the global window object
const { contextBridge, ipcRenderer} = require('electron')

const validChannels = ['TRANSACTION_REQUEST', 'CONNECT_METAMASK'];

contextBridge.exposeInMainWorld(
    'ipc', {
        send: (channel, data) => {
            if(validChannels.includes(channel)){
                ipcRenderer.send(channel, data)
            }
        },
        on: (channel, func) => {
            if (validChannels.includes(channel)) {
              // Strip event as it includes `sender` and is a security risk
              ipcRenderer.on(channel, (event, ...args) => func(...args));
            }
          },
    })
    //now the renderer will be able to use window.ipc.on() and window.ipc.send() to communicate with the backend