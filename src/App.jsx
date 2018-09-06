/* React and React Router */
import React from 'react';

/* Components */
import { AppHeader } from "./components/AppHeader";
import { AppNav } from "./components/AppNav";
import { AppMain } from "./components/AppMain";
import { AppFooter } from "./components/AppFooter";

/* Stylesheets */
import './styles/App.css';


export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <React.Fragment>
        <AppHeader />
        <AppNav />
        <AppMain />
        <AppFooter />
      </React.Fragment>
    );
  };
};
