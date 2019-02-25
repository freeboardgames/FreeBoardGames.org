import React from 'react';
import Koa from 'koa';
import Router from 'koa-router';
import KoaSend from 'koa-send';
import KoaStatic from 'koa-static';
import KoaHelmet from 'koa-helmet';
import fs from 'fs';
import ReactDOMServer from 'react-dom/server';
import { AsyncComponentProvider, createAsyncContext } from 'react-async-component';
import asyncBootstrapper from 'react-async-bootstrapper';
import serialize from 'serialize-javascript';
import { StaticRouter } from 'react-router-dom';
import { GAMES_LIST } from './games';
import { getPageMetadata } from './metadata';
import noCache from 'koa-no-cache';

const { Server } = require('flamecoals-boardgame.io/server'); // tslint:disable-line
import App from './App/App';

const HOST = '0.0.0.0';
const PORT = process.env.PORT || 8000;
const NODE_ENV = process.env.NODE_ENV;
const PROD = NODE_ENV === 'production';
const DEV = !PROD;

const template = fs.readFileSync('./dist/layout.html', 'utf8');

function renderHtml(layout: string, title: string, description: string, reactHtml: string) {
  let result = layout;
  result = result.replace('<title>FreeBoardGame.org</title>', `<title>${title}</title>`);
  result = result.replace(
    '<meta name="Description" content="">',
    `<meta name="Description" content="${description}">`);
  result = result.replace(
    '<div id="root"></div>',
    `<div id="root">${reactHtml}</div>`);
  return result;
}

const renderSite = async (url: string) => {
  const asyncContext = createAsyncContext();
  const metadata = getPageMetadata(url);
  const title = metadata.title;
  const description = metadata.description;
  const context = {};
  const app = (
    <AsyncComponentProvider asyncContext={asyncContext}>
      <StaticRouter
        location={url}
        context={context}
      >
        <App />
      </StaticRouter>
    </AsyncComponentProvider>
  );
  await asyncBootstrapper(app);
  const reactHtml = ReactDOMServer.renderToStaticMarkup(app);
  return ({
    status: (context as any).status,
    render: renderHtml(template, title, description, reactHtml),
  });
};

const startServer = async () => {
  const configs = Promise.all(GAMES_LIST.map((gameDef) => gameDef.config()));
  const games = (await configs).map((config) => config.default.bgioGame);
  const server = Server({ games });
  server.app.use(noCache({ global: true }));
  server.app.use(KoaStatic('./static'));
  server.app.use(KoaStatic('./dist'));
  const router = new Router();
  server.app.use(router.routes());
  server.app.use(router.allowedMethods());
  server.app.use(async (ctx: any, next: any) => {
    await next();
    const { render, status } = await renderSite(ctx.request.url);
    if (status) {
      ctx.response.status = Number(status);
    }
    ctx.response.body = render;
  });

  server.app.listen(PORT, HOST, () => {
    console.log(`Serving ${NODE_ENV} at: http://${HOST}:${PORT}/`); // tslint:disable-line
  });
};

startServer();
