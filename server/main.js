const compression = require('compression')
const express = require('express')
const debug = require('debug')('app:server')
const webpack = require('webpack')
const mongo = require('mongodb')
const webpackConfig = require('../build/webpack.config')
const config = require('../config')
const bodyParser = require('body-parser')
const validator = require('validator');
const crypto = require('crypto');
const jwt    = require('jsonwebtoken');
const randomstring    = require('randomstring');
const postmark = require("postmark")(process.env.POSTMARK_API_TOKEN)

const app = express()
const paths = config.utils_paths



const MONGO_URI = process.env.MONGODB_URI ||
                  'mongodb://localhost/turnato';
const JWT_TOKEN_SECRET = process.env.JWT_TOKEN_SECRET ||
                         'zwxnizRjZ99hLsgris6k';

app.use(compression())
app.use( bodyParser.json() );
// This rewrites all routes requests to the root /index.html file
// (ignoring file requests). If you want to implement universal
// rendering, you'll want to remove this middleware.
//app.use(require('connect-history-api-fallback')())

// ------------------------------------
// Apply Webpack HMR Middleware
// ------------------------------------
if (config.env === 'development') {
  const compiler = webpack(webpackConfig)

  debug('Enable webpack dev and HMR middleware')
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath  : webpackConfig.output.publicPath,
    contentBase : paths.client(),
    hot         : true,
    quiet       : config.compiler_quiet,
    noInfo      : config.compiler_quiet,
    lazy        : false,
    stats       : config.compiler_stats
  }))
  app.use(require('webpack-hot-middleware')(compiler))

  // Serve static assets from ~/src/static since Webpack is unaware of
  // these files. This middleware doesn't need to be enabled outside
  // of development since this directory will be copied into ~/dist
  // when the application is compiled.
  app.use(express.static(paths.client('static')))
}
app.use(express.static(paths.dist()))

var hashPassword = (pwd) => {
  var saltedPassword = 'turnato_sault_'+pwd;
  return crypto.createHash('sha256').update(saltedPassword).digest('base64');
};

var jwtTokenize = (payload) => {
  return jwt.sign(payload, JWT_TOKEN_SECRET, {
    expiresIn: 60*60*24*365
  });
};

app.get('/api/parties', (req, res) => {
  mongo.MongoClient.connect(MONGO_URI, (err, db) => {
    //Check for DB
    if (err) {
      console.log('ERROR CONNECTING TO MONGO');
      res.send('ERROR CONNECTING TO DB');
      return;
    }
    //Check for login
    var jwt_token = req.query.token;
    try {
      var user = jwt.verify(jwt_token, JWT_TOKEN_SECRET);
    } catch (err) {
      console.log('ERROR DECODING JWT: ' + err);
      res.send('ERROR INVALID JWT');
      return;
    }
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

  });
});

app.post('/api/login', (req, res) => {
  mongo.MongoClient.connect(MONGO_URI, (err, db) => {
    if (err) {
      console.log('ERROR CONNECTING TO MONGO');
      return;
    }

    var usersCollection = db.collection('users');
    var user = {email: req.body.email, password: req.body.password};
    var usersCur = usersCollection.find({email: user.email});
    usersCur.toArray(function(err, users) {
      //NEW USER, REGISTER
      if (users.length == 0) {
        if (validator.isEmail(user.email)) {
          //Generate random password
          var pwd = randomstring.generate(10);
          //Save to the db
          user.password = hashPassword(pwd);
          usersCollection.insert(user);
          //Send email
          postmark.send({
              "From": "bot@turnato.com",
              "To": user.email,
              "Subject": "Welcome to Turnato",
              "TextBody": "A new Turnato account was created for you.\n" +
              "If you need to login from another device, use the password below.\n\n" +
              "PASSWORD: " + pwd
          }, function(error, success) {
              if(error) {
                  console.error("Unable to send via postmark: " + error.message);
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
          if (users[0].password != hashPassword(user.password)) {
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
                      payload: { token: jwtTokenize(user) }}));
    });
  });
});

app.get('*', (req,res) => {
  res.sendFile('index.html', {root: paths.dist()});
});

module.exports = app
