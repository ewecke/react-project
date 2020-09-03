import React from 'react';
import {Link} from "react-router-dom";
import logo from '../img/logo.png'

const Header = ({length}) => {
  return (
    <header>
      <nav className="top-menu">
        <div><Link to = "/about">About</Link></div>
        <div><Link to = "./help">Help</Link></div>
        <div><Link to = "/cart">Go to cart {length}</Link></div>
      </nav>
      <h1 className="header">Make your own<Link to ="/" ><img className="logo" src={logo} alt="Logo"/></Link>Octoberfest 2020</h1>  
  


    </header>
  );

};

export default Header;
