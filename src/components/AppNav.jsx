/* React and React Router */
import React from "react";
import { NavLink } from 'react-router-dom';

/* Stylesheets */
import "../styles/AppNav.css";


export const AppNav = () => (
  <nav id="app-nav">
    <ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/products">Menu</NavLink></li>
      <li><NavLink to="/services">Services</NavLink></li>
      <li><NavLink to="/faq">FAQ</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
    </ul>
  </nav>
);
