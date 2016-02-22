import { ipcRenderer } from 'electron';
import { updateOpenedFiles, openFile } from '../actions/app';
import { showOpenFile } from '../actions/electron';


export default function ElectronListener(getState, dispatch) {
  ipcRenderer.on('SHOW_OPEN_FILE', () => {
    dispatch(showOpenFile());
  });
  ipcRenderer.on('OPEN_FILE', (event, { filename, contents }) => {
    dispatch(openFile(filename, contents));
  });
  ipcRenderer.on('GET_FILE_CONTENT', event => {
    event.sender.send('RECEIVE_FILE_CONTENT', { content: getState().code.text });
  });
  ipcRenderer.on('RECEIVE_OPENED_FILES', (event, { openedFiles }) => {
    dispatch(updateOpenedFiles(openedFiles));
  });
}
