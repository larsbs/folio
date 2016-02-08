import * as ToggleViewsActions from '../actions/toggle-views';


const initialState = {
  showCode: true,
  showPreview: true
};


export default function toggleViews(state = initialState, action) {
  switch (action.type) {
      case ToggleViewsActions.TOGGLE_CODE:
        return Object.assign({}, state, {
          showCode: !state.showCode
        });
      case ToggleViewsActions.TOGGLE_PREVIEW:
        return Object.assign({}, state, {
          showPreview: !state.showPreview
        });
      default:
        return state;
  }
}
