/**
 * @jest-environment node
 */

import React from 'react';
import App from './App';
import { StaticRouter, MemoryRouter } from 'react-router-dom';
import ReactDOMServer from 'react-dom/server';
import Loadable from 'react-loadable';
import { GAMES_LIST } from '../games';
import { Room } from './Lobby/Room';

(global as any).navigator = { userAgent: 'all' };

describe('App', () => {
  const context = {};
  it('should render home', async () => {
    const app = (
      <StaticRouter location={'/'} context={context}>
        <App />
      </StaticRouter>
    );
    await Loadable.preloadAll();
    const ssrHtml = ReactDOMServer.renderToStaticMarkup(app);
    expect(ssrHtml).toContain('We at FreeBoardGame.org');
  });

  it('should render all games info', async () => {
    for (const gameDef of GAMES_LIST) {
      const code = gameDef.code;
      const app = (
        <StaticRouter location={`/g/${code}`} context={context}>
          <App />
        </StaticRouter>
      );
      await Loadable.preloadAll();
      const ssrHtml = ReactDOMServer.renderToStaticMarkup(app);
      expect(ssrHtml).toContain(gameDef.name);
    }
  });

  it('should render about', async () => {
    const app = (
      <StaticRouter location={'/about'} context={context}>
        <App />
      </StaticRouter>
    );
    await Loadable.preloadAll();
    const ssrHtml = ReactDOMServer.renderToStaticMarkup(app);
    expect(ssrHtml).toContain('About FreeBoardGame.org');
  });

  it('should render room loading page for SSR', async () => {
    const app = (
      <MemoryRouter>
        <Room
          match={{
            params: { gameCode: 'chess', roomID: 'fooroom' },
          }}
        />
      </MemoryRouter>
    );
    await Loadable.preloadAll();
    const ssrHtml = ReactDOMServer.renderToStaticMarkup(app);
    expect(ssrHtml).toContain('Loading');
  });
});
