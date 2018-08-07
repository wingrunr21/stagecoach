/* React and React Router imports */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

/* Asset imports */
import './styles/App.css';

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
            <h1 className="App-title">Stagecoach Meat Co.</h1>
            <h4>Wiggins, Colorado</h4>
            <h4>970-483-7280</h4>
          </header>
          <nav>
            <ul>
              <li><Link to="/stagecoach/">Home</Link></li>
              <li><Link to="/stagecoach/products">The Menu</Link></li>
              <li><Link to="/stagecoach/services">Services</Link></li>
              <li><Link to="/stagecoach/faq">FAQ</Link></li>
              <li><Link to="/stagecoach/contact">Contact Us</Link></li>
              <li><Link to="/stagecoach/about">About Us</Link></li>
            </ul>
          </nav>
          <main>
            <Route path="/stagecoach/" exact component={PageHome} />
            <Route path="/stagecoach/products" component={PageProducts} />
            <Route path="/stagecoach/services" component={PageServices} />
            <Route path="/stagecoach/FAQ" component={PageFAQ} />
            <Route path="/stagecoach/contact" component={PageContact} />
            <Route path="/stagecoach/about" component={PageAbout} />
          </main>
          <footer>
            <h5>&copy;2018 &bull; Stagecoach Meat Co., LLC</h5>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
