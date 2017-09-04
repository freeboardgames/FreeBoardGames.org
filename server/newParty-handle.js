const shortid = require('shortid');

module.exports = (socket, dispatch, db, user, name) => {
  let partiesCollection = db.collection('parties');
  let party =  {
    _id: shortid.generate(),
    name: name,
    users: [ user._id ],
    downMapping: {}
  };
  partiesCollection.insert(party, (err) => {
    try {
      if (err) {
        dispatch({type: 'NEW_PARTY_ERROR', error: err});
      } else {
        dispatch({type: 'NEW_PARTY_SUCCESS', payload: {id: party._id}});
      }
    } catch (err) {
      console.error(err);
    }
  });
};
