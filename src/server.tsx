import * as React from 'react';
import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as KoaSend from 'koa-send';
import * as KoaStatic from 'koa-static';
import * as KoaHelmet from 'koa-helmet';
import * as fs from 'fs';
import * as Mustache from 'mustache';
import * as ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

const { Server } = require('boardgame.io/server'); // tslint:disable-line
import Chess from './components/games/chess/game';
import App from './components/App/App';

const HOST = '0.0.0.0';
const PORT = process.env.PORT || 8000;
const NODE_ENV = process.env.NODE_ENV;
const PROD = NODE_ENV === 'production';
const DEV = !PROD;

const server = Server({ games: [Chess] });
const router = new Router();
const template = fs.readFileSync('./dist/webpack/template.html', 'utf8');
Mustache.parse(template);

const renderSite = (url: string, title?: string) => {
  if (!title) {
    title = 'Turnato | Play Chess w/ Friends';
  }
  url = '/'; // TODO: Finish SSR -- showing only home page for now.
  const context = {};
  const reactHtml = ReactDOMServer.renderToString(
    <StaticRouter
      location={url}
      context={context}
    >
      <App/>
    </StaticRouter>);
  return Mustache.render(template, {title, reactHtml});
};

router.get('/g/chess', (ctx, next) => {
  ctx.body = renderSite(ctx.request.url, 'Play Chess w/ Friends | Turnato');
});

server.app.use(KoaStatic('./static'));
server.app.use(KoaStatic('./dist/webpack'));
server.app.use(router.routes());
server.app.use(router.allowedMethods());

server.app.use((ctx: any) => {
  ctx.body = renderSite(ctx.request.url);
});

server.app.listen(PORT, HOST, () => {
  console.log(`Serving ${NODE_ENV} at: http://localhost:${PORT}/`); // tslint:disable-line
});
