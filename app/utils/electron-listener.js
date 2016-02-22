import { ipcRenderer } from 'electron';
import { openFile } from '../actions/app';
import { showOpenFile, saveFile } from '../actions/electron';


export default function ElectronListener(getState, dispatch) {

  ipcRenderer.on('SHOW_OPEN_FILE', () => {
    dispatch(showOpenFile());
  });

  ipcRenderer.on('OPEN_FILE', (event, { filename, contents }) => {
    dispatch(openFile(filename, contents));
  });

  ipcRenderer.on('SAVE_FILE', () => {
    const activeFile = getState().app.openedFiles[getState().app.activeFileIndex] || {};
    dispatch(saveFile(activeFile.path, activeFile.contents));
  });

}
