import * as MenuBarActions from '../actions/menu-bar';
import CodeUtils from '../utils/code';


export default function menuBar(state = {}, action) {
  switch (action.type) {
      case MenuBarActions.SET_AS_BOLD:
        return Object.assign({}, state, {
          ...CodeUtils.setAsBold(state)
        });
      case MenuBarActions.SET_AS_ITALIC:
        return Object.assign({}, state, {
          ...CodeUtils.setAsItalic(state)
        });
      case MenuBarActions.CREATE_LINK:
        return Object.assign({}, state, {
          ...CodeUtils.createLink(state)
        });
      case MenuBarActions.CREATE_IMAGE_LINK:
        return Object.assign({}, state, {
          ...CodeUtils.createImageLink(state)
        });
      case MenuBarActions.CREATE_QUOTE:
        return Object.assign({}, state, {
          ...CodeUtils.createQuote(state)
        });
      case MenuBarActions.CREATE_UL_LIST:
        return Object.assign({}, state, {
          ...CodeUtils.createUlList(state)
        });
      case MenuBarActions.CREATE_OL_LIST:
        return Object.assign({}, state, {
          ...CodeUtils.createOlList(state)
        });
      case MenuBarActions.CREATE_CODE_BLOCK:
        return Object.assign({}, state, {
          ...CodeUtils.createCodeBlock(state)
        });
      case MenuBarActions.CREATE_HEADER:
        return Object.assign({}, state, {
          ...CodeUtils.createHeader(state)
        });
      default:
        return state;
  }
}
