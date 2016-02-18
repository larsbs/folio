'use strict';

const ipcMain = require('electron').ipcMain;
const ops = require('../ops');


function getFileContent(browserWindow) {
  return new Promise((resolve, reject) => {
    browserWindow.webContents.send('GET_FILE_CONTENT');
    ipcMain.on('RECEIVE_FILE_CONTENT', (event, payload) => {
      if ( ! payload) {
        reject();
      }
      resolve(payload.content);
    });
  });
}


module.exports = {
  onClickOpen(item, browserWindow) {
    ops.openFile(browserWindow);
  },
  onClickSave(item, browserWindow) {
    getFileContent(browserWindow).then(ops.saveFile);
  },
  onClickSaveAs(item, browserWindow) {
    getFileContent(browserWindow).then(ops.saveFileAs);
  }
};
