import "./NavbarStyles.css"

import React from 'react'
import {Link} from "react-router-dom"


const Navbar = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1>Hannah H</h1>
      </Link>

      <ul className="nav-menu">
        <li>
            <Link to="/">Home
            </Link>
        </li>
        
        <li>
            <a href="#projects">Projects</a>
            
        </li>
       
        <li>
          <a href="#about">About</a>
        </li>
       
        <li>
            <a href="#experience">Exprience</a>
        </li>

        <li>
          <a href="#contactinfo">Contact</a>
        </li>

        <li>
            <a href="#resume">Resume</a>
        </li>
      </ul>
      
    </div>
  );
};

export default Navbar
