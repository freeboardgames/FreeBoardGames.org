/**
 * @jest-environment node
 */

import * as React from 'react';
import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { StaticRouter } from 'react-router-dom';
import * as ReactDOMServer from 'react-dom/server';

(global as any).navigator = { userAgent: 'all' };

describe('App', () => {

  const context = {};
  it('should render home', () => {
    const ssrHtml = ReactDOMServer.renderToStaticMarkup(
      <MuiThemeProvider>
        <StaticRouter location={'/'} context={context}>
          <App />
        </StaticRouter>
      </MuiThemeProvider>);
    expect(ssrHtml).toContain('Turnato');
  });

  it('should render chess', () => {
    const ssrHtml = ReactDOMServer.renderToStaticMarkup(
      <MuiThemeProvider>
        <StaticRouter location={'/g/chess'} context={context}>
          <App />
        </StaticRouter>
      </MuiThemeProvider>);
    expect(ssrHtml).toContain('svg');
  });
});
