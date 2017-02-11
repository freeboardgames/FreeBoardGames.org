const compression = require('compression')
const express = require('express')
const debug = require('debug')('app:server')
const webpack = require('webpack')
const mongo = require('mongodb')
const webpackConfig = require('../build/webpack.config')
const config = require('../config')
const bodyParser = require('body-parser')
const loginHandle = require('./login-handle.js')
const partiesHandle = require('./parties-handle.js')
const randomstring    = require('randomstring');
const postmark = require("postmark")(process.env.POSTMARK_API_TOKEN)
const socketIO = require('socket.io');

const app = express()
const paths = config.utils_paths


const port = config.server_port
const MONGO_URI = process.env.MONGODB_URI ||
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


app.get('/api/parties', (req, res) => {
  mongo.MongoClient.connect(MONGO_URI, (err, db) => {
    if (err) {
      console.log('ERROR CONNECTING TO MONGO');
      res.status(500).send()
      return
    }
    partiesHandle(db, req, res)
  })
});

app.post('/api/login', (req, res) => {
  mongo.MongoClient.connect(MONGO_URI, (err, db) => {
    if (err) {
      console.log('ERROR CONNECTING TO MONGO');
      res.status(500).send()
      return
    }
    loginHandle(db, req, res)
  })
});

app.get('*', (req,res) => {
  res.sendFile('index.html', {root: paths.dist()});
});

const http = app.listen(port)
debug(`Server is now running at http://localhost:${port}.`)

const io = socketIO(http)

io.on('connection', (socket) => {
  console.log('Client connected');

  let info = {loading: false, code: 'UEHueoajeokaw', name: "Mermões",
               members: ["felizardow", "rafaelplonghi", "vitorpfr", "curvorj"]}
  let matches = [{id: 'awjdjdaw', game_code: 'checkers', game_name: "Checkers",
                  status: "Going on", players: ["felizardow", "vitorpfr"]},
                 {id: 'poqweqep', game_code: 'chess', game_name: "Chess",
                  status: "Finished", players: ["rafaelplonghi", "curvorj"]}]
  let games = [{code: 'chess', name: 'Chess', maxPlayers: 2},
               {code: 'checkers', name: 'Checkers', maxPlayers: 2}]
  let downMapping = {'chess': ['vitorpfr'], 'checkers': ['felizardow']}
  socket.emit('party', {type: 'SET_DOWN_MAPPING', downMapping});
  socket.emit('party', {type: 'SET_GAMES', games});
  //socket.emit('party', {type: 'SET_MATCHES', matches});
  socket.emit('party', {type: 'SET_INFO', info});
  socket.on('disconnect', () => console.log('Client disconnected'));
});
