module.exports = (socket, dispatch, db, user) => {
  var partiesCollection = db.collection('parties');
  var partiesCur = partiesCollection.find({users: { $in: [user.email]}});
  partiesCur.toArray(function(err, parties) {
    var result = [];
    parties.map(function (party) {
      result.push({id: party._id, name: party.name});
    });
    dispatch({type: 'PARTIES_RESULT', result: result});
  });
}
