import { ipcMain } from 'electron';


export function onClickOpen(item, browserWindow) {
  browserWindow.webContents.send('SHOW_OPEN_FILE');
}

export function onClickSave(item, browserWindow) {
  browserWindow.webContents.send('SAVE_FILE');
}

export function onClickSaveAs(item, browserWindow) {
  ipcMain.emit('SAVE_FILE_AS', null, { browserWindow });
}
