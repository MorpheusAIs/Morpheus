// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const fs = require('fs-extra');
const path = require('path');
const { exec } = require('child_process');
const os = require('os');
const util = require('util');

const logFilePath = path.join(os.homedir(), 'process_env.log');
fs.writeFileSync(logFilePath, util.inspect(process.env), 'utf-8');

let ollamaProcess = null; // Variable to store the Ollama process


function runOllamaCommand() {
  // Define the PATH for the child process
  const env = { ...process.env };

  // Check if ollama is installed
  exec('ollama --version', { env, shell: '/bin/sh' }, (error, stdout, stderr) => {
    if (error) {
      console.error(`Ollama is not installed: ${error}`);
      dialog.showErrorBox('Error', `Ollama is not installed: ${error}`);
      return;
    }

    // If ollama is installed, run ollama serve
    ollamaProcess = exec('ollama serve', { env, shell: '/bin/bash', maxBuffer: 1024 * 500 }, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing Ollama: ${error}`);
        dialog.showErrorBox('Error', `Error executing Ollama: ${error}`);
        return;
      }

      // Output verbose logging
      console.log(`Ollama Output: ${stdout}`);
      if (stderr) {
        console.error(`Ollama Errors: ${stderr}`);
      }
    });
  });
}


function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    // width: 800,
    // height: 1000,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
    
  })

  //  load the index.html of the app.
  mainWindow.loadFile('ui/index.html')

  // Open the DevTools.
//  mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // checkOllama()
  //   .then(createWindow)
  //   .catch((error) => {
  //     console.error('Failed to install or start Ollama:', error);
  //     // Handle the error, maybe inform the user through a dialog
  //   });
 // OllamaManager.startOllama();
  createWindow();
  runOllamaCommand(); // Serve Ollama
  // app.on('activate', function () {
  //   // On macOS it's common to re-create a window in the app when the
  //   // dock icon is clicked and there are no other windows open.
  //   if (BrowserWindow.getAllWindows().length === 0) createWindow();

  // })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.


ipcMain.handle('check-update', () => {
  console.log('CHECK FOR UPDATES');
  
})

ipcMain.handle('ping', () => {
  return 'Pong';
})

ipcMain.handle('get-new-models', async () => {
  let models = await fs.readJSON(path.join(__dirname, 'models.json')).catch((err) => {
    console.error(err);
  })
  if(!models) return 'Models not found';
  return models;
})

// ipcMain.handle()
