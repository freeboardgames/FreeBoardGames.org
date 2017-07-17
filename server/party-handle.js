const ObjectId = require('mongodb').ObjectId;

let joinPartyHandle = (socket, dispatchRoom, dispatch, db, user, party_code) => {
  let handlePartyDb = (party, matches, games) => {
    let new_user = false;
    if (party.users.indexOf(user._id) == -1) {
      new_user = true;
      //TODO(felizardo) show nickname instead
      party.users.push(user._id);
    }
    let info = {name: party.name, users: party.users, code: party_code,
      loading: false};
    dispatch({type: 'SET_DOWN_MAPPING', downMapping: party.downMapping});
    dispatch({type: 'SET_GAMES', games});
    dispatch({type: 'SET_MATCHES', matches});
    let set_info_message = {type: 'SET_INFO', info};
    dispatch(set_info_message);
    socket.join('party-' + party._id)
    if (new_user) {
      dispatchRoom('party-' + party._id,
                   set_info_message);
    }
  }
  //Do Mongo DB request
  db.collection('parties').findOne(ObjectId(party_code), (err, party) => {
    db.collection('matches').find({party_id:  ObjectId(party_code),
                                   status: 'ACTIVE'})
      .toArray((err, matches) => {
      db.collection('games').find().toArray((err, games) => {
        handlePartyDb(party, matches, games);
        db.collection('parties').save(party);
      })
    })
  })
}

let leavePartyHandle = (socket, dispatchRoom, dispatch, db, user, party_code) => {
  socket.leave('party-' + party_code)
}

let downHandle = (socket, dispatchRoom, dispatch, db,
                  user, party_code, game_code) => {
  db.collection('parties').findOne({_id: ObjectId(party_code)}, (err, party) => {
    db.collection('games').findOne({code: game_code}, (err, game) => {
      let maxPlayers = game.maxPlayers;
      let downMapping = party.downMapping;
      if (party.users.indexOf(user._id) == -1) // User not in the party
        return;
      if (!(game_code in downMapping)) {
        downMapping[game_code] = [];
      }
      if (downMapping[game_code].indexOf(user._id) == -1) { //New player
        downMapping[game_code].unshift(user._id)
        if (downMapping[game_code].length == maxPlayers) {
          db.collection('matches').insertOne({party_id: ObjectId(party_code),
            game_code,
            game_name: game.name,
            status: 'ACTIVE',
            players: downMapping[game_code]
          }, (err, result) => {
            db.collection('matches').find({party_id:  ObjectId(party_code),
                                           status: 'ACTIVE'})
              .toArray((err, matches) => {
                dispatchRoom('party-' + party._id,
                             {type: 'SET_MATCHES', matches}, true);
            })
          })
          downMapping[game_code] = []
        }
      } else { //Removing player
        downMapping[game_code].splice(
          downMapping[game_code].indexOf(user._id), 1)
      }

      db.collection('parties').updateOne({_id: ObjectId(party_code)},
        { $set: {downMapping: downMapping} },
      (err, results) => {
        if (err)
          console.log(err)
      });
      dispatchRoom('party-' + party._id,
                   {type: 'SET_DOWN_MAPPING', downMapping: downMapping}, true);
  })
})
}

module.exports = { joinPartyHandle, leavePartyHandle, downHandle }
