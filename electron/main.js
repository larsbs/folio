import {
  Menu,
  app,
} from 'electron';
import windowStateKeeper from 'electron-window-state';

import initListeners from './listeners';
import menuTemplate from './menu/template';
import { displayMainWindow, displayPreviewWindow } from './operations';


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});


app.on('ready', () => {

  initListeners();

  const appMenu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(appMenu);

  const windowOptions = windowStateKeeper({
    defaultWidth: 1200,
    defaultHeight: 800
  });

  let mainWindow = displayMainWindow(windowOptions);
  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  windowOptions.manage(mainWindow);

});
