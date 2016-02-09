import * as MenuBarActions from '../actions/menu-bar';


export default function menuBar(state = {}, action) {
  switch (action.type) {
      case MenuBarActions.CREATE_LINK:
        const textWithLink = '[]()';
        console.log('LINK CREATED');
        return Object.assign({}, state, {
          text: textWithLink
        });
      default:
        return state;
  }
}
