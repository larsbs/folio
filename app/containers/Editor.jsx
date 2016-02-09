import React from 'react';
import { connect } from 'react-redux';

import Code from '../components/Code';
import Preview from '../components/Preview';
import {
  updateText,
  updateCursorPosition,
} from '../actions/code';

import styles from 'less/containers/editor';


const Editor = ({
  showCode,
  showPreview,
  text,
  onChangeCode,
  onCursorActivity,
}) => {
  let code;
  if (showCode) {
    code = <Code
      onChange={onChangeCode}
      onCursorActivity={onCursorActivity}
      value={text}
    />;
  }

  let preview;
  if (showPreview) {
    preview = <Preview code={text} />;
  }

  return (
    <div className={styles.editor + ' editor'}>
      {code}
      {preview}
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    text: state.code.text,
    showCode: state.toggleViews.showCode,
    showPreview: state.toggleViews.showPreview
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeCode: text => {
      dispatch(updateText(text));
    },
    onCursorActivity: position => {
      dispatch(updateCursorPosition(position));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Editor);
