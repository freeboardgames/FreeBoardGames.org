module.exports = (socket, dispatch, db, code) => {
  db.collection('games').findOne({code: code}, (err, game) => {
    dispatch({type: 'SET_GAME_INFO', payload: game});
  });
}
