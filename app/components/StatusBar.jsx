import React from 'react';
import style from 'less/components/status-bar';


const StatusBar = () => (
  <div className={style.statusBar + ' status-bar'}>
    <div className="left-status-bar">
      <span>Lines: 4, Words: 20, Characters: 241</span>
    </div>
    <div className="right-status-bar">
    </div>
  </div>
);


export default StatusBar;
