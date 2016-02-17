'use strict';

const keys = require('./keys');


const store = new Map();


function setCurrentFile(filename) {
  store.set(keys.CURRENT_FILE, filename);
}


module.exports = {
  get: store.get.bind(store),
  setCurrentFile
};
