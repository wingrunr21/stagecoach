/* React Imports */
import React from 'react';
import ReactDOM from 'react-dom';

/* is service worker necessary? */
import registerServiceWorker from './registerServiceWorker';

/* Component Imports */
import { App } from './App';

/* Stylesheet and Asset Imports */
import './styles/index.css';


ReactDOM.render(<App />, document.querySelector('#react-root'));

registerServiceWorker();
