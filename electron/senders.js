export const OPEN_FILE = 'OPEN_FILE';

export function openFile(webContents, filename, contents) {
  webContents.send(OPEN_FILE, { filename, contents });
}


export const FILE_SAVED = 'FILE_SAVED';

export function fileSaved(webContents, filename, contents, originalFilename) {
  webContents.send(FILE_SAVED, { filename, contents, originalFilename });
}
