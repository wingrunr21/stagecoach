/* React */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

/* Components */
import { App } from './components/app/';

/* Stylesheets */
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

registerServiceWorker();
