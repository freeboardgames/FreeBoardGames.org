const validator = require('validator');
const turnatoLogin = require('./turnato-login.js');


module.exports = (db, req, res) => {
  var usersCollection = db.collection('users');
  var user = {email: req.body.email, password: req.body.password};
  var usersCur = usersCollection.find({email: user.email});
  usersCur.toArray((err, users) => {
    //NEW USER, REGISTER
    if (users.length == 0) {
      if (validator.isEmail(user.email)) {
        //Generate random password
        var pwd = randomstring.generate(10);
        //Save to the db
        user.password = turnatoLogin.hashPassword(pwd);
        usersCollection.insert(user);
        //Send email
        postmark.send({
            "From": "bot@turnato.com",
            "To": user.email,
            "Subject": "Welcome to Turnato",
            "TextBody": "A new Turnato account was created for you.\n" +
            "If you need to login from another device, " +
            "use the password below.\n\n" +
            "PASSWORD: " + pwd
        }, (error, success) => {
            if (error) {
                console.error("Unable to send postmark: " + error.message);
               return;
            }
            console.info("Sent to postmark for delivery")
        });
      } else {
        res.send(JSON.stringify({ type: 'LOGIN_ERROR',
                                  emailError: 'Invalid e-mail address.'}));
        return
      }
    //USER EXISTS
    } else {
      //PASSWORD PROVIDED
      if (user.password) {
        if (users[0].password != turnatoLogin.hashPassword(user.password)) {
          res.send(JSON.stringify({ type: 'LOGIN_ERROR',
                                    passwordError: 'Wrong password.'}));
          return
        } else {
          //Log in successful, keep going
          user = users[0];
        }
      //PASSWORD NOT PROVIDED
      } else {
        res.send(JSON.stringify({ type: 'LOGIN_ERROR',
                                  needsPassword: true}));
        return
      }
    };
    delete user.password;
    res.send(JSON.stringify({type: 'AUTH_SUCCESS',
                    payload: { token: turnatoLogin.jwtTokenize(user) }}));
  });
}
