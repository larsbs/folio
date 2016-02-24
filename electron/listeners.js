import { ipcMain } from 'electron';
import {
  showOpenFile,
  saveFile,
  saveFileAs,
  displayPreviewWindow,
  hidePreviewWindow,
} from './operations';


let previewWindow;

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

  ipcMain.on('SAVE_FILE_AS', (event, { contents, originalFilename }) => {
    saveFileAs(event.sender, contents, originalFilename);
  });

  ipcMain.on('DETACH_PREVIEW', event => {
    previewWindow = displayPreviewWindow();
    previewWindow.on('close', () => {
      hidePreviewWindow(event.sender);
    });
  });

  ipcMain.on('UPDATE_ACTIVE_FILE_CONTENTS', (event, { contents }) => {
    previewWindow.webContents.send('UPDATE_PREVIEW_CONTENTS', { contents });
  });

}
