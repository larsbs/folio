export const SHOW_OPEN_FILE = 'SHOW_OPEN_FILE';

export function showOpenFile() {
  return {
    type: SHOW_OPEN_FILE,
    electron: true
  };
}
