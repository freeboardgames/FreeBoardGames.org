import React from 'react';
import Router from 'koa-router';
import KoaStatic from 'koa-static';
import fs from 'fs';
import ReactDOMServer from 'react-dom/server';
import { AsyncComponentProvider, createAsyncContext } from 'react-async-component';
import asyncBootstrapper from 'react-async-bootstrapper';
import { StaticRouter } from 'react-router-dom';
import { GAMES_LIST } from './games';
import { getPageMetadata, IPageMetadata } from './metadata';
import noCache from 'koa-no-cache';

import Koa from 'koa';
const server = new Koa();

import App from './App/App';

const HOST = '0.0.0.0';
const PORT = Number(process.env.FBG_PORT) || 8000;

const RESTRICTIVE_ROBOTS_TXT = ['User-agent: *',
  'Disallow: /', ''].join('\n');

const template = fs.readFileSync('./dist/layout.html', 'utf8');

function renderHtml(layout: string, metadata: IPageMetadata, reactHtml: string) {
  let result = layout;

  result = result.replace('<title>FreeBoardGame.org</title>', `<title>${metadata.title}</title>`);

  if (metadata.description) {
    result = result.replace(
      '<meta name="description" content="">\n',
      `<meta name="description" content="${metadata.description}">\n`);
  } else {
    result = result.replace(
      '<meta name="description" content="">\n',
      '');
  }

  if (!metadata.noindex) {
    result = result.replace('<meta name="robots" content="noindex">\n',
      '');
  }

  result = result.replace(
    '<div id="root"></div>',
    `<div id="root">${reactHtml}</div>`);
  return result;
}

const renderSite = async (url: string) => {
  const asyncContext = createAsyncContext();
  const metadata = getPageMetadata(url);
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
    render: renderHtml(template, metadata, reactHtml),
  });
};

const startServer = async () => {
  server.use(noCache({ global: true }));
  server.use(KoaStatic('./static'));
  server.use(KoaStatic('./dist'));
  const router = new Router();
  server.use(router.routes());
  server.use(router.allowedMethods());
  server.use(async (ctx: any, next: any) => {
    if (ctx.request.path === '/robots.txt') {
      if (ctx.request.hostname.toLowerCase() !== 'freeboardgame.org') {
        ctx.response.body = RESTRICTIVE_ROBOTS_TXT;
      }
    } else {
      await next();
    }
  });
  server.use(async (ctx: any, next: any) => {
    await next();
    const { render, status } = await renderSite(ctx.request.url);
    if (status) {
      ctx.response.status = Number(status);
    }
    ctx.response.body = render;
  });

  // app.listen()

  server.listen(PORT, HOST, () => {
    console.log(`Serving FreeBoardGame.org at: http://${HOST}:${PORT}/`); // tslint:disable-line
  });
};

startServer();
