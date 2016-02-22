export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';

export function toggleSidebar() {
  return {
    type: TOGGLE_SIDEBAR
  };
}


export const OPEN_FILE = 'OPEN_FILE';

export function openFile(filename, contents) {
  return {
    type: OPEN_FILE,
    payload: {
      filename,
      contents
    }
  };
}


export const CHANGE_ACTIVE_FILE = 'CHANGE_ACTIVE_FILE';

export function changeActiveFile(fileIndex) {
  return {
    type: CHANGE_ACTIVE_FILE,
    payload: {
      fileIndex
    }
  };
}
