import React from 'react';
import CodeMirror from 'codemirror';
import {
  setAsBold,
  setAsItalic,
  createLink,
  createImageLink,
  createQuote,
  createList,
  createCodeBlock,
  createHeader,
  createTable,
} from '../utils/code';

import styles from 'less/components/code';

import 'codemirror/mode/gfm/gfm';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';


function initEvents(codeMirror, events) {
  events.on('SET_AS_BOLD', setAsBold.bind(null, codeMirror));
  events.on('SET_AS_ITALIC', setAsItalic.bind(null, codeMirror));
  events.on('CREATE_LINK', createLink.bind(null, codeMirror));
  events.on('CREATE_IMAGE_LINK', createImageLink.bind(null, codeMirror));
  events.on('CREATE_QUOTE', createQuote.bind(null, codeMirror));
  events.on('CREATE_UL_LIST', createList.bind(null, codeMirror, 'ul'));
  events.on('CREATE_OL_LIST', createList.bind(null, codeMirror, 'ol'));
  events.on('CREATE_CODE_BLOCK', createCodeBlock.bind(null, codeMirror));
  events.on('CREATE_HEADER', createHeader.bind(null, codeMirror));
  events.on('CREATE_TABLE', createTable.bind(null, codeMirror));
  events.on('AFTER_ALL', () => codeMirror.focus());
}


class Code extends React.Component {

  componentDidMount() {
    this.codeMirror = CodeMirror(document.getElementById('codemirror'), {
      mode: 'gfm',
      lineNumbers: true,
      theme: 'material',
      lineWrapping: true,
      value: this.props.value,
      autofocus: true,
    });

    this.codeMirror.on('change', () => {
      this.props.onChange(this.codeMirror.getValue());
    });

    this.codeMirror.on('cursorActivity', () => {
      if (this.codeMirror.somethingSelected()) {
        this.props.onCursorActivity(this.codeMirror.getCursor(), this.codeMirror.listSelections());
      }
      else {
        this.props.onCursorActivity(this.codeMirror.getCursor(), null);
      }
    });

    initEvents(this.codeMirror, this.props.events);
  }

  componentDidUpdate() {
    this.codeMirror.refresh();
    if (this.props.value !== this.codeMirror.getValue()) {
      this.codeMirror.setValue(this.props.value);
      this.codeMirror.focus();
      this.codeMirror.setCursor(this.props.cursorPosition);
    }
  }

  render() {
    return (
      <div className="code-container">
        <div className={styles.codemirror + ' code'} id="codemirror" />
      </div>
    );
  }

}

export default Code;
