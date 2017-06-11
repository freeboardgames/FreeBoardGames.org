const ObjectId = require('mongodb').ObjectId;
const cache = require('memory-cache');
const _ = require('underscore');
const checkersReducer = require('./games/checkerGameState.js').default;
var LAST_DB = null;
const CACHE_DURATION = 30 * 60 * 1000;

function genericReducer (game_code, state, action) {
  if (game_code == 'checkers') {
    return checkersReducer(state, action);
  }
}

function saveAfterExpire (match_code, match) {
  if (LAST_DB) {
    console.log('EXPIRED... SAVING');
    LAST_DB.collection('matches').updateOne({_id: ObjectId(match_code)},
      { $set: {log: match.log} },
    (err, results) => {
      if (err)
        console.log(err)
    });
  }
};

matchJoinHandle = (socket, dispatchRoom, dispatch, db, user, match_code) => {
  LAST_DB = db;
  db.collection('matches').findOne(ObjectId(match_code), (err, match) => {
    let match_cache = cache.get(match_code);
    if (match_cache) {
      match.log = match_cache.log;
    }
    cache.put(match_code, match, CACHE_DURATION, saveAfterExpire);
    let current_state = undefined;
    if (match.log && match.log.length > 0) {
      current_state = match.log[0].state;
    }
    // We pass a NOOP to the reducer in case current_state = undefined.
    let next_state = genericReducer(match.game_code, current_state,
       {type: 'NOOP'});
    next_state.players = match.players;
    next_state.loading = false;
    next_state.player = match.players.indexOf(user.email);
    if (next_state) {
      socket.join('match-' + match_code);
      let result = { type: 'MATCH_SET_STATE' };
      result.payload = next_state;
      dispatch(result);
    }
  })
}

matchActionRequest = (socket, dispatchRoom, dispatch, db, user, match_code, action) => {
  LAST_DB = db;
  console.log('MATCH ACTION REQUEST');
  let match = cache.get(match_code);
  if (!match) {
    console.log('ERROR: ACTION CACHE EXPIRED :(');
    return;
  }
  if (match.players.indexOf(user.email) == -1) { //User not in the match
    return;
  }
  action.player = match.players.indexOf(user.email);
  let current_state = undefined;
  if (match.log && match.log.length > 0) {
    current_state = match.log[0].state;
  } else {
    match.log = [];
  }
  let next_state = genericReducer(match.game_code, current_state, action);
  if (next_state && !_.isEqual(next_state, current_state)) {
    match.log.unshift({state: next_state, action: action});
    //We have a winner! Game is over, GG.
    if (next_state.winner != null) {
      match.status = 'FINISHED';
      match.winner = match.players[match.winner];
      LAST_DB.collection('matches').updateOne({_id: ObjectId(match_code)},
        { $set: {status: match.status, winner: match.winner} },
      (err, results) => {
        if (err)
          console.log(err)
      });
    }
    dispatchRoom('match-' + match_code, action);
    cache.put(match_code, match, CACHE_DURATION, saveAfterExpire);
  }
}

module.exports = { matchActionRequest, matchJoinHandle }
