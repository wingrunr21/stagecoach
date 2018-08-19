/* React and React Router Imports */
import React from "react";
import { Link } from 'react-router-dom';

/* Style imports */
import "../styles/AppNav.css";


export const AppNav = (props) => {
  return (
    <nav id="app-nav">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Menu</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
};