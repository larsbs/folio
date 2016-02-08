import React from 'react';
import { connect } from 'react-redux';

import { getNumberOfLines, getNumberOfWords } from '../selectors/code';

import style from 'less/components/status-bar';


class StatusBar extends React.Component {

  render () {
    return (
      <div className={style.statusBar + ' status-bar'}>
        <div className="left-status-bar">
          <span>Lines: {this.props.numberOfLines}, Words: {this.props.numberOfWords}</span>
        </div>
        <div className="right-status-bar">
        </div>
      </div>
    );
  }

}


const mapStateToProps = (state) => {
  return {
    numberOfLines: getNumberOfLines(state),
    numberOfWords: getNumberOfWords(state)
  };
};


export default connect(mapStateToProps)(StatusBar);
