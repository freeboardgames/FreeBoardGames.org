/* eslint-disable no-console */
import next from 'next';
import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import fs from 'fs';
import csurf from 'csurf';
import cookieParser from 'cookie-parser';
import { GAMES_LIST } from 'games';

const INTERNAL_BACKEND_TARGET = process.env.FBG_BACKEND_TARGET || 'http://localhost:3001';
const dev = process.env.NODE_ENV !== 'production';
const BABEL_ENV_IS_PROD = (process.env.BABEL_ENV || 'production') === 'production';
const APP_DIR = './';
const STATIC_DIR = APP_DIR + 'static/';

const PORT = process.env.SERVER_PORT || 3000;
const isProdChannel = process.env.CHANNEL === 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const csrfProtection = csurf({ cookie: true });

const excludedPaths = ['/_error', '/_document', '/_app', '/play'];

function isExcludedPath(path) {
  if (path.includes('[')) {
    return true;
  }
  if (excludedPaths.includes(path)) {
    return true;
  }
  if (path.endsWith('index')) {
    return true;
  }
}

const DOMAIN = 'www.freeboardgames.org';
const URL = 'https://' + DOMAIN;

function generateSiteMapXML(pagesManifest) {
  let pathsFromManifest = Object.keys(pagesManifest).reverse();
  const paths = ['/blog/'];
  for (const path of pathsFromManifest) {
    if (!isExcludedPath(path)) {
      paths.push(path);
    }
  }

  // games
  for (const game of GAMES_LIST) {
    paths.push(`/play/${game.code}`);
  }

  const urls = [];
  for (const path of paths) {
    urls.push(`<url><loc>${URL}${path}</loc></url>`);
  }

  const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('')}
</urlset>`;

  return sitemapXML.replace(/(\r\n|\n|\r)/gm, '');
}

if (!dev) {
  const sitemapXML = generateSiteMapXML(app.pagesManifest);
  fs.writeFileSync(`${STATIC_DIR}/sitemap.xml`, sitemapXML);
}

app
  .prepare()
  .then(() => {
    const server = express();
    server.disable('x-powered-by');
    server.use(cookieParser());

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
      if (isProdChannel && isOfficialSite(req.hostname)) {
        res.sendStatus(404);
      } else {
        const filePath = `${STATIC_DIR}/restrictiveRobots.txt`;
        app.serveStatic(req, res, filePath);
      }
    });

    server.get('/sw.js', (req, res) => {
      if (BABEL_ENV_IS_PROD) {
        const filePath = `${APP_DIR}/static/sw.js`;
        app.serveStatic(req, res, filePath);
      } else {
        res.sendStatus(404);
      }
    });

    server.get('/manifest.json', (req, res) => {
      if (isProdChannel && isOfficialSite(req.hostname)) {
        const filePath = `${APP_DIR}/static/manifest.json`;
        app.serveStatic(req, res, filePath);
      } else {
        res.sendStatus(404);
      }
    });

    server.get('/workbox*', (req, res) => {
      if (BABEL_ENV_IS_PROD) {
        const filePath = `${APP_DIR}/static/${req.path}`;
        app.serveStatic(req, res, filePath);
      } else {
        res.sendStatus(404);
      }
    });

    server.use(
      '/api',
      createProxyMiddleware({ target: INTERNAL_BACKEND_TARGET, changeOrigin: true, pathRewrite: { '^/api': '' } }),
    );

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
