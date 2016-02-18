'use strict';

const keys = require('./keys');


const store = new Map();

// Initialize store
store.set(keys.CURRENT_FILE, null);
store.set(keys.OPENED_FILES, []);


function addToOpenedFiles(filename) {
  const openedFiles = store.get(keys.OPENED_FILES);
  store.set(keys.OPENED_FILES, openedFiles.concat([filename]));
}

function setCurrentFile(filename) {
  store.set(keys.CURRENT_FILE, filename);
  addToOpenedFiles(filename);
}


module.exports = {
  get: store.get.bind(store),
  setCurrentFile
};
