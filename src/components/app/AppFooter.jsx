/* React */
import React from "react";

/* Stylesheets */
import '../../styles/app/AppFooter.css';

/* Font Awesome! */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';


export const AppFooter = () => (
  <footer id="app-footer">
    <h5>&copy;2018 &bull; Stagecoach Meat Co., LLC</h5>
    <a href="https://www.facebook.com/Stagecoach-Meat-Company-LLC-205877879464025/">
      <FontAwesomeIcon className="fa-logo" icon={ faFacebook } size="2x" />
    </a>
  </footer>
);