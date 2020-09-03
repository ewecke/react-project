import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import brezel from '../img/brezel.png';

const Header = ({ length }) => {
  return (
    <header>

      <h1 className="header">
        <img className="brezel" src={brezel} alt="brezel" />
        <img className="brezel" src={brezel} alt="brezel" />
        Make your own
        <img className="logo" src={logo} alt="Logo" />
        Octoberfest 2020
        <img className="brezel" src={brezel} alt="brezel" />
      </h1>
      <div className="nav-bar">
        <Link to="/">Home  </Link>
        <Link to="/cart">Go to cart {length}  </Link>
        <Link to="/about">About  </Link>
        <Link to="./help">Help</Link>
      </div>

    </header>
  );
};

export default Header;
