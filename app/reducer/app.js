import * as AppActions from '../actions/app';
import * as MenuBarActions from '../actions/menu-bar';
import menuBar from './menu-bar';
import FileState from '../utils/file-state';


const initialState = {
  showSidebar: false,
  openedFiles: [
    new FileState()
  ],
  activeFileIndex: 0,
  isPreviewDetached: false,
  previewContents: ''  // Only used in preview detached mode
};


function isMenuBarAction(action) {
  for (const key in MenuBarActions) {
    if (MenuBarActions[key] === action.type) {
      return true;
    }
  }
  return false;
}


function getActiveFile(state) {
  return state.openedFiles[state.activeFileIndex];
}


function isOpened(openedFiles, newFile) {
  return !!openedFiles.find(file => file.path === newFile.path);
}


function findIndex(openedFiles, newFile) {
  return openedFiles.map(file => file.path).indexOf(newFile.path);
}


function updateActiveFile(openedFiles, activeFile, contents) {
  if ( ! activeFile) {
    activeFile = new FileState();
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


function openFile(openedFiles, newFile, update) {
  if (isOpened(openedFiles, newFile)) {
    return {
      openedFiles: openedFiles.map(file => {
        if (update && file.path === newFile.path) {
          return newFile;
        }
        return file;
      }),
      activeFileIndex: findIndex(openedFiles, newFile)
    };
  }
  if (openedFiles.length === 1 && ! openedFiles[0].path) {
    return {
      openedFiles: [ newFile ],
      activeFileIndex: 0
    };
  }
  return {
    openedFiles: [
      ...openedFiles,
      newFile
    ],
    activeFileIndex: openedFiles.length
  };
}


function setFileAsSaved(openedFiles, savedFile, activeFile) {
  if (savedFile.path !== activeFile.path) {
    return setFileAsSavedAs(openedFiles, savedFile, activeFile);
  }

  return {
    openedFiles: openedFiles.map(file => {
      if (file.path === savedFile.path) {
        file.saved = true;
      }
      return file;
    })
  };
}


function setFileAsSavedAs(openedFiles, savedFile, activeFile) {
  if ( ! activeFile.path && ! isOpened(openedFiles, savedFile)) {
    return {
      openedFiles: openedFiles.map(file => {
        if (file.id === activeFile.id) {
          return savedFile;
        }
        return file;
      })
    };
  }

  const restoredOpenedFiles = openedFiles.map(file => {
    if (file.id === activeFile.id) {
      file.restoreLastSavedContents();
    }
    return file;
  }).filter(file => !!file.path || file.id !== activeFile.id);
  return openFile(restoredOpenedFiles, savedFile, true);
}


export default function app(state = initialState, action) {
  if (isMenuBarAction(action)) {
    return menuBar(state, action);
  }

  switch (action.type) {
      case AppActions.TOGGLE_SIDEBAR:
        return { ...state,
          showSidebar: !state.showSidebar
        };
      case AppActions.NEW_FILE:
        return { ...state,
          openedFiles: [
            ...state.openedFiles,
            new FileState()
          ],
          activeFileIndex: state.openedFiles.length
        };
      case AppActions.OPEN_FILE: {
        const newFile = new FileState(action.payload.filename, action.payload.contents);
        return {
          ...state,
          ...openFile(state.openedFiles, newFile)
        }; }
      case AppActions.CHANGE_ACTIVE_FILE:
        return { ...state,
          activeFileIndex: action.payload.fileIndex
        };
      case AppActions.UPDATE_ACTIVE_FILE_CONTENTS:
        const activeFile = getActiveFile(state);
        return { ...state,
          openedFiles: updateActiveFile(state.openedFiles, activeFile, action.payload.contents)
        };
      case AppActions.FILE_SAVED: {
        const { filename, contents } = action.payload;
        const savedFile = new FileState(filename, contents);
        const activeFile = getActiveFile(state);
        return {
          ...state,
          ...setFileAsSaved(state.openedFiles, savedFile, activeFile)
        }; }
      case AppActions.REMOVE_OPENED_FILE:
        const { fileIndex } = action.payload;
        const filteredOpenedFiles = state.openedFiles.filter((file, i) => i !== fileIndex);
        return {
          ...state,
          openedFiles: filteredOpenedFiles.length > 0 ? filteredOpenedFiles : [ new FileState() ],
          activeFileIndex: fileIndex === state.activeFileIndex ? 0 : state.activeFileIndex,
        };
      case AppActions.DETACH_PREVIEW:
        return { ...state,
          isPreviewDetached: true
        };
      case AppActions.ATTACH_PREVIEW:
        return { ...state,
          isPreviewDetached: false
        };
      case AppActions.UPDATE_PREVIEW_CONTENTS:
        return { ...state,
          previewContents: action.payload.contents
        };
      default:
        return { ...state };
  }
}
