import React from 'react';
import { connect } from 'react-redux';

import {
  //setAsBold,
  //setAsItalic,
  createLink,
  //createImageLink,
  //createQuote,
  //createUlList,
  //createOlList,
  //createCodeBlock,
  //createHeader
} from '../actions/menu-bar';

import styles from 'less/containers/menu-bar';


const MenuBar = ({ onClickLink }) => (
  <div className={styles.menuBar + ' menu-bar'}>
    <i className="fa fa-fw fa-bold" />
    <i className="fa fa-fw fa-italic" />
    <i className="fa fa-fw separator" />
    <i className="fa fa-fw fa-link" onClick={onClickLink} />
    <i className="fa fa-fw fa-photo" />
    <i className="fa fa-fw separator" />
    <i className="fa fa-fw fa-indent" />
    <i className="fa fa-fw fa-list-ul" />
    <i className="fa fa-fw fa-list-ol" />
    <i className="fa fa-fw fa-code" />
    <i className="fa fa-fw fa-header" />
  </div>
);


const mapStateToProps = state => {
  return {
    state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClickLink: () => {
      dispatch(createLink());
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);
