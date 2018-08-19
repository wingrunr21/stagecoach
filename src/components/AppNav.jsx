/* React and React Router Imports */
import React from "react";
import { Link } from 'react-router-dom';

/* Style imports */
import "../styles/AppNav.css";


export const AppNav = () => {
  return (
    <nav id="app-nav">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">The Menu</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/about">About Us</Link></li>
        </ul>
      </nav>
    </nav>
  );
};