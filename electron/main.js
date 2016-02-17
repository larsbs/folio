'use strict';

const path = require('path');
const Menu = require('menu');
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipcMain = electron.ipcMain;

const menuTemplate = require('./menu/template');
const ops = require('./ops');


const INDEX_PATH = path.resolve(__dirname, '../app/index.html');
const WINDOW_OPTIONS = {
  width: 1200,
  height: 800
};


const menu = Menu.buildFromTemplate(menuTemplate);
Menu.setApplicationMenu(menu);


let mainWindow = null;


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});


app.on('ready', () => {

  mainWindow = new BrowserWindow(WINDOW_OPTIONS);

  if (process.env.NODE_ENV === 'development') {
    mainWindow.openDevTools();
  }

  mainWindow.loadURL(`file://${INDEX_PATH}`);
  mainWindow.on('closed', () => {
    mainWindow = null;
  });

});


ipcMain.on('RECEIVE_FILE_CONTENT', (event, payload) => {
  ops.saveCurrentFile(payload.content);
});
