const GAMES = {
  chess: {
    code: 'chess',
    name: 'Chess',
    maxPlayers: 2,
    minPlayers: 2,
    description: 'Classic Game of Chess, International rules.',
    subtitle: '2 players, 10-60 mins',
    link: '/g/chess',
  },
  seabattle: {
    code: 'seabattle',
    name: 'Sea Battle',
    maxPlayers: 2,
    minPlayers: 2,
    description: 'Sink your enemy ships!',
    subtitle: '2 players, 5-20 mins',
    link: '/g/seabattle',
  },
};

export default {list: [GAMES.chess, GAMES.seabattle], map: GAMES};
