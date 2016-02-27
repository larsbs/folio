import * as CodeActions from '../actions/code';


const initialState = {
  cursorPosition: {
    line: 0,
    ch: 0
  },
  somethingSelected: false,
  selections: []
};


export default function code(state = initialState, action) {
  switch (action.type) {
      case CodeActions.UPDATE_CURSOR_POSITION:
        return Object.assign({}, state, {
          cursorPosition: action.payload.position
        });
      case CodeActions.UPDATE_SELECTIONS:
        return Object.assign({}, state, {
          selections: action.payload.selections ? action.payload.selections : [],
          somethingSelected: !!action.payload.selections
        });
      default:
        return state;
  }
}
