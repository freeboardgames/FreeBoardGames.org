/**
 * @jest-environment node
 */

import React from 'react';
import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { StaticRouter } from 'react-router-dom';
import ReactDOMServer from 'react-dom/server';
import { GameSharing } from './Game/GameSharing';
import { AsyncComponentProvider, createAsyncContext } from 'react-async-component';
import bootstrapper from 'react-async-bootstrapper';
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
    expect(ssrHtml).toContain('FreeBoardGame.org');
  });

  it('should render chess', () => {
    const asyncContext = createAsyncContext();
    const app = (
      <AsyncComponentProvider asyncContext={asyncContext}>
        <MuiThemeProvider>
          <StaticRouter location={'/g/chess/local'} context={context}>
            <App />
          </StaticRouter>
        </MuiThemeProvider>
      </AsyncComponentProvider>
    );
    bootstrapper(app).then(() => {
      const ssrHtml = ReactDOMServer.renderToStaticMarkup(app);
      expect(ssrHtml).toContain('svg');
    });
  });

  it('should render game sharing', () => {
    const onDismiss = jest.fn();
    const ssrHtml = ReactDOMServer.renderToStaticMarkup(
      <MuiThemeProvider>
        <GameSharing
          gameCode={'chess'}
          matchCode={'foo'}
          playerID={'0'}
          onDismiss={onDismiss}
        />
      </MuiThemeProvider>);
    expect(ssrHtml).toContain('Share');
  });

  it('should render seabattle', () => {
    const asyncContext = createAsyncContext();
    const app = (
      <AsyncComponentProvider asyncContext={asyncContext}>
        <MuiThemeProvider>
          <StaticRouter location={'/g/seabattle/local'} context={context}>
            <App />
          </StaticRouter>
        </MuiThemeProvider>
      </AsyncComponentProvider>
    );
    bootstrapper(app).then(() => {
      const ssrHtml = ReactDOMServer.renderToStaticMarkup(app);
      expect(ssrHtml).toContain('svg');
    });
  });
});
