import React from 'react';

import Toggler from './Toggler';
import MenuBar from '../containers/MenuBar';
import ToggleViews from '../containers/ToggleViews';

import styles from 'less/components/header.less';


const Header = () => (
  <div className={styles.header + ' header'}>
    <section className="title-container">
      <Toggler />
      <span className="title">Folio</span>
    </section>
    <MenuBar />
    <ToggleViews />
  </div>
);


export default Header;
