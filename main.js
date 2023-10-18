const { app, BrowserWindow, shell, session, Menu, ipcMain } = require('electron');
const path = require('path');
const url = require('url');
const fs = require('fs');

const extensions = require('./extensions');

let isDev;
try {
  isDev = require('electron-is-dev');
} catch(e) {
  isDev = false;
}

if(isDev) {
  require('electron-reload')(path.join(__dirname));
}

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 1920,
    height: 1080
  });

  extensions.loadMetamask(session, win, isDev);

  let indexPath;
  isDev ? indexPath = path.join(`brave/${__dirname}`, 'your-app/index.html') : indexPath = path.join(`brave/${__dirname}`, 'index.html');

  setTimeout(() => {
    win.loadURL(url.format({
      pathname: indexPath,
      protocol: 'chrome',
      slashes: true
    }));
    var template = [{
      label: "Edit",
        submenu: [
          { label: "Cut", accelerator: "CmdOrCtrl+X", selector: "cut:" },
          { label: "Copy", accelerator: "CmdOrCtrl+C", selector: "copy:" },
          { label: "Paste", accelerator: "CmdOrCtrl+V", selector: "paste:" }
      ]}
    ];

    Menu.setApplicationMenu(Menu.buildFromTemplate(template));
    win.maximize();
  }, 200);

  win.webContents.openDevTools();
  if(isDev) {
  }

  ipcMain.on('open-link', (evt, link) => {
    shell.openExternal(link);
  });

  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
