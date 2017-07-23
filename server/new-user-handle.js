const shortid = require('shortid');
const validator = require('validator');
const turnatoLogin = require('./turnato-login.js');
const randomstring    = require('randomstring');
const sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
const sg_helper = require('sendgrid').mail;

module.exports = (socket, dispatch, db, nickname) => {
  var usersCollection = db.collection('users');
  var user = {_id: shortid.generate(), nickname};
  if (!nickname || nickname.length == 0 || nickname.length > 15)
    return;
  //Save to the db
  usersCollection.insert(user, (err, new_user) => {
    dispatch({type: 'AUTH_SUCCESS', payload: {
      token: turnatoLogin.jwtTokenize(new_user.ops[0])
    }});
  });
}
