/* React and React Router */
import React from 'react';

/* Components */
import { AppMain }from './';
import { AppHeader } from './';
import { AppFooter } from './';

/* Stylesheets */
//import "./styles/index.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <React.Fragment>
        <AppHeader />
        <AppMain />
        <AppFooter />
      </React.Fragment>
    );
  };
};

export default App;
