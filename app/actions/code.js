export const UPDATE_CURSOR_POSITION = 'UPDATE_CURSOR_POSITION';

export function updateCursorPosition(position) {
  return {
    type: UPDATE_CURSOR_POSITION,
    payload: {
      position
    }
  };
}


export const UPDATE_SELECTIONS = 'UPDATE_SELECTIONS';

export function updateSelections(selections) {
  return {
    type: UPDATE_SELECTIONS,
    payload: {
      selections
    }
  };
}
