const turnatoLogin = require('./turnato-login.js');

module.exports = (db, req, res) => {
  //Check for login
  var user = turnatoLogin.getLoggedUser(req.query.token);
  if (!user) { res.status(400).send(); return }
  //Login OK
  var partiesCollection = db.collection('parties');
  var partiesCur = partiesCollection.find({users: { $in: [user.email]}});
  partiesCur.toArray(function(err, parties) {
    var result = [];
    parties.map(function (party) {
      result.push({id: party._id, name: party.name});
    });
    res.send(JSON.stringify({type: 'PARTIES_RESULT',
                    result: result}));
  });

}
