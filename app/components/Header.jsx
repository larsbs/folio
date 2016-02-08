import React from 'react';

import Toggler from './Toggler';
import MenuBar from '../containers/MenuBar';
import ToggleViews from '../containers/ToggleViews';

import 'less/components/header.less';


const Header = () => (
  <div className="header">
    <section className="title-container">
      <Toggler />
      <span className="title">Folio</span>
    </section>
    <MenuBar />
    <ToggleViews />
  </div>
);


export default Header;
