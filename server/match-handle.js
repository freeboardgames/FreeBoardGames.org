const ObjectId = require('mongodb').ObjectId;
const NodeCache = require( "node-cache" );
const matchCache = new NodeCache( { stdTTL: 30 * 60, checkperiod: 60 } );
const _ = require('underscore');
const checkersReducer = require('./games/checkerGameState.js').default;
var LAST_DB = null;

function genericReducer (game_code, state, action) {
  if (game_code == 'checkers') {
    return checkersReducer(state, action);
  }
}

matchJoinHandle = (socket, dispatchRoom, dispatch, db, user, match_code) => {
  LAST_DB = db;
  db.collection('matches').findOne(ObjectId(match_code), (err, match) => {
    let match_cache = matchCache.get(match_code);
    if (match_cache) {
      match.log = match_cache.log;
    }
    matchCache.set(match_code, match);
    let current_state = undefined;
    if (match.log && match.log.length > 0) {
      current_state = match.log[0].state;
    }
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
  let match = matchCache.get(match_code);
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
    dispatchRoom('match-' + match_code, action);
    matchCache.set(match_code, match);
  }
}

/*matchCache.on("expired", (match_code, match) => {
  console.log('EXPIRED... SAVING');
  LAST_DB.collection('matches').updateOne({_id: ObjectId(match_code)},
    { $set: {log: match.log} },
  (err, results) => {
    if (err)
      console.log(err)
  });
});*/

module.exports = { matchActionRequest, matchJoinHandle }
