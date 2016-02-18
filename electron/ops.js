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
    if (filenames.length > 0) {
      fs.readFile(filenames[0], { encoding: 'utf8' }, (err, data) => {
        if (err) {
          throw new Error(err);
        }
        store.setCurrentFile(filenames[0]);
        browserWindow.webContents.send('OPEN_FILE', { text: data });
      });
    }
  });
}


function saveFile(content) {
  const currentFile = store.get(storeKeys.CURRENT_FILE);
  if ( ! currentFile) {
    return saveFileAs(content);
  }

  fs.writeFile(currentFile, content, err => {
    if (err) {
      throw new Error(err);
    }
    console.log(currentFile + ' saved');
  });
}


function saveFileAs(content) {
  dialog.showSaveDialog({}, filename => {
    if ( ! filename) {
      return;
    }
    store.setCurrentFile(filename);
    saveFile(content);
  });
}


module.exports = {
  openFile,
  saveFile,
  saveFileAs
};
