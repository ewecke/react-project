/* Nav + logo  */

import React from 'react';
import logo from '../img/logo.png'
console. log(logo); 

const Header = () => {
  return (
    <header>
      <h1 className="header">Make your own<img className="logo" src={logo} alt="Logo"/>Octoberfest 2020</h1>
      
    </header>
  );
};

export default Header;
