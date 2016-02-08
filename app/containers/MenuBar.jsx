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
  createHeader
} from '../actions/menu-bar';

import styles from 'less/containers/menu-bar';


class MenuBar extends React.Component {

  render() {
    return (
      <div className={styles.menuBar + ' menu-bar'}>
        <i className="fa fa-fw fa-bold" onClick={this._handleOnClickBold.bind(this)} />
        <i className="fa fa-fw fa-italic" onClick={this._handleOnClickItalic.bind(this)} />
        <i className="fa fa-fw separator" />
        <i className="fa fa-fw fa-link" onClick={this._handleOnClickLink.bind(this)} />
        <i className="fa fa-fw fa-photo" onClick={this._handleOnClickPhoto.bind(this)} />
        <i className="fa fa-fw separator" />
        <i className="fa fa-fw fa-indent" onClick={this._handleOnClickIndent.bind(this)} />
        <i className="fa fa-fw fa-list-ul" onClick={this._handleOnClickUlList.bind(this)} />
        <i className="fa fa-fw fa-list-ol" onClick={this._handleOnClickOlList.bind(this)} />
        <i className="fa fa-fw fa-code" onClick={this._handleOnClickCode.bind(this)} />
        <i className="fa fa-fw fa-header" onClick={this._handleOnClickHeader.bind(this)} />
      </div>
    );
  }

  _handleOnClickBold() {
  }

  _handleOnClickItalic() {
  }

  _handleOnClickLink() {
    this.props.dispatch(createLink());
  }

  _handleOnClickPhoto() {
  }

  _handleOnClickIndent() {
  }

  _handleOnClickUlList() {
  }

  _handleOnClickOlList() {
  }

  _handleOnClickCode() {
  }

  _handleOnClickHeader() {
  }

}


const mapStateToProps = (state) => {
  return {
    state
  };
};


export default connect(mapStateToProps)(MenuBar);
