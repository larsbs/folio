export const UPDATE_TEXT = 'UPDATE_TEXT';

export function updateText(newText) {
  return {
    type: UPDATE_TEXT,
    newText
  }
}
