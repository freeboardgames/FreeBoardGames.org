import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import App from './App/App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
