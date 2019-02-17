import React from 'react';
import Koa from 'koa';
import Router from 'koa-router';
import KoaSend from 'koa-send';
import KoaStatic from 'koa-static';
import KoaHelmet from 'koa-helmet';
import fs from 'fs';
import Mustache from 'mustache';
import ReactDOMServer from 'react-dom/server';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AsyncComponentProvider, createAsyncContext } from 'react-async-component';
import asyncBootstrapper from 'react-async-bootstrapper';
import serialize from 'serialize-javascript';
import { StaticRouter } from 'react-router-dom';
import { GAMES_LIST } from './games';
import { getPageMetadata } from './metadata';

const { Server } = require('flamecoals-boardgame.io/server'); // tslint:disable-line
import App from './App/App';

const HOST = '0.0.0.0';
const PORT = process.env.PORT || 8000;
const NODE_ENV = process.env.NODE_ENV;
const PROD = NODE_ENV === 'production';
const DEV = !PROD;

const server = Server({ games: GAMES_LIST.map((gameDef) => gameDef.bgioGame) });
const router = new Router();
const template = fs.readFileSync('./dist/template.html', 'utf8');
Mustache.parse(template);

const renderSite = (url: string) => {
  const metadata = getPageMetadata(url);
  const title = metadata.title;
  const description = metadata.description;
  const asyncContext = createAsyncContext();
  const app = (
    <AsyncComponentProvider asyncContext={asyncContext}>
      <MuiThemeProvider>
        <StaticRouter
          location={url}
          context={{}}
        >
          <App />
        </StaticRouter>
      </MuiThemeProvider>
    </AsyncComponentProvider>
  );
  return asyncBootstrapper(app).then(() => {
    const reactHtml = ReactDOMServer.renderToString(app);
    const asyncState = serialize(asyncContext.getState());
    return Mustache.render(template, { title, reactHtml, asyncState, description });
  });
};

server.app.use(KoaStatic('./static'));
server.app.use(KoaStatic('./dist'));
server.app.use(router.routes());
server.app.use(router.allowedMethods());

server.app.use(async (ctx: any, next: any) => {
  await next();
  ctx.response.body = await renderSite(ctx.request.url);
});

server.app.listen(PORT, HOST, () => {
  console.log(`Serving ${NODE_ENV} at: http://${HOST}:${PORT}/`); // tslint:disable-line
});
