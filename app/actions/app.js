export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';

export function toggleSidebar() {
  return {
    type: TOGGLE_SIDEBAR
  };
}


export const UPDATE_OPENED_FILES = 'UPDATE_OPENED_FILES';

export function updateOpenedFiles(openedFiles) {
  return {
    type: UPDATE_OPENED_FILES,
    payload: {
      openedFiles
    }
  };
}
