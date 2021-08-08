// import `fetch` to fix apollo-link-http-common's Invariant Violation:
// fetch is not found globally and no fetcher passed, to fix pass a fetch for
// your environment like https://www.npmjs.com/package/node-fetch.
(global as any).fetch = require('node-fetch');
import { GAMES_LIST } from 'games';
import noCache from 'koa-no-cache';
const cors = require('@koa/cors'); // tslint:disable-line
import { Server } from 'boardgame.io/server';
import { PostgresStore } from 'bgio-postgres';

const PORT = parseInt(process.env.BGIO_PORT || '8001', 10);

const startServer = async () => {
  const configs = Promise.all(GAMES_LIST.map((gameDef) => gameDef.config()));
  const games = (await configs).map((config) => config.default.bgioGame);
  const pgUrl = process.env.POSTGRES_URL;
  const db = pgUrl ? new PostgresStore(pgUrl) : undefined;
  const origins = process.env.BGIO_PUBLIC_SERVERS || 'http://localhost';
  const server = Server({ games, db, origins });
  server.app.use(noCache({ global: true }));
  server.app.use(cors());
  server.run(PORT);
};

startServer();
