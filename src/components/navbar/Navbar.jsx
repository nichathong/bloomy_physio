import React from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import  logo  from '../../assests/logo1.PNG'
//BEM -> block ele modifier

const Navbar = () => {
  return (
    <div className="bloomy__navbar">
      <div className="bloomy__navbar-links">
        <div className="bloomy__navbar-links_logo">

          <img src={logo} alt="logo" />
        </div>
        <div className="bloomy__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#face">Face</a></p>
          <p><a href="#body">Body</a></p>
          <p><a href="#offer">Offers</a></p>
          <p><a href="#possibility">Possibility</a></p>
        </div>
      </div>
    </div>
  )
};

export default Navbar;
