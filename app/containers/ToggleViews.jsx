import React from 'react';
import { connect } from 'react-redux';

import { toggleCode, togglePreview } from '../actions/toggle-views';

import styles from 'less/containers/toggle-views';


class ToggleViews extends React.Component {

  render() {
    const codeClass = this.props.showCode ? styles.active : styles.button;
    const previewClass = this.props.showPreview ? styles.active : styles.button;
    return (
      <div className={styles.toggleViews + ' toggle-views'}>
        <button className={codeClass} onClick={this._handleOnClickCode.bind(this)}>Code</button>
        <button className={previewClass} onClick={this._handleOnClickPreview.bind(this)}>Preview</button>
      </div>
    );
  }

  _handleOnClickCode() {
    this.props.dispatch(toggleCode());
  }

  _handleOnClickPreview() {
    this.props.dispatch(togglePreview());
  }

}


const mapStateToProps = (state) => {
  return {
    showCode: state.toggleViews.showCode,
    showPreview: state.toggleViews.showPreview
  };
};


export default connect(mapStateToProps)(ToggleViews);
