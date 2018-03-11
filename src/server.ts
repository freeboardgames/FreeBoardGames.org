import * as Koa from 'koa';
import * as KoaSend from 'koa-send';
import * as KoaStatic from 'koa-static';
import * as KoaHelmet from 'koa-helmet';
const { Server } = require('boardgame.io/server');
import Chess from './components/games/chess/game';

const HOST = '0.0.0.0';
const PORT = process.env.PORT || 8000;
const NODE_ENV = process.env.NODE_ENV;
const PROD = NODE_ENV === 'production';
const DEV = !PROD;

const server = Server({ games: [Chess] });

server.app.use(KoaStatic('./dist'));
server.app.use(KoaHelmet());

server.app.use(async (ctx:any) => {
  await KoaSend(ctx, `./dist/index.html`); 
});

server.app.listen(PORT, HOST, () => {
  console.log(`Serving ${NODE_ENV} at: http://localhost:${PORT}/`);
});
