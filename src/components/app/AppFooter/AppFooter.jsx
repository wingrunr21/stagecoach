import React from "react";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import './AppFooter.scss';

const AppFooter = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer id="app-footer">
      <a href="https://www.facebook.com/Stagecoach-Meat-Company-LLC-205877879464025/">
        <FontAwesomeIcon className="fa-logo" icon={ faFacebook } size="2x" />
      </a>
      <h5>600 W 3rd Ave &bull; Wiggins, CO 80654</h5>
      <h5>&copy;{year} &bull; Stagecoach Meat Co., LLC</h5>
    </footer>
  );
};

AppFooter.propTypes = {
  children: PropTypes.element.isRequired,
};

AppFooter.defaultProps = {
  children: <footer />,
};

export default AppFooter;
