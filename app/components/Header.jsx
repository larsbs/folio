import React from 'react';

import Toggler from './Toggler';

import 'less/components/header.less';


const Header = () => (
  <div className="header">
    <Toggler />
    <span className="title">Folio</span>
  </div>
);


export default Header;
