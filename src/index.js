import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

/* is service worker necessary? */
import registerServiceWorker from './registerServiceWorker';

/* stylesheet for public.html */
import './styles/index.css';


ReactDOM.render(<App />, document.querySelector('#react-root'));

registerServiceWorker();
