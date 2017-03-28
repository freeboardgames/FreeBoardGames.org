const ObjectId = require('mongodb').ObjectId;
const checkersReducer = require('./games/checkerGameState.js').default;

function genericReducer (game_code, state, action) {
  if (game_code == 'checkers') {
    return checkersReducer(state, action);
  }
}

matchJoinHandle = (socket, dispatchRoom, dispatch, db, user, match_code) => {
  db.collection('matches').findOne(ObjectId(match_code), (err, match) => {
    if (match.players.indexOf(user.email) == -1) //User not in the match
      return;
    let state = genericReducer(match.game_code, match.state, {type: 'NOOP'});
    if (state) {
      let result = { type: 'MATCH_SET_STATE' };
      state.loading = false;
      result.payload = state;
      dispatch(result);
    }
  })
}

module.exports = { matchJoinHandle }
