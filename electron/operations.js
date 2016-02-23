import fs from 'fs';
import { dialog } from 'electron';
import { openFile, fileSaved } from './senders';


export function showOpenFile(webContents) {
  const dialogProperties = {
    properties: ['openFile']
  };
  dialog.showOpenDialog(dialogProperties, filenames => {
    if ( ! filenames) {
      return;
    }
    fs.readFile(filenames[0], { encoding: 'utf8' }, (err, data) => {
      if (err) throw new Error(err);
      openFile(webContents, filenames[0], data);
    });
  });
}


export function saveFile(webContents, filename, contents, originalFilename) {
  contents = contents || '';
  fs.writeFile(filename, contents, err => {
    if (err) throw new Error(err);
    fileSaved(webContents, filename, contents, originalFilename || filename);
  });
}


export function saveFileAs(webContents, contents, originalFilename) {
  dialog.showSaveDialog({}, filename => {
    if ( ! filename) return;
    saveFile(webContents, filename, contents, originalFilename);
  });
}
