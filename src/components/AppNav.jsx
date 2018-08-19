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
          <li><Link to="/stagecoach">Home</Link></li>
          <li><Link to="/stagecoach/products">The Menu</Link></li>
          <li><Link to="/stagecoach/services">Services</Link></li>
          <li><Link to="/stagecoach/faq">FAQ</Link></li>
          <li><Link to="/stagecoach/contact">Contact Us</Link></li>
          <li><Link to="/stagecoach/about">About Us</Link></li>
        </ul>
      </nav>
    </nav>
  );
};