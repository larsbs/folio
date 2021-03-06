export function onClickNew(item, browserWindow) {
  browserWindow.webContents.send('NEW_FILE');
}

export function onClickOpen(item, browserWindow) {
  browserWindow.webContents.send('SHOW_OPEN_FILE');
}

export function onClickSave(item, browserWindow) {
  browserWindow.webContents.send('SAVE_FILE');
}

export function onClickSaveAs(item, browserWindow) {
  browserWindow.webContents.send('SAVE_FILE_AS');
}

export function onClickDetachPreview(item, browserWindow) {
  browserWindow.webContents.send('DETACH_PREVIEW');
}

export function onClickToggleCode(item, browserWindow) {
  browserWindow.webContents.send('TOGGLE_CODE');
}

export function onClickTogglePreview(item, browserWindow) {
  browserWindow.webContents.send('TOGGLE_PREVIEW');
}
