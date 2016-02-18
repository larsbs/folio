'use strict';

const path = require('path');


module.exports = {
  getName(filename) {
    const dirname = path.dirname(filename);
    return filename.replace(dirname + '/', '');
  }
};
