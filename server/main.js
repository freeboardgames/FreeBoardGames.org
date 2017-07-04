const compression = require('compression')
const express = require('express')
const debug = require('debug')('app:server')
const webpack = require('webpack')
const mongo = require('mongodb')
const webpackConfig = require('../build/webpack.config')
const config = require('../config')
const bodyParser = require('body-parser')
const loginHandle = require('./login-handle.js')
const ioHandle = require('./io-handle.js')
const socketIO = require('socket.io');

const app = express()
const paths = config.utils_paths


const port = config.server_port
const MONGO_URI = process.env.MONGODB_URI ||
                  'mongodb://localhost/turnato';
const PRIVATE_KEY_PUSH = '***REMOVED***';
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

app.get('*', (req,res) => {
  res.sendFile('index.html', {root: paths.dist()});
});

const http = app.listen(port)

const io = socketIO(http)

io.on('connection', (socket) => {
  let dispatch = (message) => {
    socket.emit('socketIoMiddleware', message)
  }
  let dispatchRoom = (room, message, include_self=false) => {
    if (include_self) {
      socket.emit('socketIoMiddleware', message)
    }
    socket.broadcast.to(room).emit('socketIoMiddleware', message)
  }
  mongo.MongoClient.connect(MONGO_URI, (err, db) => {
    if (err) {
      console.log('ERROR CONNECTING TO MONGO');
      return
    }
    ioHandle(db, socket, dispatchRoom, dispatch)
  });
});

debug(`Server is now running at http://localhost:${port}.`)
