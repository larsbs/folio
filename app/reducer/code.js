import * as CodeActions from '../actions/code';


const initialState = {
  text: ''
};


export default function code(state = initialState, action) {
  switch (action.type) {
      case CodeActions.UPDATE_TEXT:
        return Object.assign({}, state, {
          text: action.payload.text
        });
      default:
        return state;
  }
}
