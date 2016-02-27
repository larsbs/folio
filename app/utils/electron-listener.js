import { ipcRenderer } from 'electron';
import { openFile, fileSaved, newFile, detachPreview, attachPreview, updatePreviewContents } from '../actions/app';
import { showOpenFile, saveFile, saveFileAs } from '../actions/electron';
import { toggleCode, togglePreview } from '../actions/toggle-views';


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

  ipcRenderer.on('DETACH_PREVIEW', () => {
    const previewContents = getState().app.openedFiles[getState().app.activeFileIndex].contents;
    dispatch(detachPreview(previewContents));
  });

  ipcRenderer.on('ATTACH_PREVIEW', () => {
    dispatch(attachPreview());
  });

  ipcRenderer.on('TOGGLE_CODE', () => {
    dispatch(toggleCode());
  });

  ipcRenderer.on('TOGGLE_PREVIEW', () => {
    dispatch(togglePreview());
  });

  ipcRenderer.on('UPDATE_PREVIEW_CONTENTS', (event, { contents }) => {
    dispatch(updatePreviewContents(contents));
  });

}
