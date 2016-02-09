import React from 'react';
import CodeMirror from 'codemirror';
import 'codemirror/mode/gfm/gfm';
import 'codemirror/mode/javascript/javascript';

import styles from 'less/components/code';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';


class Code extends React.Component {

  componentDidMount() {
    this.codeMirror = CodeMirror(document.getElementById('codemirror'), {
      mode: 'gfm',
      lineNumbers: true,
      theme: 'material',
      lineWrapping: true,
      value: this.props.value
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
  }

  componentDidUpdate() {
    if (this.props.value !== this.codeMirror.getValue()) {
      this.codeMirror.setValue(this.props.value);
      this.codeMirror.focus();
      this.codeMirror.setCursor(this.props.cursorPosition);
    }
  }

  render() {
    return (
      <div className="code-container">
        <div className={styles.codemirror + ' code cm-s-material'} id="codemirror" />
      </div>
    );
  }

}

export default Code;
