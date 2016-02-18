'use strict';

const ops = require('../ops');
const com = require('../com');


module.exports = {
  onClickOpen(item, browserWindow) {
    ops.openFile(browserWindow);
  },
  onClickSave(item, browserWindow) {
    com.getFileContent(browserWindow).then(ops.saveFile);
  },
  onClickSaveAs(item, browserWindow) {
    com.getFileContent(browserWindow).then(ops.saveFileAs);
  }
};
