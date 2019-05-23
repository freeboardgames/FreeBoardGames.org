import { GAMES_LIST } from './games';
import noCache from 'koa-no-cache';

const { Server } = require('@freeboardgame.org/boardgame.io/server'); // tslint:disable-line

const HOST = '0.0.0.0';
const PORT = process.env.BGIO_PORT || 8001;

const startServer = async () => {
  const configs = Promise.all(GAMES_LIST.map((gameDef) => gameDef.config()));
  const games = (await configs).map((config) => config.default.bgioGame);
  const server = Server({ games });
  server.app.use(noCache({ global: true }));
  server.app.listen(PORT, HOST, () => {
    console.log(`Serving boardgame.io at: http://${HOST}:${PORT}/`); // tslint:disable-line
  });
};

startServer();
