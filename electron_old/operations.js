import store, {
  OPENED_FILES,
  CURRENT_FILE_INDEX,
} from './store';


export function updateFileContents(contents) {
  const currentFileIndex = store.get(CURRENT_FILE_INDEX);
  const openedFiles = store.get(OPENED_FILES);
  openedFiles[currentFileIndex].contents = contents;
  store.set(OPENED_FILES, openedFiles);
}

export function addToOpenedFiles(file) {
  const openedFiles = store.get(OPENED_FILES).filter(f => f.path !== file.path);
  store.set(OPENED_FILES, [...openedFiles, file]);
}

export function setCurrentFile(index) {
  store.set(CURRENT_FILE_INDEX, index);
}
