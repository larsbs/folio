import React from 'react';
import marked from 'marked';


class Preview extends React.Component {

  render() {
    return (
      <div>
        <h1>Preview</h1>
        <div dangerouslySetInnerHTML={this._rawMarkup()} />
        <pre>{JSON.stringify(this.props.code, null, 2)}</pre>
      </div>
    );
  }

  _rawMarkup() {
    let rawMarkup = marked(this.props.code, { sanitize: true });
    return { __html: rawMarkup };
  }

}

export default Preview;
