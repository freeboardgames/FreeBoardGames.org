const cache = require('memory-cache');
const _ = require('underscore');
const checkersReducer = require('./games/checkerGameState.js').default;
const chessReducer = require('./games/chessGameState.js').default;
const secrets = require('./secrets.js');
var LAST_DB = null;
var NOTIFICATION_TIMERS = {};
const webpush = require('web-push');
const CACHE_DURATION = 5 * 60 * 1000;
var vapidKeys = {
  publicKey:
  'BAN72E3hbQ14KDaYyr9tSTXewOB9CvN-sSyQuk0vPq-V755kPnoCivqUZvP8ib1p_MFgIiLgNYb_eT6N0uYYIuo',
  privateKey: secrets.vapid_private_key || 'create secrets.js'
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
    LAST_DB.collection('matches').updateOne({_id: match_code},
      { $set: {log: match.log} });
  }
}

var joinMatchHandle = (socket, dispatchRoom, dispatch, db, user, match_code) => {
  LAST_DB = db;
  db.collection('matches').findOne({_id: match_code}, (err, match) => {
    if (!match || err) {
      return;
    }
    db.collection('users').find({_id: {$in: match.players}}, (err, players_cur) => {
      players_cur.toArray((err, all_players) => {
        try {
          let match_cache = cache.get(match_code);
          if (match_cache) {
            match.log = match_cache.log;
          }
          match.playersNickname = match.players.map((u_code) => {
            let users = all_players.filter((u) => { return u._id == u_code; });
            if (users.length == 1) {
              return users[0].nickname;
            } else {
              return u_code;
            }
          });
          let match_info = {
            code: match_code,
            players: match.players,
            playersNickname: match.playersNickname,
            loading: false,
            player: match.players.indexOf(user._id)
          };
          let state = {};
          if (match.log && match.log.length > 0) {
            // Match already exists / started
            state = match.log[0].state;
          } else {
            // Initialize match state
            state = genericReducer(match.game_code, undefined,
              match_info);
            match.log = [{state: state, action: match_info}];
            match.messages = [];
          }
          cache.put(match_code, match, CACHE_DURATION, saveAfterExpire);
          socket.join('match-' + match_code);
          dispatch({ type: 'MATCH_SET_STATE', payload: state });
          dispatch({ type: 'SET_MESSAGES', payload: match.messages || [] });
          dispatch({ type: 'SET_MATCH_INFO', payload: match_info });
        } catch (err) {
          console.error(err);
        }
      });
    });
  });
};

var leaveMatchHandle = (socket, dispatchRoom, dispatch, db, user, match_code) => {
  socket.leave('match-' + match_code);
};

var notifyToPlay = (db, user_id, game_code, match_code) => () => {
  db.collection('users').findOne({_id: user_id}, (err, user) => {
    try {
      if (!user || !user.pushSubscription)
        return;
      webpush.setVapidDetails('mailto:felizardow@gmail.com',
                                  vapidKeys.publicKey,
                                  vapidKeys.privateKey
                                 );
      let notificationData = JSON.stringify({action: 'PLAY',
        game: game_code,
        match_code: match_code});
      webpush.sendNotification(user.pushSubscription, notificationData);
    } catch (err) {
      console.error(err);
    }
  });
};

var matchActionRequest = (socket, dispatchRoom, dispatch, db, user, match_code, action) => {
  LAST_DB = db;
  let match = cache.get(match_code);
  if (!match) {
    db.collection('matches').findOne({_id: match_code}, (err, match_db) => {
      try {
        cache.put(match_code, match_db, CACHE_DURATION, saveAfterExpire);
        matchActionRequest(socket, dispatchRoom, dispatch, db, user, match_code,
          action);
      } catch (err) {
        console.error(err);
      }
    });
    return;
  }
  if (match.players.indexOf(user._id) == -1) { //User not in the match
    return;
  }
  action.player = match.players.indexOf(user._id);
  let current_state = match.log[0].state;
  let next_state = genericReducer(match.game_code, current_state, action);
  if (next_state && !_.isEqual(next_state, current_state)) {
    match.log.unshift({state: next_state, action: action});
    //We have a winner! Game is over, GG.
    if (next_state.winner != null) {
      match.status = 'FINISHED';
      match.winner = match.players[match.winner];
      LAST_DB.collection('matches').updateOne({_id: match_code},
        { $set: {status: match.status, winner: match.winner} });
    } else {
      if (match_code in NOTIFICATION_TIMERS) {
        clearTimeout(NOTIFICATION_TIMERS[match_code]);
      }
      let playerWhoseTurn = next_state.turn % match.players.length;
      NOTIFICATION_TIMERS[match_code] = setTimeout(notifyToPlay(db,
        match.players[playerWhoseTurn], match.game_code, match_code), 60 * 1000);
    }
    cache.put(match_code, match, CACHE_DURATION, saveAfterExpire);
    dispatchRoom('match-' + match_code, action);
  }
};

module.exports = { matchActionRequest, joinMatchHandle, leaveMatchHandle };
