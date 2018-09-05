/* React and React Router Imports */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

/* Component Imports */
import { AppHeader } from "./components/AppHeader.jsx";
import { AppNav } from "./components/AppNav.jsx";
import { AppMain } from "./components/AppMain.jsx";
import { AppFooter } from "./components/AppFooter.jsx";

/* Stylesheet and Asset Imports */
import './styles/App.css';
import './styles/AppHeader.css';
import './styles/AppNav.css';
import './styles/AppFooter.css';


export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="app">
          <AppHeader />
          <AppNav />
          <AppMain />
          <AppFooter />
        </div>
      </BrowserRouter>
    );
  };
};
