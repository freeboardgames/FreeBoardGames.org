const shortid = require('shortid');

module.exports = (socket, dispatch, db, user, name) => {
    let partiesCollection = db.collection('parties');
    let party =  {
        _id: shortid.generate(),
        name: name,
        users: [ user._id ],
        downMapping: {}
    };
    var result = partiesCollection.insert(party, (err) => {
        if (err) {
            dispatch({type: 'NEW_PARTY_ERROR', error: err});
        } else {
            dispatch({type: 'NEW_PARTY_SUCCESS', payload: {id: party._id}});
        }
    });
};
