/* React and React Router imports */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

/* Asset imports */
import './App.css';
import logo from './logo.svg';

/* page components import*/
import PageHome from './pages/PageHome';
import PageProducts from './pages/PageProducts';
import PageServices from './pages/PageServices';
import PageContact from './pages/PageContact';
import PageAbout from './pages/PageAbout';
import PageFAQ from './pages/PageFAQ';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Stagecoach Meat Co.</h1>
            <h4>Wiggins, Colorado</h4>
            <h4>970-483-7280</h4>
          </header>
          <nav>
            <ul>
              <li><Link to="/products">The Menu</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </nav>
          <main>
            <Route path="/" exact component={PageHome} />
            <Route path="/products" component={PageProducts} />
            <Route path="/services" component={PageServices} />
            <Route path="/FAQ" component={PageFAQ} />
            <Route path="/contact" component={PageContact} />
            <Route path="/about" component={PageAbout} />
            <p className="App-intro">To get started, edit <code>src/App.js</code> and save to reload.</p>
          </main>
          <footer>
            <h4>&copy;2018 &bull; Stagecoach Meat Co., LLC</h4>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
