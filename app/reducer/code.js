import * as CodeActions from '../actions/code';
import * as MenuBarActions from '../actions/menu-bar';
import menuBar from './menu-bar';


const initialState = {
  text: ''
};


function isMenuBarAction(action) {
  for (const key in MenuBarActions) {
    if (MenuBarActions[key] === action.type) {
      return true;
    }
  }
  return false;
}


export default function code(state = initialState, action) {
  if (isMenuBarAction(action)) {
    return menuBar(state, action);
  }

  switch (action.type) {
      case CodeActions.UPDATE_TEXT:
        return Object.assign({}, state, {
          text: action.payload.text
        });
      default:
        return state;
  }
}
