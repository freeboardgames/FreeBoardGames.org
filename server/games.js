GAMES = {
  "chess": {
    "code": "chess",
    "name": "Chess",
    "maxPlayers": 2,
    "minPlayers": 2,
    "description": "Classic Game of Chess, International rules.",
    "screenshot": "/chess_screenshot.png",
    "subtitle": "2 players, 10-60 mins",
  },
  "checkers": {
    "code": "checkers",
    "name": "Checkers",
    "maxPlayers": 2,
    "minPlayers": 2,
    "description": "Classic Game of Checkers, American rules.",
    "subtitle": "2 players, 10-60 mins",
    "screenshot": "/checkers_screenshot.png"
  }
};

module.exports = {'list': [GAMES.chess, GAMES.checkers],
                  'map': GAMES};
