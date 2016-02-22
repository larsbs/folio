import { ipcRenderer } from 'electron';


const electronMiddleware = () => next => action => {
  if (action.electron) {
    ipcRenderer.send(action.type, action.payload);
  }

  return next(action);
};

export default electronMiddleware;
