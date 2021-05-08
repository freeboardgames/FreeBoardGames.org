import { GAMES_MAP } from 'games';

const allGames = Object.entries(GAMES_MAP).reduce((games, [code, game]) => {
  games[code] = game;

  if (game.codes) {
    Object.entries(game.codes).forEach(([, code]) => {
      games[code] = game;
    });
  }

  return games;
}, {});

export const getGameDefinition = (gameCode: string) => {
  return allGames[gameCode];
};

export const getAllGames = () => Object.values(GAMES_MAP);
