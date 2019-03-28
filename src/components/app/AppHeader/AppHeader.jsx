import React from "react";
import PropTypes from 'prop-types';

const AppHeader = props => (
  <header id="app-header">
    <div id="div-stageoach-png" />
    <h2 id="app-header-h2">Stagecoach Meat Co.</h2>
    <h5 id="app-header-h5">Wiggins, Colorado &bull; 970-483-7280</h5>
    <div id="div-empty" />
    { props.children }
  </header>
);

AppHeader.propTypes = {};

AppHeader.defaultProps = {};

export default AppHeader;
