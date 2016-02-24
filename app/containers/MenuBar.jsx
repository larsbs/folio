import React from 'react';

import {
  setAsBold,
  setAsItalic,
  createLink,
  createImageLink,
  createQuote,
  createListUl,
  createListOl,
  createCodeBlock,
  createHeader,
  createTable,
} from '../utils/code-events';

import styles from 'less/containers/menu-bar';


const MenuBar = () => (
  <div className={styles.menuBar + ' menu-bar'}>
    <i className="fa fa-fw fa-bold" onClick={setAsBold} />
    <i className="fa fa-fw fa-italic" onClick={setAsItalic} />
    <i className="fa fa-fw separator" />
    <i className="fa fa-fw fa-link" onClick={createLink} />
    <i className="fa fa-fw fa-photo" onClick={createImageLink} />
    <i className="fa fa-fw separator" />
    <i className="fa fa-fw fa-indent" onClick={createQuote} />
    <i className="fa fa-fw fa-table" onClick={createTable} />
    <i className="fa fa-fw fa-list-ul" onClick={createListUl} />
    <i className="fa fa-fw fa-list-ol" onClick={createListOl} />
    <i className="fa fa-fw fa-code" onClick={createCodeBlock} />
    <i className="fa fa-fw fa-header" onClick={createHeader} />
  </div>
);


export default MenuBar;
