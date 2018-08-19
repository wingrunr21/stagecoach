/* React and React Router imports */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Link, Switch, Redirect

/* App Components Imports */
import { AppHeader } from "./components/AppHeader.jsx";
import { AppNav } from "./components/AppNav.jsx";
import { AppMain } from "./components/AppMain.jsx";
import { AppFooter } from "./components/AppFooter.jsx";

/* Style Imports for App Components */
import './styles/App.css';
import './styles/AppHeader.css';
import './styles/AppNav.css';
import './styles/AppFooter.css';


export class App extends React.Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="app">
          <AppHeader />
          <AppNav />
          <AppMain />
          <AppFooter />
        </div>
      </Router>
    );
  };
};
