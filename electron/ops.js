'use strict';

const fs = require('fs');
const dialog = require('electron').dialog;
const store = require('./store');
const storeKeys = require('./store/keys');


function openFile(browserWindow) {
  const dialogProperties = {
    properties: ['openFile']
  };
  dialog.showOpenDialog(browserWindow, dialogProperties, filenames => {
    fs.readFile(filenames[0], { encoding: 'utf8' }, (err, data) => {
      if (err) {
        throw new Error(err);
      }
      store.setCurrentFile(filenames[0]);
      browserWindow.webContents.send('OPEN_FILE', { text: data });
    });
  });
}


function saveCurrentFile(content) {
  const currentFile = store.get(storeKeys.CURRENT_FILE);
  if ( ! currentFile) {
    return dialog.showSaveDialog({}, filename => {
      store.setCurrentFile(filename);
      saveCurrentFile(content);
    });
  }

  fs.writeFile(currentFile, content, err => {
    if (err) {
      throw new Error(err);
    }
    console.log(currentFile + ' saved');
  });
}


module.exports = {
  openFile,
  saveCurrentFile
};
