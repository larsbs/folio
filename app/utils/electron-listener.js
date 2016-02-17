import { ipcRenderer } from 'electron';
//import { openFile } from '../actions/electron';
import { updateText } from '../actions/code';


export default function ElectronListener(dispatch) {
  ipcRenderer.on('OPEN_FILE', (event, { text }) => {
    dispatch(updateText(text));
  });
}
