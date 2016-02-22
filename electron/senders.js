export const OPEN_FILE = 'OPEN_FILE';

export function openFile(webContents, filename, contents) {
  webContents.send(OPEN_FILE, { filename, contents });
}
