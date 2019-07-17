import React from 'react';
import App from './App';
import { StaticRouter } from 'react-router-dom';
import { render, wait } from '@testing-library/react';
require('@testing-library/jest-dom/extend-expect');

describe('App', () => {
  const context = {};
  it('should go to home', async () => {
    const { getByText } = render(
      <StaticRouter location={'/'} context={context}>
        <App />
      </StaticRouter>,
    );
    await wait(() => expect(getByText(/We at FreeBoardGame.org/)).toBeTruthy());
  });

  it('should show not found page', async () => {
    const { getByText } = render(
      <StaticRouter location={'/doesnotexist'} context={context}>
        <App />
      </StaticRouter>,
    );
    await wait(() => expect(getByText(/Not Found/)).toBeTruthy());
  });

  it('should show invalid locale', async () => {
    const { getByText } = render(
      <StaticRouter location={'/xx/about'} context={context}>
        <App />
      </StaticRouter>,
    );
    await wait(() => expect(getByText(/Invalid Locale/)).toBeTruthy());
  });
});
