/* React */
import React from "react";

/* Stylesheets */
// import './AppFooter.css';

/* Font Awesome! */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const AppFooter = () => (
  <footer id="app-footer">
    <a href="https://www.facebook.com/Stagecoach-Meat-Company-LLC-205877879464025/">
      <FontAwesomeIcon className="fa-logo" icon={ faFacebook } size="2x" />
    </a>
    <h5>600 W 3rd Ave &bull; Wiggins, CO 80654</h5>
    <h5>&copy;2018 &bull; Stagecoach Meat Co., LLC</h5>
  </footer>
);

export default AppFooter;
