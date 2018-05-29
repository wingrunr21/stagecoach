import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/* stylesheet for public.html */
import './styles/index.css';

/* is service worker necessary? */
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('react-root'));

// registerServiceWorker();
