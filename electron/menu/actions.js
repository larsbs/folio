'use strict';

const fs = require('fs');
const ipcMain = require('electron').ipcMain;
const dialog = require('electron').dialog;


module.exports = {
  onClickOpen(item, bWindow) {
    const dialogProperties = { properties: ['openFile'] };
    dialog.showOpenDialog(bWindow, dialogProperties, filenames => {
      fs.readFile(filenames[0], { encoding: 'utf8' }, (err, data) => {
        if (err) {
          throw new Error(err);
        }
        bWindow.webContents.send('OPEN_FILE', { text: data });
      });
    });
  }
};
