import { ipcRenderer } from 'electron';
import { updateText } from '../actions/code';


export default function ElectronListener(getState, dispatch) {
  ipcRenderer.on('OPEN_FILE', (event, { text }) => {
    dispatch(updateText(text));
  });
  ipcRenderer.on('SAVE_FILE', event => {
    event.sender.send('RECEIVE_FILE_CONTENT', { content: getState().code.text });
  });
}
