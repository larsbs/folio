import * as AppActions from '../actions/app';
import FileState from '../utils/file-state';


const initialState = {
  showSidebar: false,
  openedFiles: [],
  activeFileIndex: 0
};


function isOpened(openedFiles, newFile) {
  return !!openedFiles.find(file => file.path === newFile.path);
}

function findIndex(openedFiles, newFile) {
  return openedFiles.map(file => file.path).indexOf(newFile.path);
}

function updateActiveFile(openedFiles, activeFile, contents) {
  if ( ! activeFile) {
    activeFile = new FileState('Untitled', '');
    return [ ...openedFiles, activeFile ];
  }

  activeFile.contents = contents;
  return openedFiles.map(file => {
    if (file.path === activeFile.path) {
      return activeFile;
    }
    return file;
  });
}


export default function app(state = initialState, action) {
  switch (action.type) {
      case AppActions.TOGGLE_SIDEBAR:
        return Object.assign({}, state, {
          showSidebar: !state.showSidebar
        });
      case AppActions.OPEN_FILE:
        const newFile = new FileState(action.payload.filename, action.payload.contents);
        if (isOpened(state.openedFiles, newFile)) {
          return Object.assign({}, state, {
            activeFileIndex: findIndex(state.openedFiles, newFile)
          });
        }
        return Object.assign({}, state, {
          openedFiles: [
            ...state.openedFiles,
            newFile
          ],
          activeFileIndex: state.openedFiles.length
        });
      case AppActions.CHANGE_ACTIVE_FILE:
        return Object.assign({}, state, {
          activeFileIndex: action.payload.fileIndex
        });
      case AppActions.UPDATE_ACTIVE_FILE_CONTENTS:
        const activeFile = state.openedFiles[state.activeFileIndex];
        return Object.assign({}, state, {
          openedFiles: updateActiveFile(state.openedFiles, activeFile, action.payload.contents)
        });
      default:
        return Object.assign({}, state);
  }
}
