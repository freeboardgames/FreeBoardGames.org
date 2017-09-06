const shortid = require('shortid');
const GAMES = require('./games.js');
var lobbyQueue = {};
const MAX_WAIT_TIME = 2 * 60 * 1000; // 2 mins

module.exports = (io, socket, dispatch, db, user, game_code) => {
  if (!(game_code in lobbyQueue)) {
    lobbyQueue[game_code] = [];
  }
  let game = GAMES.map[game_code];
  let timestamp = new Date().getTime();
  lobbyQueue[game_code] = lobbyQueue[game_code].filter((entry) => {
    return (entry.timestamp >= timestamp - MAX_WAIT_TIME) &&
           entry.user._id != user._id;
  });
  lobbyQueue[game_code].push({user, socket, timestamp});
  if (lobbyQueue[game_code].length === game.minPlayers) {
    let players = [];
    let sockets = [];
    lobbyQueue[game_code].forEach((entry) => {
      players.push(entry.user._id);
      sockets.push(entry.socket);
    });
    lobbyQueue[game_code] = [];
    let match_id = shortid.generate();
    let link = '/g/' + game_code + '/' + match_id;
    db.collection('matches').insertOne({party_id: null,
      _id: match_id,
      game_code,
      game_name: game.name,
      status: 'ACTIVE',
      players
    }, () => {
      sockets.forEach((socket) => {
        socket.emit('socketIoMiddleware',
          {type: 'SET_LOBBY_INFO', payload:
          {
            loading: false,
            status: 'FOUND',
            link
          }
          });
      });
    });
  } else {
    dispatch(
      {type: 'SET_LOBBY_INFO', payload:
      {
        loading: false,
        status: 'WAITING',
        wait: MAX_WAIT_TIME
      }
      });
  }
};
