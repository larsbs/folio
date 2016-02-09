import * as MenuBarActions from '../actions/menu-bar';
import CodeUtils from '../utils/code';


export default function menuBar(state = {}, action) {
  console.log(state);
  switch (action.type) {
      case MenuBarActions.SET_AS_BOLD:
        return Object.assign({}, state, {
          ...CodeUtils.setAsBold(
            state.text,
            state.cursorPosition,
            state.somethingSelected,
            state.selections
          )
        });
      case MenuBarActions.SET_AS_ITALIC:
        return state;
      case MenuBarActions.CREATE_LINK:
        return Object.assign({}, state, {
          text: state.text
        });
      case MenuBarActions.CREATE_IMAGE_LINK:
        return state;
      case MenuBarActions.CREATE_QUOTE:
        return state;
      case MenuBarActions.CREATE_UL_LIST:
        return state;
      case MenuBarActions.CREATE_OL_LIST:
        return state;
      case MenuBarActions.CREATE_CODE_BLOCK:
        return state;
      case MenuBarActions.CREATE_HEADER:
        return state;
      default:
        return state;
  }
}
