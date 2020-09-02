import React from 'react';
import {Link} from "react-router-dom";
import logo from '../img/logo.png'

const Header = ({length}) => {
  return (
    <header>
      <h1 className="header">Make your own<img className="logo" src={logo} alt="Logo"/>Octoberfest 2020</h1>
      <Link to ="/" >Home</Link>      
      <Link to = "/cart">Go to cart {length}</Link>
      <Link to = "/about">About</Link>
    </header>
  );

};

export default Header;
