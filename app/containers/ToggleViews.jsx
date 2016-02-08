import React from 'react';
import { connect } from 'react-redux';

import { toggleCode, togglePreview } from '../actions/toggle-views';

import styles from 'less/containers/toggle-views';


const ToggleViews = ({showCode, showPreview, onClickCode, onClickPreview}) => {
  const codeClass = showCode ? styles.active : styles.button;
  const previewClass = showPreview ? styles.active : styles.button;

  return (
    <div className={styles.toggleViews + ' toggle-views'}>
      <button className={codeClass} onClick={onClickCode}>Code</button>
      <button className={previewClass} onClick={onClickPreview}>Preview</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    showCode: state.toggleViews.showCode,
    showPreview: state.toggleViews.showPreview
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickCode: () => {
      dispatch(toggleCode());
    },
    onClickPreview: () => {
      dispatch(togglePreview());
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ToggleViews);
