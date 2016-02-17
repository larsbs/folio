export const OPEN_FILE = 'OPEN_FILE';

export function openFile(contents) {
  return {
    type: OPEN_FILE,
    payload: {
      contents
    }
  };
}
