/* React and React Router */
import React from "react";
import { NavLink } from 'react-router-dom';

const AppNav = () => (
  <div id="div-app-nav">
    <nav id="app-nav">
      <ul>
        <li><NavLink to="/" exact>HOME</NavLink></li>
        <li><NavLink to="/processing">PROCESSING</NavLink></li>
        <li><NavLink to="/retail">RETAIL</NavLink></li>
        <li><NavLink to="/faq">FAQ</NavLink></li>
        <li><NavLink to="/contact">CONTACT</NavLink></li>
      </ul>
    </nav>
  </div>
);

AppNav.propTypes = {};

AppNav.defaultProps = {};

export default AppNav;
