import React from 'react';
import style from 'less/components/toggler';


const Toggler = ({ onClick, isOpen }) => (
  <div className={isOpen ? style.opened : style.toggler + ' toggler'} onClick={onClick}>
    <div />
    <div />
    <div />
  </div>
);


export default Toggler;
