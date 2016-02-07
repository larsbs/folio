export const UPDATE_TEXT = 'UPDATE_TEXT';

export function updateText(text) {
  return {
    type: UPDATE_TEXT,
    payload: {
      text
    }
  };
}
