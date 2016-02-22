import { ipcMain } from 'electron';


export function onClickOpen(item, browserWindow) {
  browserWindow.webContents.send('OPEN_FILE');
}

export function onClickSave(item, browserWindow) {
  ipcMain.emit('SAVE_FILE', null, { browserWindow });
}

export function onClickSaveAs(item, browserWindow) {
  ipcMain.emit('SAVE_FILE_AS', null, { browserWindow });
}
