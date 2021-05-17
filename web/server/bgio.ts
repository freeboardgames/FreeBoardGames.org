// import `fetch` to fix apollo-link-http-common's Invariant Violation:
// fetch is not found globally and no fetcher passed, to fix pass a fetch for
// your environment like https://www.npmjs.com/package/node-fetch.
(global as any).fetch = require('node-fetch');
import { GAMES_LIST } from 'games';
import noCache from 'koa-no-cache';
const cors = require('@koa/cors'); // tslint:disable-line
import { Server, SocketIO } from 'boardgame.io/server';
import { PostgresStore } from 'bgio-postgres';
import { createAdapter } from '@socket.io/redis-adapter';
import { RedisClient } from 'redis';

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
  const user = process.env.FBG_REDIS_USER;
  const password = process.env.FBG_REDIS_PASSWORD;
  if (!host || !port || !password || !user) {
    return;
  }
  const pubClient = new RedisClient({ host, port, user, password });
  const subClient = pubClient.duplicate();
  return new SocketIO({ socketAdapter: createAdapter(pubClient, subClient) });
}

const startServer = async () => {
  const configs = Promise.all(GAMES_LIST.map((gameDef) => gameDef.config()));
  const games = (await configs).map((config) => config.default.bgioGame);
  const server = Server({ games, db: getDb(), transport: getTransport() });
  server.app.use(noCache({ global: true }));
  server.app.use(cors());
  server.run(PORT, () => {
    // eslint-disable-next-line
    console.log(`Serving boardgame.io at: http://0.0.0.0:${PORT}/`); // tslint:disable-line
  });
};

startServer();
