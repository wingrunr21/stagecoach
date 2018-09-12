/* React and React Router */
import React from 'react';

/* Components */
import { AppHeader } from "./components/app/AppHeader";
import { AppNav } from "./components/app/AppNav";
import { AppMain } from "./components/app/AppMain";
import { AppFooter } from "./components/app/AppFooter";

/* Stylesheets */
import './styles/app/App.css';


export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <React.Fragment>
        <AppHeader />
        {/* <AppNav /> */}
        <AppMain />
        <AppFooter />
      </React.Fragment>
    );
  };
};
