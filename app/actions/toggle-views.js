export const TOGGLE_CODE = Symbol.for('TOGGLE_CODE');

export function toggleCode() {
  return {
    type: TOGGLE_CODE
  };
}


export const TOGGLE_PREVIEW = Symbol.for('TOGGLE_PREVIEW');

export function togglePreview() {
  return {
    type: TOGGLE_PREVIEW
  };
}
