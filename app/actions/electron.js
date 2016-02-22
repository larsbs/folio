export const SHOW_OPEN_FILE = 'SHOW_OPEN_FILE';

export function showOpenFile() {
  return {
    type: SHOW_OPEN_FILE,
    electron: true
  };
}


export const SAVE_FILE = 'SAVE_FILE';

export function saveFile(filename, contents) {
  return {
    type: SAVE_FILE,
    electron: true,
    payload: {
      filename,
      contents
    }
  };
}


export const SAVE_FILE_AS = 'SAVE_FILE_AS';

export function saveFileAs(contents) {
  return {
    type: SAVE_FILE_AS,
    electron: true,
    payload: {
      contents
    }
  };
}
