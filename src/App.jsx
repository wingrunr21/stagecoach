/* React and React Router */
import React from 'react';

/* Components */
import { AppMain }from "./components/app";
import { AppHeader } from "./components/app";
import { AppFooter } from "./components/app";

/* Stylesheets */
import "./styles/index.scss";


export class App extends React.Component {
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
