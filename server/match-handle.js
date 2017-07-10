const ObjectId = require('mongodb').ObjectId;
const cache = require('memory-cache');
const _ = require('underscore');
const checkersReducer = require('./games/checkerGameState.js').default;
const chessReducer = require('./games/chessGameState.js').default;
var LAST_DB = null;
var NOTIFICATION_TIMERS = {};
const webpush = require('web-push');
const CACHE_DURATION = 5 * 60 * 1000;
const vapidKeys = {
  publicKey:
  'BAN72E3hbQ14KDaYyr9tSTXewOB9CvN-sSyQuk0vPq-V755kPnoCivqUZvP8ib1p_MFgIiLgNYb_eT6N0uYYIuo',
  privateKey: '***REMOVED***'
};

function genericReducer (game_code, state, action) {
  if (game_code == 'checkers') {
    return checkersReducer(state, action);
  } else if (game_code == 'chess') {
    return chessReducer(state, action);
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

joinMatchHandle = (socket, dispatchRoom, dispatch, db, user, match_code) => {
  LAST_DB = db;
  console.log('MATCH JOIN');
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
      console.log('JOIN ' + 'match-' + match_code);
      socket.join('match-' + match_code);
      let result = { type: 'MATCH_SET_STATE' };
      result.payload = next_state;
      dispatch(result);
      if (!match.messages) {
        match.messages = [];
      }
      dispatch({ type: 'SET_MESSAGES', payload: match.messages });
    }
  })
}

leaveMatchHandle = (socket, dispatchRoom, dispatch, db, user, match_code) => {
  socket.leave('match-' + match_code);
}

notifyToPlay = (db, email, game_code, match_code) => () => {
  db.collection('users').findOne({email: email}, (err, user) => {
    if (!user.pushSubscription)
      return;
    webpush.setVapidDetails(
      'mailto:felizardow@gmail.com',
      vapidKeys.publicKey,
      vapidKeys.privateKey
    );
    let notificationData = JSON.stringify({action: 'PLAY',
                                       game: game_code,
                                       match_code: match_code});
    console.log('SEND NOTIFICATION ' + user.email + ' ' + notificationData);
    webpush.sendNotification(user.pushSubscription, notificationData)
    .then((r) => {
      console.log('SUCCESS SENDING NOTIFICATION');
    })
    .catch((err) => {
      console.log('ERROR SENDING NOTIFICATION: ' + err);
    });
  });
}

matchActionRequest = (socket, dispatchRoom, dispatch, db, user, match_code, action) => {
  LAST_DB = db;
  console.log('MATCH ACTION REQUEST');
  let match = cache.get(match_code);
  if (!match) {
    console.log('ERROR: ACTION CACHE EXPIRED : '+ match_code);
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
    current_state = genericReducer(match.game_code, undefined, {type: 'NOOP'});
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
    } else {
      if (match_code in NOTIFICATION_TIMERS) {
        console.log('CLEARING NOTIFICATION TIMER FOR ' + match_code);
        clearTimeout(NOTIFICATION_TIMERS[match_code]);
      }
      let current_player = next_state.turn % match.players.length;
      console.log('SETTING UP NOTIFICATION TIMER FOR ' + match_code);
      NOTIFICATION_TIMERS[match_code] = setTimeout(notifyToPlay(db,
        match.players[current_player], match.game_code, match_code), 60 * 1000);
    }
    console.log('DISPATCH ' + 'match-' + match_code);
    dispatchRoom('match-' + match_code, action);
    cache.put(match_code, match, CACHE_DURATION, saveAfterExpire);
  } else {
    console.log('IGNORED!!!');
  }
}

module.exports = { matchActionRequest, joinMatchHandle, leaveMatchHandle }
