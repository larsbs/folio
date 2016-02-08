import React from 'react';
import CodeMirror from 'codemirror';
import 'codemirror/mode/gfm/gfm';
import 'codemirror/mode/javascript/javascript';

import styles from 'less/components/code';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';


class Code extends React.Component {

  componentDidMount() {
    const codeMirror = CodeMirror(document.getElementById('codemirror'), {
      mode: 'gfm',
      lineNumbers: true,
      theme: 'material',
      lineWrapping: true,
      value: this.props.value
    });

    codeMirror.on('change', () => {
      this.props.onChange(codeMirror.getValue());
    });
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
