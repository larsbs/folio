export const UPDATE_TEXT = Symbol.for('UPDATE_TEXT');

export function updateText(text) {
  return {
    type: UPDATE_TEXT,
    payload: {
      text
    }
  };
}
