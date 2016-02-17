'use strict';

const path = require('path');
const Menu = require('menu');
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const menuTemplate = require('./menu/template');


const INDEX_PATH = path.resolve(__dirname, '../app/index.html');
const WINDOW_OPTIONS = {
  width: 1600,
  height: 800
}


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
  mainWindow.loadURL(`file://${INDEX_PATH}`);
  mainWindow.on('closed', () => {
    mainWindow = null;
  });

});
