import React from 'react';
import PropTypes from 'prop-types';
import { AppMain, AppHeader, AppFooter, AppNav } from '..';
import './App.scss';

const App = props => (
  <React.Fragment>
    <AppHeader>
      <AppNav />
    </AppHeader>
    <AppMain />
    <AppFooter />
  </React.Fragment>
);

App.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

App.defaultProps = {
  children: <React.Fragment />,
};

export default App;
