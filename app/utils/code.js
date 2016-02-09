import CodeMirror from 'codemirror';


const codeMirror = CodeMirror();

module.exports = {
  setAsBold(currentValue, cursorPosition, somethingSelected, selections) {
    codeMirror.setValue(currentValue);
    codeMirror.setCursor(cursorPosition);
    if ( ! somethingSelected) {
      codeMirror.replaceSelection('****');
      return {
        text: codeMirror.getValue(),
        cursorPosition: {
          line: cursorPosition.line,
          ch: cursorPosition.ch + 2
        }
      };
    }
    const range = codeMirror.findWordAt(cursorPosition);
    const word = codeMirror.getRange(range.anchor, range.head);
    codeMirror.replaceRange(`**${word}**`, range.anchor, range.head);
    return codeMirror.getValue();
  }
};
