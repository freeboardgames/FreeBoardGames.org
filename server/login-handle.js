const validator = require('validator');
const turnatoLogin = require('./turnato-login.js');
const randomstring    = require('randomstring');
const sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
const sg_helper = require('sendgrid').mail;

module.exports = (socket, dispatch, db, email, password) => {
  var usersCollection = db.collection('users');
  var user = {email, password};
  var usersCur = usersCollection.find({email: user.email});
  usersCur.toArray((err, users) => {
    //NEW USER, REGISTER
    if (users.length == 0) {
      if (validator.isEmail(user.email)) {
        //Generate random password
        var pwd = randomstring.generate(10);

        //Send email
        var from_email = new sg_helper.Email('bot@turnato.com');
        var to_email = new sg_helper.Email(user.email);
        var subject = 'Welcome to Turnato';
        var content = new sg_helper.Content('text/plain',
        "A new Turnato account was created for you.\n" +
        "If you need to login from another device, " +
        "use the password below.\n\n" +
        "PASSWORD: " + pwd);
        var mail = new sg_helper.Mail(from_email, subject, to_email, content);
        var request = sg.emptyRequest({
          method: 'POST',
          path: '/v3/mail/send',
          body: mail.toJSON(),
        });

        sg.API(request, (error, response) => {
          if (error) {
            console.error('Unable to send e-mail, account cancel: ' +
              error.response.statusCode);
            dispatch({ type: 'LOGIN_ERROR', emailError: 'Internal error.'});
            return
          } else {
            //Save to the db
            user.password = turnatoLogin.hashPassword(pwd);
            usersCollection.insert(user);
            delete user.password;
            dispatch({type: 'AUTH_SUCCESS', payload: {
                token: turnatoLogin.jwtTokenize(user)
              }});
          }
        });
      } else {
        dispatch({ type: 'LOGIN_ERROR', emailError: 'Invalid e-mail address.'});
        return
      }
    //USER EXISTS
    } else {
      //PASSWORD PROVIDED
      if (user.password) {
        if (users[0].password != turnatoLogin.hashPassword(user.password)) {
          dispatch({ type: 'LOGIN_ERROR', passwordError: 'Wrong password.'});
          return
        } else {
          //Log in successful, keep going
          user = users[0];
        }
      //PASSWORD NOT PROVIDED
      } else {
        dispatch({ type: 'LOGIN_ERROR', needsPassword: true});
        return
      }
    };
  });
}
