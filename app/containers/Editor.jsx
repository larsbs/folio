import React from 'react';
import { connect } from 'react-redux';

import Code from '../components/Code';
import Preview from '../components/Preview';
import {
  updateCursorPosition,
  updateSelections
} from '../actions/code';
import { updateActiveFileContents } from '../actions/app';
import codeEvents from '../utils/code-events';

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
        events={codeEvents}
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


const mapStateToProps = state => {
  const activeFile = state.app.openedFiles[state.app.activeFileIndex] || {};
  return {
    text: activeFile.contents || '',
    cursorPosition: state.code.cursorPosition,
    showCode: state.toggleViews.showCode,
    showPreview: state.toggleViews.showPreview && ! state.app.isPreviewDetached
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeCode: text => {
      dispatch(updateActiveFileContents(text));
    },
    onCursorActivity: (position, selections) => {
      dispatch(updateCursorPosition(position));
      dispatch(updateSelections(selections));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Editor);
