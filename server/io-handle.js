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
    let db = mongo.connect(mongo_uri, (err, db) => {
      let partiesCollection = db.collection('parties');
      partiesCollection.findOne(ObjectId(party_code), (err, party) => {
        let info = {name: party.name, users: party.users,
          code: party_code, loading: false}
        let matches = [{id: 'awjdjdaw', game_code: 'checkers', game_name: "Checkers",
                        status: "Going on", players: ["felizardow", "vitorpfr"]},
                       {id: 'poqweqep', game_code: 'chess', game_name: "Chess",
                        status: "Finished", players: ["rafaelplonghi", "curvorj"]}]
        let games = [{code: 'chess', name: 'Chess', maxPlayers: 2},
                     {code: 'checkers', name: 'Checkers', maxPlayers: 2}]
        let downMapping = {'chess': ['vitorpfr'], 'checkers': ['felizardow']}
        socket.emit('party', {type: 'SET_DOWN_MAPPING', downMapping});
        socket.emit('party', {type: 'SET_GAMES', games});
        socket.emit('party', {type: 'SET_MATCHES', matches});
        socket.emit('party', {type: 'SET_INFO', info});
      })
    });
  })
  socket.on('disconnect', () => console.log('Client disconnected'));
}

module.exports = ioHandle
