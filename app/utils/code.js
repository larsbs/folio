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

    codeMirror.setSelections(selections);
    codeMirror.replaceSelections(codeMirror.getSelections().map(s => `**${s}**`));
    return {
      text: codeMirror.getValue(),
      cursorPosition: cursorPosition
    };
  }
};
