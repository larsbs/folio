import React from 'react';
import marked from 'marked';
import Highlight from 'highlight.js';

import 'highlight.js/styles/github.css';
import 'github-markdown-css/github-markdown.css';
import 'less/components/preview.less';


class Preview extends React.Component {

  render() {
    return (
      <div className="preview-container">
        <div className="preview markdown-body" dangerouslySetInnerHTML={this._rawMarkup()} />
      </div>
    );
  }

  _rawMarkup() {
    let rawMarkup = marked(this.props.code, {
      sanitize: true,
      highlight: code => `<code class="hljs">${Highlight.highlightAuto(code).value}</code>`
    });
    return { __html: rawMarkup };
  }

}

export default Preview;
