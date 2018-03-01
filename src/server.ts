import * as Koa from 'koa';
import * as KoaSend from 'koa-send';
import * as KoaStatic from 'koa-static';
import * as KoaHelmet from 'koa-helmet';
const Server = require('boardgame.io/server');
import Chess from './components/games/chess/game';

const HOST = '0.0.0.0';
const PORT = process.env.PORT || 8000;
const NODE_ENV = process.env.NODE_ENV;
const PROD = NODE_ENV === 'production';
const DEV = !PROD;

const app = Server({ games: [Chess] });

app.use(KoaStatic('./dist'));
app.use(KoaHelmet());

app.use(async (ctx:any) => {
  await KoaSend(ctx, `./dist/index.html`); 
});

app.listen(PORT, HOST, () => {
  console.log(`Serving ${NODE_ENV} at: http://localhost:${PORT}/`);
});
