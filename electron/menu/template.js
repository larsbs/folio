import {
  onClickNew,
  onClickOpen,
  onClickSave,
  onClickSaveAs,
  onClickToggleCode,
  onClickTogglePreview
} from './actions';


export default [{
  label: 'File',
  submenu: [{
    label: 'New File',
    accelerator: 'Ctrl+N',
    click: onClickNew,
  }, {
    label: 'Open File...',
    accelerator: 'Ctrl+O',
    click: onClickOpen,
  }, {
    type: 'separator'
  }, {
    label: 'Save',
    accelerator: 'Ctrl+S',
    click: onClickSave
  }, {
    label: 'Save As...',
    accelerator: 'Ctrl+Shift+S',
    click: onClickSaveAs
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
    role: 'selectall'
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
    label: 'Change Preview Theme'
  }, {
    label: 'Change Code Theme'
  }, {
    type: 'separator'
  }, {
    label: 'Detach Preview',
  }, {
    label: 'Toggle Code',
    click: onClickToggleCode,
  }, {
    label: 'Toggle Preview',
    click: onClickTogglePreview,
  }, {
    type: 'separator'
  }, {
    label: 'Reload',
    accelerator: 'Ctrl+R',
    click: (item, focusedWindow) => focusedWindow ? focusedWindow.reload() : false
  }, {
    label: 'Toggle Developer Tools',
    accelerator: 'Ctrl+Shift+I',
    click: (item, focusedWindow) => focusedWindow ? focusedWindow.toggleDevTools() : false
  }]
}, {
  label: 'Help',
  submenu: [{
    label: 'View License'
  }, {
    type: 'separator'
  }, {
    label: 'Report Issue'
  }, {
    label: 'Follow on Twitter'
  }, {
    type: 'separator'
  }, {
    label: 'Check for Updates...'
  }, {
    type: 'separator'
  }, {
    label: 'About Folio'
  }]
}];
