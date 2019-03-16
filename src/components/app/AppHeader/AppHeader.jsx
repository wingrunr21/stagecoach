/* React */
import React from "react";

/* Components */
import { AppNav } from "../";

const AppHeader = () => (
  <header id="app-header">
    <div id="div-stageoach-png" />
    <h2 id="app-header-h2">Stagecoach Meat Co.</h2>
    <h5 id="app-header-h5">Wiggins, Colorado &bull; 970-483-7280</h5>
    <div id="div-empty" />
    <AppNav />
  </header>
);

AppHeader.propTypes = {
};

AppHeader.defaultProps = {
}

export default AppHeader;
