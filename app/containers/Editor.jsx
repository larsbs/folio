import React from 'react';
import { connect } from 'react-redux';

import Code from '../components/Code';
import Preview from '../components/Preview';
import { updateText } from '../actions/code';

import 'less/containers/editor';


class Editor extends React.Component {

  render() {
    let code;
    if (this.props.showCode) {
      code = <Code onChange={this._handleOnChangeCode.bind(this)} value={this.props.code.text}/>;
    }

    let preview;
    if (this.props.showPreview) {
      preview = <Preview code={this.props.code.text} />;
    }

    return (
      <div className="editor">
        {code}
        {preview}
      </div>
    );
  }

  _handleOnChangeCode(text) {
    this.props.dispatch(updateText(text));
  }

}


const mapStateToProps = (state) => {
  return {
    code: state.code,
    showCode: state.toggleViews.showCode,
    showPreview: state.toggleViews.showPreview
  };
};


export default connect(mapStateToProps)(Editor);
