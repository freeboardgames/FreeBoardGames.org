const GAMES = require('./games.js');

module.exports = (socket, dispatch, db, code) => {
  dispatch({type: 'SET_GAME_INFO', payload: GAMES.map[code]});
};
