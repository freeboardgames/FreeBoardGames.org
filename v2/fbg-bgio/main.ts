import fs from 'fs';
import path from 'path';
import { Server } from 'boardgame.io/server';
import cors from '@koa/cors';
import Router from '@koa/router';
import process from 'node:process';
import readline from 'readline';

const rl = readline.createInterface(process.stdin, process.stdout);
const PORT = parseInt(process.env.BGIO_PORT || '8001', 10);
const GRACE_PERIOD = parseInt(process.env.BGIO_GRACE_PERIOD || '5', 10);
const ORIGINS = process.env.BGIO_ORIGINS || 'http://localhost:3000';

function getGamesList(): string[] {
  const jsonPath = path.join(__dirname, '..', 'fbg-games', 'games.json');
  return JSON.parse(fs.readFileSync(jsonPath).toString());
}

function loadAllGames(gameList: string[]) {
  return gameList.map((gameId) => (require(`fbg-games/${gameId}/game`).default));
}

const status = { open: true };
const shutdown = () => {
  process.exit(0);
};
const gracefulShutdown = () => {
  console.log(`Server CLOSED! Gracefully shutting down in ${GRACE_PERIOD} seconds...`);
  status.open = false;
  setTimeout(shutdown, GRACE_PERIOD * 1e3);
};
process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);
rl.on('SIGINT', gracefulShutdown);
rl.on('SIGTERM', gracefulShutdown);

const games = loadAllGames(getGamesList());
const server = Server({ games, origins: ORIGINS });
server.app.use(cors({ origin: ORIGINS }));
const router = new Router();
router.get('open', '/open', (ctx) => {
    ctx.body = (status.open) ? "open" : "closed";
});
server.app.use(router.routes())
server.app.use(router.allowedMethods());
server.run(PORT);