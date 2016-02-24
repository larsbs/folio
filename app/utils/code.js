function mapSelectionsToPositions(selections, positions) {
  return selections.map((selection, i) => {
    return {
      text: selection,
      anchor: positions[i].anchor,
      head: positions[i].head
    };
  });
}


function insertText(codeMirror, text, nextCursorPosition) {
  codeMirror.replaceSelection(text);
  codeMirror.setCursor(nextCursorPosition || codeMirror.getCursor());
}


function insertInNewLine(codeMirror, text) {
  const { line, ch } = codeMirror.getCursor();
  if (line === 0 && ch === 0) {
    return insertText(codeMirror, text);
  }
  codeMirror.setCursor({ line: line + 1, ch: 0 });
  insertText(codeMirror, `\n${text}`);
}


function setAs(as, codeMirror) {
  const bold = as === 'bold';
  const cursor = codeMirror.getCursor();
  if ( ! codeMirror.somethingSelected()) {
    return insertText(codeMirror, bold ? '****' : '**', {
      ...cursor,
      ch: bold ? cursor.ch + 2  : cursor.ch + 1,
    });
  }
  const selections = codeMirror.getSelections()
    .map(selection => bold ? `**${selection}**` : `*${selection}*`);
  codeMirror.replaceSelections(selections);
}


export function setAsBold(codeMirror) {
  setAs('bold', codeMirror);
}


export function setAsItalic(codeMirror) {
  setAs('italic', codeMirror);
}


export function createLink(codeMirror, image) {
  const cursor = codeMirror.getCursor();
  if ( ! codeMirror.somethingSelected()) {
    return insertText(codeMirror, image ? '![]()' : '[]()', {
      ...cursor,
      ch: image ? cursor.ch + 2 : cursor.ch + 1
    });
  }
  const selections = codeMirror.getSelections()
    .map(selection => {
      return image ? `![${selection}]()` : `[${selection}]()`;
    });
  codeMirror.replaceSelections(selections);
}


export function createImageLink(codeMirror) {
  createLink(codeMirror, true);
}


export function createQuote(codeMirror) {
  if ( ! codeMirror.somethingSelected()) {
    return insertInNewLine(codeMirror, '> ');
  }
  const selections = mapSelectionsToPositions(
    codeMirror.getSelections(),
    codeMirror.listSelections()
  ).map((selection, i, selections) => {
    let selectionText = `> ${selection.text}\n`;
    if (selection.anchor.ch !== 0) {
      selectionText = `\n${selectionText}`;
    }
    if (i !== selections.length - 1) {
      selectionText += '\n';
    }
    return selectionText;
  });
  codeMirror.replaceSelections(selections);
  codeMirror.setCursor({ line: codeMirror.lastLine(), ch: 0 });
}


export function createList(codeMirror, type) {
  const cursor = codeMirror.getCursor();
  const ul = type === 'ul';
  if ( ! codeMirror.somethingSelected()) {
    return insertInNewLine(codeMirror, ul ? '  * ' : '  1. ');
  }
  const selections = mapSelectionsToPositions(
    codeMirror.getSelections(),
    codeMirror.listSelections()
  ).map((selection, i, selections) => {
    let selectionText = ul ? `  * ${selection.text.trim()}` : `  ${i + 1}. ${selection.text.trim()}`;
    if (selection.anchor.ch !== 0) {
      selectionText = `\n${selectionText}`;
    }
    if (i === selections.length - 1) {
      selectionText += '\n';
    }
    return selectionText;
  });
  codeMirror.replaceSelections(selections);
  codeMirror.setCursor({ line: codeMirror.lastLine(), ch: 0 });
}


export function createCodeBlock(codeMirror) {
  if ( ! codeMirror.somethingSelected()) {
    insertInNewLine(codeMirror, '```language\n```');
    const { line } = codeMirror.getCursor();
    codeMirror.setSelection(
      { line: line - 1, ch: 3 },
      { line: line - 1, ch: '```language'.length }
    );
  }
  const selections = codeMirror.getSelections()
    .map(selection => `\`${selection}\``);
  codeMirror.replaceSelections(selections);
}


export function createHeader(codeMirror) {
  if ( ! codeMirror.somethingSelected()) {
    return insertInNewLine(codeMirror, '# ');
  }

  const selections = codeMirror.getSelections()
    .map(selection => `# ${selection}\n`);
  codeMirror.replaceSelections(selections);
}


export function createTable(codeMirror) {
  insertInNewLine(codeMirror, '| |');
  insertInNewLine(codeMirror, '|-|');
  insertInNewLine(codeMirror, '| |');
}
