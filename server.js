const next = require('next');
const express = require('express');
const { join } = require('path');
const { parse } = require('url');

const dev = process.env.NODE_ENV !== 'production';
const BABEL_ENV_IS_PROD = (process.env.BABEL_ENV || 'production') === 'production';
const APP_DIR = join(__dirname) + '/';
const STATIC_DIR = APP_DIR + 'static/';

const PORT = process.env.SERVER_PORT || 3000;
const isProdChannel = process.env.CHANNEL === 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    server.disable('x-powered-by');

    server.use('/blog', express.static(join(__dirname, 'blog/dist')));

    server.get('/robots.txt', (req, res) => {
      if (isProdChannel && req.hostname.toLowerCase() === 'freeboardgames.org') {
        res.sendStatus(404);
      } else {
        const filePath = `${STATIC_DIR}/restrictiveRobots.txt`;
        app.serveStatic(req, res, filePath);
      }
    });

    server.get('/sw.js', (req, res) => {
      if (BABEL_ENV_IS_PROD) {
        const filePath = `${APP_DIR}/.next/service-worker.js`;
        app.serveStatic(req, res, filePath);
      } else {
        res.sendStatus(404);
      }
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, err => {
      if (err) {
        throw err;
      }

      console.log(`Listening on http://0.0.0.0:${PORT}`);
    });
  })
  .catch(e => {
    console.error(e.stack);
    process.exit(1);
  });
