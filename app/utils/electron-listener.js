import { ipcRenderer } from 'electron';
import { updateText } from '../actions/code';
import { updateOpenedFiles } from '../actions/app';


export default function ElectronListener(getState, dispatch) {
  ipcRenderer.on('OPEN_FILE', (event, { text }) => {
    dispatch(updateText(text));
  });
  ipcRenderer.on('GET_FILE_CONTENT', event => {
    event.sender.send('RECEIVE_FILE_CONTENT', { content: getState().code.text });
  });
  ipcRenderer.on('RECEIVE_OPENED_FILES', (event, { openedFiles }) => {
    dispatch(updateOpenedFiles(openedFiles));
  });
}
