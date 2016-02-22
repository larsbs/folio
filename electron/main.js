import path from 'path';
import {
  Menu,
  app,
  BrowserWindow
} from 'electron';
import windowStateKeeper from 'electron-window-state';

import initListeners from './listeners';
import menuTemplate from './menu/template';


const INDEX_PATH = path.resolve(__dirname, '../../app/index.html');


const appMenu = Menu.buildFromTemplate(menuTemplate);
Menu.setApplicationMenu(appMenu);


let mainWindow = null;


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});


initListeners();

app.on('ready', () => {

  const WINDOW_OPTIONS = windowStateKeeper({
    defaultWidth: 1200,
    defaultHeight: 800
  });

  mainWindow = new BrowserWindow(WINDOW_OPTIONS);

  if (process.env.NODE_ENV === 'development') {
    mainWindow.openDevTools();
  }

  mainWindow.loadURL(`file://${INDEX_PATH}`);
  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  WINDOW_OPTIONS.manage(mainWindow);

});
