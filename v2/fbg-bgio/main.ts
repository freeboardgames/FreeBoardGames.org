import fs from 'fs';
import path from 'path';
import { Server } from 'boardgame.io/server';

const PORT = parseInt(process.env.BGIO_PORT || '8001', 10);
const ORIGINS = process.env.BGIO_PUBLIC_SERVERS || 'http://localhost';

function getGamesList(): string[] {
  const jsonPath = path.join(__dirname, '..', 'fbg-games', 'games.json');
  return JSON.parse(fs.readFileSync(jsonPath).toString());
}

function loadAllGames(gameList: string[]) {
  return gameList.map((gameId) => (require(`fbg-games/${gameId}/game`).default));
}

const games = loadAllGames(getGamesList());
const server = Server({ games, origins: ORIGINS });
server.run(PORT);