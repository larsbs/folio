import * as AppActions from '../actions/app';


const initialState = {
  showSidebar: false
};


export default function app(state = initialState, action) {
  switch (action.type) {
      case AppActions.TOGGLE_SIDEBAR:
        return Object.assign({}, state, {
          showSidebar: !state.showSidebar
        });
      default:
        return Object.assign({}, state);
  }
}
