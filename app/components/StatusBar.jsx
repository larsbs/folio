import React from 'react';

import style from 'less/components/status-bar';


const StatusBar = ({ lines, words }) => (
  <div className={style.statusBar + ' status-bar'}>
    <div className="left-status-bar">
      <span>Lines: {lines}, Words: {words}</span>
    </div>
    <div className="right-status-bar">
      <span>/home/lars/test.md (MODIFIED)</span>
    </div>
  </div>
);


export default StatusBar;
