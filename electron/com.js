'use strict';

const ipcMain = require('electron').ipcMain;


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
  getFileContent
};
