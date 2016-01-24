import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';

import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/gfm/gfm';
import 'codemirror/mode/javascript/javascript';

import Highlight from 'highlight.js';
import 'highlight.js/styles/github.css';


class Test extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      markdown: ''
    };

    marked.setOptions({
      highlight: (code, lang) => `<code class="hljs">${Highlight.highlight(lang, code).value}</code>`
    });
  }

  componentDidMount() {
    const myCodeMirror = CodeMirror(document.getElementById('codemirror'), {
      mode: 'gfm',
      lineNumbers: true
    });

    myCodeMirror.on('change', () => {
      this.setState({ markdown: myCodeMirror.getValue() });
    });
  }

  render() {
    return (
      <div>
        <h1>Hello from React and Electron</h1>
        <div id="codemirror"></div>
        <div id="marked" ref={ref => this.markedResult = ref} dangerouslySetInnerHTML={this._rawMarkup()}></div>
      </div>
    );
  }

  _rawMarkup() {
    let rawMarkup = marked(this.state.markdown, { sanitize: true });
    return { __html: rawMarkup };
  }

}


ReactDOM.render(
  <Test />,
  document.getElementById('root')
);
