import React from 'react';
import CodeMirror from 'codemirror';
import 'codemirror/mode/gfm/gfm';
import 'codemirror/mode/javascript/javascript';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'less/components/code.less';


class Code extends React.Component {

  componentDidMount() {
    const codeMirror = CodeMirror(document.getElementById('codemirror'), {
      mode: 'gfm',
      lineNumbers: true,
      theme: 'material'
    });

    codeMirror.on('change', () => {
      this.props.onChange(codeMirror.getValue());
    });
  }

  render() {
    return (
      <div className="code-container">
        <div className="code" id="codemirror" />
      </div>
    );
  }

}

export default Code;
