module.exports = (socket, dispatch, db, user, name) => {
  let partiesCollection = db.collection('parties');
  let party =  {
    name: name,
    users: [ user.email ],
    downMapping: {}
  };
  var result = partiesCollection.insert(party, (err) => {
    if (err) {
      dispatch({type: 'NEW_PARTY_ERROR', error: err});
    } else {
      dispatch({type: 'NEW_PARTY_SUCCESS', payload: {id: party._id}});
    }
  });
}
