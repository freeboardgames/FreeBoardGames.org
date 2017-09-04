const GAMES = require('./games.js');

module.exports = (socket, dispatch, db, user) => {
  if (user) {
    db.collection('matches').find({players:  { $in: [user._id]},
      status: 'ACTIVE'}).toArray((err, matches) => {
        let players = [];
        matches.map((m) => {
          players = players.concat(m.players);
        });
        db.collection('users').find({_id: {$in: players}},
        (err, players_cur) => {
          players_cur.toArray((err, all_players) => {
            matches.map((m) => {
              let playersNickname = [];
              m.players.map((p_id) => {
                all_players.map((p) => {
                  if (p._id == p_id) {
                    playersNickname.push(p.nickname);
                  }
                });
              });
              m.playersNickname = playersNickname;
              delete m.log;
            });
            dispatch({type: 'SET_MATCHES', matches});
          });
        });
      });

    db.collection('parties').find({users: { $in: [user._id]}})
      .toArray(function(err, parties) {

        var result = [];
        parties.map(function (party) {
          result.push({id: party._id, name: party.name});
        });
        dispatch({type: 'SET_PARTIES', parties});
      });
  }

  dispatch({type: 'SET_GAMES', games: GAMES.list});
};
