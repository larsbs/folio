import React from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Editor from './Editor';
import StatusBar from '../components/StatusBar';

import { getNumberOfLines, getNumberOfWords } from '../selectors/code';

import 'less/app';


const App = ({ lines, words }) => (
  <div className="app-container">
    <Header />
    <Editor />
    <StatusBar lines={lines} words={words} />
  </div>
);

const mapStateToProps = (state) => {
  return {
    lines: getNumberOfLines(state),
    words: getNumberOfWords(state)
  };
};


export default connect(mapStateToProps)(App);
