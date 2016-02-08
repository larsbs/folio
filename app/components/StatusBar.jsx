import React from 'react';
import { connect } from 'react-redux';

import style from 'less/components/status-bar';


class StatusBar extends React.Component {

  render () {
    console.log();
    const lines = this.props.codeText.split(/\r\n|\r|\n/).length;
    const words = this.props.codeText.replace(/[^A-Z\d\s]/gi, '').split(/\s+/).filter(x => !!x).length;
    return (
      <div className={style.statusBar + ' status-bar'}>
        <div className="left-status-bar">
          <span>Lines: {lines}, Words: {words}</span>
        </div>
        <div className="right-status-bar">
        </div>
      </div>
    );
  }

}


const mapStateToProps = (state) => {
  return {
    codeText: state.code.text
  };
};


export default connect(mapStateToProps)(StatusBar);
