import React from 'react';
import CodeMirror from 'codemirror';
import 'codemirror/mode/gfm/gfm';
import 'codemirror/mode/javascript/javascript';

import 'codemirror/lib/codemirror.css';


class Code extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const codeMirror = CodeMirror(document.getElementById('codemirror'), {
      mode: 'gfm',
      lineNumbers: true
    });

    codeMirror.on('change', () => {
      this.props.onChange(codeMirror.getValue());
    });
  }

  render() {
    return (
      <div className={this.props.className} id="codemirror" />
    );
  }

}

export default Code;
