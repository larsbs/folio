import React from 'react';

import Toggler from './Toggler';
import MenuBar from '../containers/MenuBar';
import ToggleViews from '../containers/ToggleViews';

import styles from 'less/components/header.less';


const Header = ({ onClickToggler, sidebarShown }) => (
  <div className={styles.header + ' header'}>
    <section className="title-container">
      <Toggler onClick={onClickToggler} isOpen={sidebarShown} />
      <span className="title">Folio</span>
    </section>
    <MenuBar />
    <ToggleViews />
  </div>
);


export default Header;
