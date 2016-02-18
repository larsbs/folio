import { ipcRenderer } from 'electron';


export function changeCurrentFile(file) {
  ipcRenderer.send('CHANGE_CURRENT_FILE', { file });
}
