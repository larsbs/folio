import * as AppActions from '../actions/app';
import FileState from '../utils/file-state';


const initialState = {
  showSidebar: false,
  openedFiles: [
    new FileState()
  ],
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

function openFile(openedFiles, newFile) {
  if (isOpened(openedFiles, newFile)) {
    return {
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

function setFileAsSaved(openedFiles, filename, contents, originalFilename) {
  if (originalFilename !== filename) {
    return setFileAsSavedAs(openedFiles, filename, contents, originalFilename);
  }

  return {
    openedFiles: openedFiles.map(file => {
      if (file.path === filename) {
        file.saved = true;
      }
      return file;
    })
  };
}

function setFileAsSavedAs(openedFiles, filename, contents, originalFilename) {
  if ( ! originalFilename) {
    return {
      openedFiles: openedFiles.map(file => {
        if (file.contents === contents) {
          return new FileState(filename, contents);
        }
        return file;
      })
    };
  }

  const newFile = new FileState(filename, contents);
  const restoredOpenedFiles = openedFiles.map(file => {
    if (file.path === originalFilename) {
      file.restoreLastSavedContents();
    }
    return file;
  });
  return openFile(restoredOpenedFiles, newFile);
}


export default function app(state = initialState, action) {
  switch (action.type) {
      case AppActions.TOGGLE_SIDEBAR:
        return { ...state,
          showSidebar: !state.showSidebar
        };
      case AppActions.OPEN_FILE:
        const newFile = new FileState(action.payload.filename, action.payload.contents);
        return {
          ...state,
          ...openFile(state.openedFiles, newFile)
        };
      case AppActions.CHANGE_ACTIVE_FILE:
        return { ...state,
          activeFileIndex: action.payload.fileIndex
        };
      case AppActions.UPDATE_ACTIVE_FILE_CONTENTS:
        const activeFile = state.openedFiles[state.activeFileIndex];
        return { ...state,
          openedFiles: updateActiveFile(state.openedFiles, activeFile, action.payload.contents)
        };
      case AppActions.FILE_SAVED:
        const { filename, originalFilename, contents } = action.payload;
        return {
          ...state,
          ...setFileAsSaved(state.openedFiles, filename, contents, originalFilename)
        };
      default:
        return { ...state };
  }
}
