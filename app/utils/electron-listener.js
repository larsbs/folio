import { ipcRenderer } from 'electron';
import { updateText } from '../actions/code';


export default function ElectronListener(dispatch) {
  ipcRenderer.on('OPEN_FILE', (event, { text }) => {
    dispatch(updateText(text));
  });
}
