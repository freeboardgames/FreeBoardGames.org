const ObjectId = require('mongodb').ObjectId;
const turnatoLogin = require('./turnato-login.js');

var ioHandle = (mongo, mongo_uri) => (socket) => {
  console.log('Client connected');
  var user = null;
  socket.on('login', (token) => {
    user = turnatoLogin.getLoggedUser(token);
  });
  socket.on('listen-party', (party_code) => {
    if (!user) return
    let handlePartyDb = (party, matches, games) => {
      let info = {name: party.name, users: party.users, code: party_code,
        loading: false};
      socket.emit('party', {type: 'SET_DOWN_MAPPING',
                            downMapping: party.downMapping});
      socket.emit('party', {type: 'SET_GAMES', games});
      socket.emit('party', {type: 'SET_MATCHES', matches});
      socket.emit('party', {type: 'SET_INFO', info});
      socket.join('party-' + party._id)
    }
    //Do Mongo DB request
    let db = mongo.connect(mongo_uri, (err, db) => {
      db.collection('parties').findOne(ObjectId(party_code), (err, party) => {
        db.collection('matches').find({party_id:  ObjectId(party_code)})
          .toArray((err, matches) => {
          db.collection('games').find().toArray((err, games) => {
            handlePartyDb(party, matches, games);
          })
        })
      })
    });
  })
  socket.on('disconnect', () => console.log('Client disconnected'));
}

module.exports = ioHandle
