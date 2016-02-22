import * as AppActions from '../actions/app';
import FileState from '../utils/file-state';


const initialState = {
  showSidebar: false,
  openedFiles: [],
  activeFileIndex: 0
};


export default function app(state = initialState, action) {
  switch (action.type) {
      case AppActions.TOGGLE_SIDEBAR:
        return Object.assign({}, state, {
          showSidebar: !state.showSidebar
        });
      case AppActions.OPEN_FILE:
        const newFile = new FileState(action.payload.filename, action.payload.contents);
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
      default:
        return Object.assign({}, state);
  }
}
