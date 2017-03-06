const ObjectId = require('mongodb').ObjectId;

let partyHandle = (socket, dispatch, db, user, party_code) => {
  let handlePartyDb = (party, matches, games) => {
    let info = {name: party.name, users: party.users, code: party_code,
      loading: false};
    dispatch({type: 'SET_DOWN_MAPPING', downMapping: party.downMapping});
    dispatch({type: 'SET_GAMES', games});
    dispatch({type: 'SET_MATCHES', matches});
    dispatch({type: 'SET_INFO', info});
    socket.join('party-' + party._id)
  }
  //Do Mongo DB request
  db.collection('parties').findOne(ObjectId(party_code), (err, party) => {
    db.collection('matches').find({party_id:  ObjectId(party_code)})
      .toArray((err, matches) => {
      db.collection('games').find().toArray((err, games) => {
        handlePartyDb(party, matches, games);
      })
    })
  })
}

let downHandle = (socket, dispatch, db, user, party_code, game_code) => {
  db.collection('parties').findOne(ObjectId(party_code), (err, party) => {
    db.collection('games').findOne({code: game_code}, (err, game) => {
      let maxPlayers = game.maxPlayers;
      let downMapping = party.downMapping;
      if (party.users.indexOf(user.email) == -1) // User not in the party
        return;
      if (!(game_code in downMapping)) {
        downMapping[game_code] = [];
      }
      if (downMapping[game_code].indexOf(user.email) == -1) { //New player
        downMapping[game_code].push(user.email)
        if (downMapping[game_code].length == maxPlayers) {
          db.collection('matches').insertOne({party_id: ObjectId(party_code),
            game_code,
            game_name: game.name,
            status: 'ACTIVE',
            players: downMapping[game_code]
          }, (err, result) => {
            db.collection('matches').find({party_id:  ObjectId(party_code)})
              .toArray((err, matches) => {
                socket.emit('party-' + party._id,
                            {type: 'SET_MATCHES', matches});
            })
          })
          downMapping[game_code] = []
        } else {
          downMapping[game_code].push(user.email)
        }
        db.collection('parties').updateOne(ObjectId(party_code), party);
        socket.emit('party-' + party._id,
                    {type: 'SET_DOWN_MAPPING', downMapping: downMapping});
      } else { //Removing player
        downMapping[game].splice(downMapping[game].indexOf(user.email), 1)
      }
  })
})
}

module.exports = { partyHandle, downHandle }
