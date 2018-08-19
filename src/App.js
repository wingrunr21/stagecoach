/* React and React Router imports */
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; // Link, Switch, Redirect

/* Style Imports */
import './styles/App.css';
import './styles/AppHeader.css';
import './styles/AppNav.css';
import './styles/AppFooter.css';

/* Page Components Import*/
import PageHome from './pages/PageHome';
import PageProducts from './pages/PageProducts';
import PageServices from './pages/PageServices';
import PageContact from './pages/PageContact';
import PageAbout from './pages/PageAbout';
import { PageFAQ } from './pages/PageFAQ';

import { AppHeader } from "./components/AppHeader.jsx";
import { AppNav } from "./components/AppNav.jsx";
import { AppFooter } from "./components/AppFooter.jsx";


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <AppHeader />
          <AppNav />
          <main>
            <Route path="/stagecoach/" exact component={PageHome} />
            <Route path="/stagecoach/products" component={PageProducts} />
            <Route path="/stagecoach/services" component={PageServices} />
            <Route path="/stagecoach/FAQ" component={PageFAQ} />
            <Route path="/stagecoach/contact" component={PageContact} />
            <Route path="/stagecoach/about" component={PageAbout} />
          </main>
          <AppFooter />
        </div>
      </Router>
    );
  };
};

export default App;
