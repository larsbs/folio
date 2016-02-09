import React from 'react';
import { connect } from 'react-redux';

import Code from '../components/Code';
import Preview from '../components/Preview';
import {
  updateText,
  updateCursorPosition,
  updateSelections
} from '../actions/code';

import styles from 'less/containers/editor';


const Editor = ({
  showCode,
  showPreview,
  text,
  cursorPosition,
  onChangeCode,
  onCursorActivity,
}) => {
  let code;
  if (showCode) {
    code = (
      <Code
        onChange={onChangeCode}
        onCursorActivity={onCursorActivity}
        cursorPosition={cursorPosition}
        value={text} />
    );
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
    cursorPosition: state.code.cursorPosition,
    showCode: state.toggleViews.showCode,
    showPreview: state.toggleViews.showPreview
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeCode: text => {
      dispatch(updateText(text));
    },
    onCursorActivity: (position, selections) => {
      dispatch(updateCursorPosition(position));
      dispatch(updateSelections(selections));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Editor);
