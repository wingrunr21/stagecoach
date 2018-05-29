import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Stagecoach Meat Co.</h1>
          <h4>Wiggins, Colorado</h4>
          <h4>970-483-7280</h4>
        </header>
        <nav>
          <ul>
            <li><a href="products.html">The Menu</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="faq.html">FAQ</a></li>
            <li><a href="contact.html">Contact Us</a></li>
            <li><a href="about.html">About Us</a></li>
          </ul>
        </nav>
        <main>
          <p className="App-intro">To get started, edit <code>src/App.js</code> and save to reload.</p>
        </main>
        <footer>
          <h4>&copy;2018 &bull; Stagecoach Meat Co., LLC</h4>
        </footer>
      </div>
    );
  }
}

export default App;
