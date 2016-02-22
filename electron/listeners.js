import { ipcMain } from 'electron';
import {
  showOpenFile,
  saveFile,
  saveFileAs,
} from './operations';


export default function initListeners() {

  ipcMain.on('SHOW_OPEN_FILE', event => {
    showOpenFile(event.sender);
  });

  ipcMain.on('SAVE_FILE', (event, { filename, contents }) => {
    if ( ! filename) {
      return saveFileAs(event.sender, contents);
    }

    saveFile(event.sender, filename, contents);
  });

}
