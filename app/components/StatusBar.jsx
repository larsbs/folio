import React from 'react';

import style from 'less/components/status-bar';


function getPath(activeFile) {
  if ( ! activeFile) {
    return '';
  }
  return activeFile.path || activeFile.name;
}

function getStatus(activeFile) {
  console.log(activeFile);
  if ( ! activeFile) {
    return '';
  }
  return activeFile.saved ? '[SAVED]' : '[MODIFIED]';
}

function getStatusStyle(activeFile) {
  if ( ! activeFile) {
    return '';
  }
  return activeFile.saved ? style.saved : style.modified;
}

const StatusBar = ({ lines, words, activeFile }) => (
  <div className={style.statusBar + ' status-bar'}>
    <div className="left-status-bar">
      <span>Lines: {lines}, Words: {words}</span>
    </div>
    <div className="right-status-bar">
      <span>{getPath(activeFile)} </span>
      <span className={getStatusStyle(activeFile)}>{getStatus(activeFile)}</span>
    </div>
  </div>
);


export default StatusBar;
