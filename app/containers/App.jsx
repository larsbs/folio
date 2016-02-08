import React from 'react';

import Header from '../components/Header';
import Editor from './Editor';
import StatusBar from '../components/StatusBar';

import 'less/app';


class App extends React.Component {

  render() {
    return (
      <div className="app-container">
        <Header />
        <Editor />
        <StatusBar />
      </div>
    );
  }

}


export default App;
