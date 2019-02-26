/* React and React Router */
import React from 'react';

/* Components */
import { AppMain }from './';
import { AppHeader } from './';
import { AppFooter } from './';

/* Stylesheets */
//import "./styles/index.scss";

const App = props => (
  <React.Fragment>
    <AppHeader />
    <AppMain />
    <AppFooter />
  </React.Fragment>
);

App.propTypes = {
};

App.defaultProps = {
};

export default App;
