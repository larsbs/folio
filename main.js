'use strict';

const electron = require('electron');


const app = electron.app;
const BrowserWindow = electron.BrowserWindow;


let mainWindow = null;
const windowOptions = {
  width: 1600,
  height: 800
};


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});


app.on('ready', () => {
  mainWindow = new BrowserWindow(windowOptions);

  mainWindow.loadURL(`file://${__dirname}/public/index.html`);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

});
