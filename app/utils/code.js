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

function insertNewLine(codeMirror, text, nextCursorPosition) {
  const cursor = codeMirror.getCursor();
  const newLineCursor = Object.assign({}, cursor, {
    line: cursor.line + 1,
    ch: 0
  });
  codeMirror.setCursor(newLineCursor);
  return insertText(codeMirror, `\n${text}`, nextCursorPosition);
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

function createLink(text, cursorPosition, somethingSelected, selections, type) {
  const codeMirror = initCodeMirror(text, cursorPosition, selections);

  if ( ! somethingSelected) {
    return insertText(codeMirror, type === 'image' ? '![]()' : '[]()', Object.assign({}, cursorPosition, {
      ch: type === 'image' ? cursorPosition.ch + 2 : cursorPosition.ch + 1
    }));
  }

  codeMirror.replaceSelections(
    codeMirror.getSelections()
      .map(s => type === 'image' ? `![${s}]()` : `[${s}]()`)
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
    return createLink(text, cursorPosition, somethingSelected, selections, 'normal');
  },
  createImageLink({ text, cursorPosition, somethingSelected, selections }) {
    return createLink(text, cursorPosition, somethingSelected, selections, 'image');
  },
  createQuote({ text, cursorPosition, somethingSelected, selections }) {
    const codeMirror = initCodeMirror(text, cursorPosition, selections);

    if ( ! somethingSelected) {
      return insertNewLine(codeMirror, '> ');
    }

    codeMirror.replaceSelections(
      codeMirror.getSelections()
        .map((s, i, a) => {
          if (i === a.length - 1) {
            return `\n> ${s}`;
          }
          return `\n> ${s}\n\n`;
        })
    );
    return {
      text: codeMirror.getValue(),
      cursorPosition: cursorPosition
    };
  }
};
