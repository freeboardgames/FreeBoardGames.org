import { GAMES_LIST } from 'games';

const gameDictionaryByCodes = GAMES_LIST.reduce((games, game) => {
  games[game.code] = game;

  if (game.codes) {
    Object.entries(game.codes).forEach(([, code]) => {
      games[code] = game;
    });
  }

  return games;
}, {});

export const getGameDefinition = (gameCode: string) => {
  return gameDictionaryByCodes[gameCode];
};

export const getAllGames = () => GAMES_LIST;

export const getGamesNamespace = (gameCode: string) => `games/${gameCode}`;
