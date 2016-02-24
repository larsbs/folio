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


export const UPDATE_ACTIVE_FILE_CONTENTS = 'UPDATE_ACTIVE_FILE_CONTENTS';

export function updateActiveFileContents(contents) {
  return {
    type: UPDATE_ACTIVE_FILE_CONTENTS,
    electron: true,
    payload: {
      contents
    }
  };
}


export const FILE_SAVED = 'FILE_SAVED';

export function fileSaved(filename, contents, originalFilename) {
  return {
    type: FILE_SAVED,
    payload: {
      filename,
      contents,
      originalFilename
    }
  };
}


export const NEW_FILE = 'NEW_FILE';

export function newFile() {
  return {
    type: NEW_FILE
  };
}


export const REMOVE_OPENED_FILE = 'REMOVE_OPENED_FILE';

export function removeOpenedFile(fileIndex) {
  return {
    type: REMOVE_OPENED_FILE,
    payload: {
      fileIndex
    }
  };
}


export const DETACH_PREVIEW = 'DETACH_PREVIEW';

export function detachPreview() {
  return {
    type: DETACH_PREVIEW,
    electron: true
  };
}


export const ATTACH_PREVIEW = 'ATTACH_PREVIEW';

export function attachPreview() {
  return {
    type: ATTACH_PREVIEW,
    electron: true
  };
}


export const UPDATE_PREVIEW_CONTENTS = 'UPDATE_PREVIEW_CONTENTS';

export function updatePreviewContents(contents) {
  return {
    type: UPDATE_PREVIEW_CONTENTS,
    payload: {
      contents
    }
  };
}
