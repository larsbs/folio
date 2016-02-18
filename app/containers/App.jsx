import React from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Editor from './Editor';
import StatusBar from '../components/StatusBar';
import Sidebar from '../components/Sidebar';
import { toggleSidebar } from '../actions/app';
import { getNumberOfLines, getNumberOfWords } from '../selectors/code';

import 'less/app';


const App = ({
  lines,
  words,
  showSidebar,
  openedFiles,
  onClickToggler,
}) => (
  <div className="master-container">
    <Sidebar openedFiles={openedFiles} />
    <div className="app-container" style={{ left: showSidebar ? '25%' : 0 }}>
      <Header onClickToggler={onClickToggler} sidebarShown={showSidebar} />
      <Editor />
      <StatusBar lines={lines} words={words} />
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    lines: getNumberOfLines(state),
    words: getNumberOfWords(state),
    showSidebar: state.app.showSidebar,
    openedFiles: state.app.openedFiles,
  };
};


const mapDispatchToProps = dispatch => {
  return {
    onClickToggler: () => {
      dispatch(toggleSidebar());
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
