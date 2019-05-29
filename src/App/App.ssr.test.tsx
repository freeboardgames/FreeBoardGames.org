/**
 * @jest-environment node
 */

import React from 'react';
import App from './App';
import { StaticRouter } from 'react-router-dom';
import ReactDOMServer from 'react-dom/server';
import { GameSharing } from './Game/GameSharing';
import { AsyncComponentProvider, createAsyncContext } from 'react-async-component';
import asyncBootstrapper from 'react-async-bootstrapper';
import { GAMES_LIST } from '../games';

(global as any).navigator = { userAgent: 'all' };

describe('App', () => {

  const context = {};
  it('should render home', async () => {
    const asyncContext = createAsyncContext();
    const app = (
      <AsyncComponentProvider asyncContext={asyncContext}>
        <StaticRouter location={'/'} context={context}>
          <App />
        </StaticRouter>
      </AsyncComponentProvider>
    );
    await asyncBootstrapper(app);
    const ssrHtml = ReactDOMServer.renderToStaticMarkup(app);
    expect(ssrHtml).toContain('FreeBoardGame.org');
  });

  it('should render game sharing', () => {
    const onDismiss = jest.fn();
    const ssrHtml = ReactDOMServer.renderToStaticMarkup(
      <GameSharing
        gameCode={'chess'}
        roomID={'0'}
        players={[{ playerID: 0, roomID: 'foo' }]}
      />);
    expect(ssrHtml).toContain('Share');
  });

  it('should render all games', async () => {
    for (const gameDef of GAMES_LIST) {
      const code = gameDef.code;
      const asyncContext = createAsyncContext();
      const app = (
        <AsyncComponentProvider asyncContext={asyncContext}>
          <StaticRouter location={`/g/${code}/local`} context={context}>
            <App />
          </StaticRouter>
        </AsyncComponentProvider>
      );
      await asyncBootstrapper(app);
      const ssrHtml = ReactDOMServer.renderToStaticMarkup(app);
      expect(ssrHtml).toContain('svg');
    }
  });

  it('should render all games info', async () => {
    for (const gameDef of GAMES_LIST) {
      const code = gameDef.code;
      const asyncContext = createAsyncContext();
      const app = (
        <AsyncComponentProvider asyncContext={asyncContext}>
          <StaticRouter location={`/g/${code}`} context={context}>
            <App />
          </StaticRouter>
        </AsyncComponentProvider>
      );
      await asyncBootstrapper(app);
      const ssrHtml = ReactDOMServer.renderToStaticMarkup(app);
      expect(ssrHtml).toContain(gameDef.name);
    }
  });

  it('should render about', async () => {
    const asyncContext = createAsyncContext();
    const app = (
      <AsyncComponentProvider asyncContext={asyncContext}>
        <StaticRouter location={'/about'} context={context}>
          <App />
        </StaticRouter>
      </AsyncComponentProvider>
    );
    await asyncBootstrapper(app);
    const ssrHtml = ReactDOMServer.renderToStaticMarkup(app);
    expect(ssrHtml).toContain('about.header');
  });
});
