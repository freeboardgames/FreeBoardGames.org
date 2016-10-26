const compression = require('compression')
const express = require('express')
const debug = require('debug')('app:server')
const webpack = require('webpack')
const mongo = require('mongodb')
const webpackConfig = require('../build/webpack.config')
const config = require('../config')
const bodyParser = require('body-parser')

const app = express()
const paths = config.utils_paths



const MONGO_URI = process.env.MONGOLAB_URI ||
                  process.env.MONGOHQ_URL ||
                  'mongodb://localhost/turnato';

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


app.post('/api/login', (req, res) => {
  mongo.MongoClient.connect(MONGO_URI, (err, db) => {
    if (err) {
      console.log('ERROR CONNECTING TO MONGO');
      return;
    }

    var usersCollection = db.collection('users');
    var usersCur = usersCollection.find({email: req.body.email});
    usersCur.toArray(function(err, users) {
      //USER EXISTS
      if (users.length == 1) {
        //PASSWORD PROVIDED
        if (req.body.password) {
          console.log('TODO: RETURN USER LOGGED IN');
          res.send(JSON.stringify({ type: 'LOGIN_ERROR', passwordError: 'NEW PASSWORD'}));
        //PASSWORD NOT PROVIDED
        } else {
          res.send(JSON.stringify({ type: 'LOGIN_ERROR', needsPassword: true}));
        }
      //NEW USER, REGISTER
      } else if (users.length == 0) {
        res.send(JSON.stringify({ type: 'LOGIN_ERROR', emailError: 'NEW EMAIL'}));
        console.log('TODO: CREATE NEW USER');
      //SOME WEIRD PROBLEM
      } else {
        console.log('MORE THAN ONE USER ALREADY SIGNED UP !?!?!?!');
        res.send(JSON.stringify({ type: 'LOGIN_ERROR', emailError: 'INTERNAL ERROR'}));
      };
    });
  });

});

app.get('*', (req,res) => {
  res.sendFile('index.html', {root: paths.dist()});
});

module.exports = app
