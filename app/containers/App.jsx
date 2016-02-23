import React from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Editor from './Editor';
import StatusBar from '../components/StatusBar';
import Sidebar from '../components/Sidebar';
import { toggleSidebar, changeActiveFile, removeOpenedFile } from '../actions/app';
import { showOpenFile } from '../actions/electron';
import { getNumberOfLines, getNumberOfWords } from '../selectors/code';

import 'less/app';


const App = ({
  lines,
  words,
  showSidebar,
  openedFiles,
  activeFileIndex,
  onClickToggler,
  onClickFile,
  onClickRemove,
  onClickOpenFile,
}) => (
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

const mapStateToProps = state => {
  return {
    lines: getNumberOfLines(state),
    words: getNumberOfWords(state),
    showSidebar: state.app.showSidebar,
    openedFiles: state.app.openedFiles,
    activeFileIndex: state.app.activeFileIndex,
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
