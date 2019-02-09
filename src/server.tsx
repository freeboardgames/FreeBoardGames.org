import * as React from 'react';
import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as KoaSend from 'koa-send';
import * as KoaStatic from 'koa-static';
import * as KoaHelmet from 'koa-helmet';
import * as fs from 'fs';
import * as Mustache from 'mustache';
import * as ReactDOMServer from 'react-dom/server';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { StaticRouter } from 'react-router-dom';
import { GAMES_LIST } from './games';

const { Server } = require('flamecoals-boardgame.io/server'); // tslint:disable-line
import App from './App/App';

const HOST = '0.0.0.0';
const PORT = process.env.PORT || 8000;
const NODE_ENV = process.env.NODE_ENV;
const PROD = NODE_ENV === 'production';
const DEV = !PROD;

const server = Server({ games: GAMES_LIST.map((gameDef) => gameDef.bgioGame) });
const router = new Router();
const template = fs.readFileSync('./dist/index.html', 'utf8');
Mustache.parse(template);

const renderSite = (url: string, title?: string) => {
  if (!title) {
    title = 'FreeBoardGame.org | Play Chess w/ Friends';
  }
  const context = {};
  const reactHtml = ReactDOMServer.renderToStaticMarkup(
    <MuiThemeProvider>
      <StaticRouter
        location={url}
        context={context}
      >
        <App />
      </StaticRouter>
    </MuiThemeProvider>);
  return Mustache.render(template, { title, reactHtml });
};

router.get('/g/chess', (ctx, next) => {
  ctx.body = renderSite(ctx.request.url, 'Play Chess w/ Friends | FreeBoardGame.org');
});

server.app.use(KoaStatic('./static'));
server.app.use(KoaStatic('./dist'));
server.app.use(router.routes());
server.app.use(router.allowedMethods());

server.app.use((ctx: any) => {
  ctx.body = renderSite(ctx.request.url);
});

server.app.listen(PORT, HOST, () => {
  console.log(`Serving ${NODE_ENV} at: http://${HOST}:${PORT}/`); // tslint:disable-line
});
