import * as AppActions from '../actions/app';


const initialState = {
  showSidebar: false,
  openedFiles: []
};


export default function app(state = initialState, action) {
  switch (action.type) {
      case AppActions.TOGGLE_SIDEBAR:
        return Object.assign({}, state, {
          showSidebar: !state.showSidebar
        });
      case AppActions.UPDATE_OPENED_FILES:
        return Object.assign({}, state, {
          openedFiles: action.payload.openedFiles
        });
      default:
        return Object.assign({}, state);
  }
}
