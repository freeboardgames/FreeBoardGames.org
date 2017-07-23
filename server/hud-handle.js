sendMessageHandle = (socket, dispatchRoom, dispatch, db, user, match_code, action) => {
  db.collection('matches').findOne({_id: match_code}, (err, match) => {
    if (match.players.indexOf(user._id) == -1) { //User not in the match
      return;
    }
    action.payload.player = match.players.indexOf(user._id);
    dispatchRoom('match-' + match_code, action);
    if (!match.messages) {
      match.messages = [];
    }
    match.messages.push(action.payload);
    db.collection('matches').updateOne({_id: match_code},
      { $set: {messages: match.messages} },
    (err, results) => {
      if (err)
        console.log(err)
    });
  })
}

savePushSubscriptionHandle = (socket, dispatchRoom, dispatch, db, user, action) => {
  user.pushSubscription = action.payload;
  console.log('SAVE PUSH SUBSCRIPTION FOR USER ' + user._id);
  db.collection('users').updateOne({_id: user._id},
    { $set: {pushSubscription: user.pushSubscription} },
  (err, results) => {
    if (err)
      console.log(err)
  });
}

module.exports = { sendMessageHandle, savePushSubscriptionHandle }
