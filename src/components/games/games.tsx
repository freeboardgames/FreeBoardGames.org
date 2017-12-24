const GAMES = {
  chess: {
    code: 'chess',
    name: 'Chess',
    maxPlayers: 2,
    minPlayers: 2,
    description: 'Classic Game of Chess, International rules.',
    subtitle: '2 players, 10-60 mins',
  },
  checkers: {
    code: 'checkers',
    name: 'Checkers',
    maxPlayers: 2,
    minPlayers: 2,
    description: 'Classic Game of Checkers, American rules.',
    subtitle: '2 players, 10-60 mins',
  },
};

export default {list: [GAMES.chess, GAMES.checkers], map: GAMES};
