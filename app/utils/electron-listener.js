import { ipcRenderer } from 'electron';
import { openFile, fileSaved, newFile } from '../actions/app';
import { showOpenFile, saveFile, saveFileAs } from '../actions/electron';


export default function ElectronListener(getState, dispatch) {

  ipcRenderer.on('NEW_FILE', () => {
    dispatch(newFile());
  });

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

  ipcRenderer.on('SAVE_FILE_AS', () => {
    const activeFile = getState().app.openedFiles[getState().app.activeFileIndex] || {};
    dispatch(saveFileAs(activeFile.contents, activeFile.path));
  });

  ipcRenderer.on('FILE_SAVED', (event, { filename, contents, originalFilename }) => {
    dispatch(fileSaved(filename, contents, originalFilename));
  });

}
