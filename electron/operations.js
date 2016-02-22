import fs from 'fs';
import { dialog } from 'electron';
import { openFile } from './senders';


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
