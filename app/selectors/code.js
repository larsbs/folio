import { createSelector } from 'reselect';


const getCodeText = (state) => state.app.openedFiles[state.app.activeFileIndex].contents;

export const getNumberOfLines = createSelector(
  getCodeText,
  codeText => codeText.split(/\r\n|\r|\n/).length
);

export const getNumberOfWords = createSelector(
  getCodeText,
  codeText => codeText.replace(/[^A-Z\d\s]/gi, '')
    .split(/\s+/)
    .filter(x => !!x).length
);
