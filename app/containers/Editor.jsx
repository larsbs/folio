import React from 'react';
import { connect } from 'react-redux';

import Code from '../components/Code';
import Preview from '../components/Preview';
import { updateText } from '../actions/code';

import 'less/containers/editor';


class Editor extends React.Component {

  render() {
    return (
      <div className="editor">
        <Code onChange={this._dispatchCodeUpdate.bind(this)}/>
        <Preview code={this.props.code.text} />
      </div>
    );
  }

  _dispatchCodeUpdate(text) {
    this.props.dispatch(updateText(text));
  }

}


const mapStateToProps = (state) => {
  return {
    code: state.code
  };
};


export default connect(mapStateToProps)(Editor);
