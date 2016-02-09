import CodeMirror from 'codemirror';


const codeMirror = CodeMirror();

module.exports = {
  setAsBold(currentValue, cursorPosition) {
    codeMirror.setValue(currentValue);
    const range = codeMirror.findWordAt(cursorPosition);
    const word = codeMirror.getRange(range.anchor, range.head);
    codeMirror.replaceRange(`**${word}**`, range.anchor, range.head);
    return codeMirror.getValue();
  }
};
