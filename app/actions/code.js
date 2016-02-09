export const UPDATE_TEXT = Symbol.for('UPDATE_TEXT');

export function updateText(text) {
  return {
    type: UPDATE_TEXT,
    payload: {
      text
    }
  };
}


export const UPDATE_CURSOR_POSITION = Symbol.for('UPDATE_CURSOR_POSITION');

export function updateCursorPosition(position) {
  return {
    type: UPDATE_CURSOR_POSITION,
    payload: {
      position
    }
  };
}


export const UPDATE_SELECTIONS = Symbol.for('UPDATE_SELECTIONS');

export function updateSelections(selections) {
  return {
    type: UPDATE_SELECTIONS,
    payload: {
      selections
    }
  };
}
