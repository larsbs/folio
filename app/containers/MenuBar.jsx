import React from 'react';
import { connect } from 'react-redux';

import {
  setAsBold,
  setAsItalic,
  createLink,
  createImageLink,
  createQuote,
  createUlList,
  createOlList,
  createCodeBlock,
  createHeader,
} from '../actions/menu-bar';

import styles from 'less/containers/menu-bar';


const MenuBar = ({
  onClickBold,
  onClickItalic,
  onClickLink,
  onClickPhoto,
  onClickIndent,
  onClickListUl,
  onClickListOl,
  onClickCode,
  onClickHeader,
}) => (
  <div className={styles.menuBar + ' menu-bar'}>
    <i className="fa fa-fw fa-bold" onClick={onClickBold} />
    <i className="fa fa-fw fa-italic" onClick={onClickItalic} />
    <i className="fa fa-fw separator" />
    <i className="fa fa-fw fa-link" onClick={onClickLink} />
    <i className="fa fa-fw fa-photo" onClick={onClickPhoto} />
    <i className="fa fa-fw separator" />
    <i className="fa fa-fw fa-indent" onClick={onClickIndent} />
    <i className="fa fa-fw fa-list-ul" onClick={onClickListUl} />
    <i className="fa fa-fw fa-list-ol" onClick={onClickListOl} />
    <i className="fa fa-fw fa-code" onClick={onClickCode} />
    <i className="fa fa-fw fa-header" onClick={onClickHeader} />
  </div>
);


const mapStateToProps = state => {
  return {
    state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClickBold: () => {
      dispatch(setAsBold());
    },
    onClickItalic: () => {
      dispatch(setAsItalic());
    },
    onClickLink: () => {
      dispatch(createLink());
    },
    onClickPhoto: () => {
      dispatch(createImageLink());
    },
    onClickIndent: () => {
      dispatch(createQuote());
    },
    onClickListUl: () => {
      dispatch(createUlList());
    },
    onClickListOl: () => {
      dispatch(createOlList());
    },
    onClickCode: () => {
      dispatch(createCodeBlock());
    },
    onClickHeader: () => {
      dispatch(createHeader());
    },
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);
