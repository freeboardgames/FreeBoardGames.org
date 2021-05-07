import { GAMES_MAP } from 'games';

const allGames = Object.entries(GAMES_MAP).reduce((games, [code, game]) => {
  games[code] = game;

  if (game.codes) {
    Object.keys(game.codes).forEach((code) => {
      games[code] = game;
    });
  }

  return games;
}, {});

export const getGameDefinition = (gameCode: string) => {
  return allGames[gameCode];
};

export const getAllGamesCodes = () => {
  return Object.entries(GAMES_MAP).map(([code, game]) => {
    return { en: code, ...swap(game.codes) };
  });
};

function swap(json: object | undefined): Record<string, string> {
  var ret = {};
  for (var key in json) {
    ret[json[key]] = key;
  }
  return ret;
}
