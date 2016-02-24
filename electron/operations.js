import fs from 'fs';
import path from 'path';
import { dialog, BrowserWindow } from 'electron';
import { openFile, fileSaved, attachPreview } from './senders';


const INDEX_PATH = path.resolve(__dirname, '../../app/index.html');
const MAIN_URL = `file://${INDEX_PATH}`;
const PREVIEW_URL = `${MAIN_URL}#preview`;


export function displayMainWindow(options) {
  let mainWindow = new BrowserWindow(options);

  if (process.env.NODE_ENV === 'development') {
    mainWindow.openDevTools();
  }

  mainWindow.loadURL(MAIN_URL);

  return mainWindow;
}


export function displayPreviewWindow(options) {
  options = {
    ...options,
    frame: false
  };
  let previewWindow = new BrowserWindow(options);
  previewWindow.loadURL(PREVIEW_URL);
  return previewWindow;
}


export function hidePreviewWindow(webContents) {
  attachPreview(webContents);
}


export function showOpenFile(webContents) {
  const dialogProperties = {
    properties: ['openFile']
  };
  dialog.showOpenDialog(dialogProperties, filenames => {
    if ( ! filenames) {
      return;
    }
    fs.readFile(filenames[0], { encoding: 'utf8' }, (err, data) => {
      if (err) throw new Error(err);
      openFile(webContents, filenames[0], data);
    });
  });
}


export function saveFile(webContents, filename, contents, originalFilename) {
  contents = contents || '';
  fs.writeFile(filename, contents, err => {
    if (err) throw new Error(err);
    fileSaved(webContents, filename, contents, originalFilename || filename);
  });
}


export function saveFileAs(webContents, contents, originalFilename) {
  dialog.showSaveDialog({}, filename => {
    if ( ! filename) return;
    saveFile(webContents, filename, contents, originalFilename);
  });
}
