import React from 'react';
import { connect } from 'react-redux';
import { remote } from 'electron';

import Header from '../components/Header';
import Editor from './Editor';
import StatusBar from '../components/StatusBar';
import Sidebar from '../components/Sidebar';
import Preview from '../components/Preview';
import { toggleSidebar, changeActiveFile, removeOpenedFile } from '../actions/app';
import { showOpenFile } from '../actions/electron';
import { getNumberOfLines, getNumberOfWords } from '../selectors/code';

import 'less/app';


const App = ({
  isPreviewWindow,
  lines,
  words,
  showSidebar,
  openedFiles,
  activeFileIndex,
  previewContents,
  onClickToggler,
  onClickFile,
  onClickRemove,
  onClickOpenFile,
}) => {
  if (isPreviewWindow) {
    return (
      <div className="master-container">
        <Preview code={previewContents} />
      </div>
    );
  }
  return (
    <div className="master-container">
      <Sidebar
        openedFiles={openedFiles}
        activeFileIndex={activeFileIndex}
        onClickFile={onClickFile}
        onClickRemove={onClickRemove}
        onClickOpenFile={onClickOpenFile} />
      <div className="app-container" style={{ left: showSidebar ? '25%' : 0 }}>
        <Header onClickToggler={onClickToggler} sidebarShown={showSidebar} />
        <Editor />
        <StatusBar lines={lines} words={words} activeFile={openedFiles[activeFileIndex]} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    lines: getNumberOfLines(state),
    words: getNumberOfWords(state),
    showSidebar: state.app.showSidebar,
    openedFiles: state.app.openedFiles,
    activeFileIndex: state.app.activeFileIndex,
    previewContents: state.app.previewContents,
  };
};


const mapDispatchToProps = dispatch => {
  return {
    onClickToggler: () => {
      dispatch(toggleSidebar());
    },
    onClickFile: fileIndex => {
      dispatch(changeActiveFile(fileIndex));
    },
    onClickRemove: fileIndex => {
      dispatch(removeOpenedFile(fileIndex));
    },
    onClickOpenFile: () => {
      dispatch(showOpenFile());
    },
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
