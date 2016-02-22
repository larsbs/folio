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


function sendOpenedFiles(browserWindow, openedFiles) {
  browserWindow.webContents.send('RECEIVE_OPENED_FILES', {
    openedFiles
  });
}


function sendFileContent(browserWindow, content) {
  browserWindow.webContents.send('OPEN_FILE', { text: content });
}


module.exports = {
  getFileContent,
  sendOpenedFiles,
  sendFileContent,
};
