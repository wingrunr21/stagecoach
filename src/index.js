/* React */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './components/app/';
import './index.scss';

const render = () =>  {
  ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />    
    </BrowserRouter>,
    document.querySelector('#react-root')
  );
};

render();

// import registerServiceWorker from './registerServiceWorker';
// registerServiceWorker();
