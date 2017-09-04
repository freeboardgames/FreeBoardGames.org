const shortid = require('shortid');
const GAMES = require('./games.js');

let joinPartyHandle = (socket, dispatchRoom, dispatch, db, user, party_code) => {
  let handlePartyDb = (party, matches, games, all_users, current_user, new_user) => {
    let users_nickname = party.users.map((u_code) => {
      return all_users.filter((u) => { return u._id == u_code; })[0].nickname;
    });
    let info = {name: party.name, users: party.users, currentUser: current_user,
      code: party_code, loading: false, usersNickname: users_nickname };
    dispatch({type: 'SET_DOWN_MAPPING', downMapping: party.downMapping});
    dispatch({type: 'SET_GAMES', games});
    dispatch({type: 'SET_MATCHES', matches});
    let set_info_message = {type: 'SET_INFO', info};
    dispatch(set_info_message);
    socket.join('party-' + party._id);
    if (new_user) {
      dispatchRoom('party-' + party._id,
                   set_info_message);
    }
  };
  //Do Mongo DB request
  db.collection('parties').findOne({_id: party_code}, (err, party) => {
    if (!party)
      return;
    let new_user = false;
    let current_user = party.users.indexOf(user._id);
    if (current_user == -1) {
      new_user = true;
      current_user = party.users.length;
      party.users.push(user._id);
      db.collection('parties').save(party);
    }
    db.collection('users').find({_id: {$in: party.users}}, (err, users_cur) => {
      users_cur.toArray((err, all_users) => {
        db.collection('matches').find({party_id:  party_code,
          status: 'ACTIVE'})
          .toArray((err, matches) => {
            let games = GAMES.list;
            handlePartyDb(party, matches, games, all_users, current_user, new_user);
          });
      });
    });
  });
};

let leavePartyHandle = (socket, dispatchRoom, dispatch, db, user, party_code) => {
  socket.leave('party-' + party_code);
};

let downHandle = (socket, dispatchRoom, dispatch, db,
                  user, party_code, game_code) => {
  db.collection('parties').findOne({_id: party_code}, (err, party) => {
    let game = GAMES.map[game_code];
    let maxPlayers = game.maxPlayers;
    let downMapping = party.downMapping;
    if (party.users.indexOf(user._id) == -1) // User not in the party
      return;
    if (!(game_code in downMapping)) {
      downMapping[game_code] = [];
    }
    if (downMapping[game_code].indexOf(user._id) == -1) { //New player
      downMapping[game_code].unshift(user._id);
      if (downMapping[game_code].length == maxPlayers) {
        db.collection('matches').insertOne({party_id: party_code,
          _id: shortid.generate(),
          game_code,
          game_name: game.name,
          status: 'ACTIVE',
          players: downMapping[game_code]
        }, () => {
          db.collection('matches').find({party_id:  party_code,
            status: 'ACTIVE'})
            .toArray((err, matches) => {
              dispatchRoom('party-' + party._id,
                           {type: 'SET_MATCHES', matches}, true);
            });
        });
        downMapping[game_code] = [];
      }
    } else { //Removing player
      downMapping[game_code].splice(
        downMapping[game_code].indexOf(user._id), 1);
    }

    db.collection('parties').updateOne({_id: party_code},
      { $set: {downMapping: downMapping} });
    dispatchRoom('party-' + party._id,
                 {type: 'SET_DOWN_MAPPING', downMapping: downMapping}, true);
  });
};

module.exports = { joinPartyHandle, leavePartyHandle, downHandle };
