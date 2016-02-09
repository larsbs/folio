import CodeMirror from 'codemirror';


function initCodeMirror(text, cursorPosition, selections) {
  const codeMirror = CodeMirror();
  codeMirror.setValue(text);
  codeMirror.setCursor(cursorPosition);
  if (selections && selections.length > 0) {
    codeMirror.setSelections(selections);
  }
  return codeMirror;
}

function insertText(codeMirror, text, nextCursorPosition) {
  codeMirror.replaceSelection(text);
  return {
    text: codeMirror.getValue(),
    cursorPosition: nextCursorPosition ? nextCursorPosition : codeMirror.getCursor()
  };
}

function setAs(currentValue, cursorPosition, somethingSelected, selections, as) {
  const codeMirror = initCodeMirror(currentValue, cursorPosition, selections);

  if ( ! somethingSelected) {
    return insertText(codeMirror, as === 'bold' ? '****' : '**', Object.assign({}, cursorPosition, {
      ch: as === 'bold' ? cursorPosition.ch + 2 : cursorPosition.ch + 1
    }));
  }

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
  createLink({ text, cursorPosition, somethingSelected, selections }) {
    const codeMirror = initCodeMirror(text, cursorPosition, selections);

    if ( ! somethingSelected) {
      return insertText(codeMirror, '[]()', Object.assign({}, cursorPosition, {
        ch: cursorPosition.ch + 1
      }));
    }

    codeMirror.replaceSelections(
      codeMirror.getSelections()
        .map(s => `[${s}]()`)
    );
    return {
      text: codeMirror.getValue(),
      cursorPosition: cursorPosition
    }
  }
};
