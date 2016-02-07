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
    const myCodeMirror = CodeMirror(this.codemirror, {
      mode: 'gfm',
      lineNumbers: true
    });

    myCodeMirror.on('change', () => {
      this.props.onCodeUpdate(myCodeMirror.getValue());
    });
  }

  render() {
    return (
      <div id="codemirror" ref={codemirror => this.codemirror = codemirror} />
    );
  }

}

export default Code;
