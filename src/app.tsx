import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import App from './App/App';
import { BrowserRouter } from 'react-router-dom';

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));

if ((module as any).hot) {
  (module as any).hot.accept();
}
