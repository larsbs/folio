import { ipcMain } from 'electron';
import { showOpenFile } from './operations';


export default function initListeners() {
  ipcMain.on('SHOW_OPEN_FILE', event => {
    showOpenFile(event.sender);
  });
}
