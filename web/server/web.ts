/* eslint-disable no-console */
import 'dotenv/config';
import next from 'next';
import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import csurf from 'csurf';
import cookieParser from 'cookie-parser';
import { setupLogging } from './logging';
import { generateSiteMapXML } from './sitemap';

const INTERNAL_BACKEND_TARGET = process.env.FBG_BACKEND_TARGET || 'http://localhost:3001';
const dev = process.env.NODE_ENV !== 'production';
const BABEL_ENV_IS_PROD = (process.env.BABEL_ENV || 'production') === 'production';
const APP_DIR = './';
const STATIC_DIR = APP_DIR + 'public/static/';

const PORT = process.env.SERVER_PORT || 3000;
const isProdChannel = process.env.CHANNEL === 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const csrfProtection = csurf({ cookie: true });

const DOMAIN = 'www.freeboardgames.org';
const URL = 'https://' + DOMAIN;

generateSiteMapXML({
  manifest: app.pagesManifest,
  host: URL,
  staticDir: STATIC_DIR,
});

app
  .prepare()
  .then(() => {
    const server = express();
    server.disable('x-powered-by');
    server.use(cookieParser());
    setupLogging(server, 'fbg-web');

    server.get('/.well-known/assetlinks.json', (req, res) => {
      if (isProdChannel && isOfficialSite(req.hostname)) {
        const filePath = `${STATIC_DIR}/.well-known/assetlinks.json`;
        app.serveStatic(req, res, filePath);
      } else {
        res.sendStatus(404);
      }
    });

    server.get('/sitemap.xml', (req, res) => {
      if (isProdChannel && isOfficialSite(req.hostname)) {
        const filePath = `${STATIC_DIR}/sitemap.xml`;
        app.serveStatic(req, res, filePath);
      } else {
        res.sendStatus(404);
      }
    });

    server.get('/robots.txt', (req, res) => {
      let filePath: string;
      if (isProdChannel && isOfficialSite(req.hostname)) {
        filePath = `${STATIC_DIR}/prodRobots.txt`;
      } else {
        filePath = `${STATIC_DIR}/restrictiveRobots.txt`;
      }
      app.serveStatic(req, res, filePath);
    });

    server.get('/sw.js', (req, res) => {
      if (BABEL_ENV_IS_PROD) {
        const filePath = `${STATIC_DIR}/sw.js`;
        app.serveStatic(req, res, filePath);
      } else {
        res.sendStatus(404);
      }
    });

    server.get('/manifest.json', (req, res) => {
      const filePath = `${STATIC_DIR}/manifest.json`;
      app.serveStatic(req, res, filePath);
    });

    server.get('/blog*', (req, res) => {
      res.redirect(301, '/docs');
    });

    server.use('/docs', express.static(`${STATIC_DIR}/docs`));

    server.use('/graphql', createProxyMiddleware({ target: INTERNAL_BACKEND_TARGET, changeOrigin: true }));

    server.get('*', csrfProtection, (req, res) => {
      res.cookie('XSRF-TOKEN', (req as any).csrfToken());
      return handle(req, res);
    });

    server.listen(PORT, () => {
      console.log(`Listening on http://0.0.0.0:${PORT}`);
    });
  })
  .catch((e) => {
    console.error(e.stack);
    process.exit(1);
  });

function isOfficialSite(rawHostname: string) {
  const hostname = rawHostname.toLowerCase();
  const officialSite = hostname === DOMAIN;
  return officialSite;
}
