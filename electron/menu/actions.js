'use strict';

const ops = require('../ops');


module.exports = {
  onClickOpen(item, browserWindow) {
    ops.openFile(browserWindow);
  },
  onClickSave(item, bWindow) {
    bWindow.webContents.send('SAVE_FILE');
  }
};
