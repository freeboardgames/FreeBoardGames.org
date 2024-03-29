// import `fetch` to fix apollo-link-http-common's Invariant Violation:
// fetch is not found globally and no fetcher passed, to fix pass a fetch for
// your environment like https://www.npmjs.com/package/node-fetch.
(global as any).fetch = require('node-fetch');
import { GAMES_LIST } from 'games';
import noCache from 'koa-no-cache';
const cors = require('@koa/cors'); // tslint:disable-line
import redis from 'redis';
import { RedisPubSub } from '@boardgame.io/redis-pubsub';
import { Server, SocketIO } from 'boardgame.io/server';
import { PostgresStore } from 'bgio-postgres';

const PORT = parseInt(process.env.BGIO_PORT || '8001', 10);

function getDb() {
  const pgUrl = process.env.POSTGRES_URL;
  if (!pgUrl) {
    return;
  }
  return new PostgresStore(pgUrl);
}

function getTransport() {
  const host = process.env.FBG_REDIS_HOST;
  const port = process.env.FBG_REDIS_PORT;
  const password = process.env.FBG_REDIS_PASSWORD;
  if (!host || !port || !password) {
    return;
  }
  const pub = redis.createClient(port, host, { auth_pass: password });
  const sub = redis.createClient(port, host, { auth_pass: password });
  return new SocketIO({ pubSub: new RedisPubSub(pub, sub) });
}

const startServer = async () => {
  const configs = Promise.all(GAMES_LIST.map((gameDef) => gameDef.config()));
  const games = (await configs).map((config) => config.default.bgioGame);
  const db = getDb();
  const origins = process.env.BGIO_PUBLIC_SERVERS || 'http://localhost';
  const server = Server({ games, db, origins, transport: getTransport() });
  server.app.use(noCache({ global: true }));
  server.app.use(cors());
  server.run(PORT);
};

startServer();
