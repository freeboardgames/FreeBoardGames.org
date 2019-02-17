import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import { AsyncComponentProvider, createAsyncContext } from 'react-async-component';
import asyncBootstrapper from 'react-async-bootstrapper';
import App from './App/App';
import { BrowserRouter } from 'react-router-dom';

const rehydrateState = (window as any).ASYNC_COMPONENTS_STATE;
const app = (
  <AsyncComponentProvider rehydrateState={rehydrateState}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AsyncComponentProvider>
);

asyncBootstrapper(app).then(() => {
  ReactDOM.render(app, document.getElementById('root'));
});
