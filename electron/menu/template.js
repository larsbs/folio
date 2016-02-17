'use strict';

const menuActions = require('./actions');


const menuTemplate = [{
  label: 'File',
  submenu: [{
    label: 'New File',
    accelerator: 'Ctrl+N',
  }, {
    label: 'Open File...',
    accelerator: 'Ctrl+O',
    click: menuActions.onClickOpen,
  }, {
    type: 'separator'
  }, {
    label: 'Save',
    accelerator: 'Ctrl+S',
    role: 'save'
  }, {
    label: 'Save As...',
    accelerator: 'Ctrl+Shift+S',
    role: 'save-as'
  }, {
    type: 'separator'
  }, {
    label: 'Quit',
    accelerator: 'Ctrl+Q',
    role: 'close'
  }]
}, {
  label: 'Edit',
  submenu: [{
    label: 'Undo',
    accelerator: 'Ctrl+Z',
    role: 'undo'
  }, {
    label: 'Redo',
    accelerator: 'Ctrl+Shift+Z',
    role: 'redo'
  }, {
    type: 'separator'
  }, {
    label: 'Cut',
    accelerator: 'Ctrl+X',
    role: 'cut'
  }, {
    label: 'Copy',
    accelerator: 'Ctrl+C',
    role: 'copy'
  }, {
    label: 'Paste',
    accelerator: 'Ctrl+V',
    role: 'paste'
  }, {
    label: 'Select All',
    accelerator: 'Ctrl+A',
    role: 'select-all'
  }, {
    type: 'separator'
  }, {
    label: 'Find',
    accelerator: 'Ctrl+F',
    role: 'find'
  }, {
    label: 'Replace',
    accelerator: 'Ctrl+H',
    role: 'replace'
  }]
}, {
  label: 'View',
  submenu: [{
    label: 'Toggle Developer Tools',
    accelerator: 'Ctrl+Shift+I',
    click: (item, focusedWindow) => focusedWindow ? focusedWindow.toggleDevTools() : false
  }]
}, {
  label: 'Help',
  submenu: [{
  }]
}];


module.exports = menuTemplate;
