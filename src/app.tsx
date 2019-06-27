import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import { AsyncComponentProvider } from 'react-async-component';
import asyncBootstrapper from 'react-async-bootstrapper';
import App from './App/App';
import { BrowserRouter } from 'react-router-dom';

const app = (
  <AsyncComponentProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AsyncComponentProvider>
);

asyncBootstrapper(app).then(() => {
  ReactDOM.render(app, document.getElementById('root'));
});

(module as any).hot.accept();
