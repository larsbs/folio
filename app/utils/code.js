import CodeMirror from 'codemirror';


const codeMirror = CodeMirror();


function setAs(currentValue, cursorPosition, somethingSelected, selections, as) {
  codeMirror.setValue(currentValue);
  codeMirror.setCursor(cursorPosition);

  if ( ! somethingSelected) {
    codeMirror.replaceSelection(as === 'bold' ? '****' : '**');
    return {
      text: codeMirror.getValue(),
      cursorPosition: {
        line: cursorPosition.line,
        ch: as === 'bold' ? cursorPosition.ch + 2 : cursorPosition.ch + 1
      }
    };
  }

  codeMirror.setSelections(selections);
  codeMirror.replaceSelections(
    codeMirror.getSelections()
    .map(s => as === 'bold' ? `**${s}**` : `*${s}*`)
  );
  return {
    text: codeMirror.getValue(),
    cursorPosition: cursorPosition
  };
}

module.exports = {
  setAsBold({ text, cursorPosition, somethingSelected, selections }) {
    return setAs(text, cursorPosition, somethingSelected, selections, 'bold');
  },
  setAsItalic({ text, cursorPosition, somethingSelected, selections }) {
    return setAs(text, cursorPosition, somethingSelected, selections, 'italic');
  },
};
