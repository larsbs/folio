import React from 'react';
import styles from 'less/components/menu-bar';


const MenuBar = () => (
  <div className={styles.menuBar + ' menu-bar'}>
    <i className="fa fa-fw fa-bold" />
    <i className="fa fa-fw fa-italic" />
    <i className="fa fa-fw separator" />
    <i className="fa fa-fw fa-link" />
    <i className="fa fa-fw fa-photo" />
    <i className="fa fa-fw separator" />
    <i className="fa fa-fw fa-indent" />
    <i className="fa fa-fw fa-list-ul" />
    <i className="fa fa-fw fa-list-ol" />
    <i className="fa fa-fw fa-code" />
    <i className="fa fa-fw fa-header" />
  </div>
);


export default MenuBar;
