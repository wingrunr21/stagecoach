import React from 'react';
import PropTypes from 'prop-types';
import { AppMain, AppHeader, AppFooter, AppNav } from '..';

const App = props => (
  <React.Fragment>
    <AppHeader>
      <AppNav />
    </AppHeader>
    <AppMain />
    <AppFooter />
  </React.Fragment>
);

App.propTypes = {};

App.defaultProps = {};

export default App;
