const next = require('next');
const express = require('express');
const { join } = require('path');
const fs = require('fs');
const { parse } = require('url');

const dev = process.env.NODE_ENV !== 'production';
const BABEL_ENV_IS_PROD = (process.env.BABEL_ENV || 'production') === 'production';
const APP_DIR = join(__dirname) + '/';
const STATIC_DIR = APP_DIR + 'static/';

const PORT = process.env.SERVER_PORT || 3000;
const isProdChannel = process.env.CHANNEL === 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const excludedPaths = ['/_error', '/_document', '/_app'];

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

const domain = 'https://www.freeboardgames.org';

function generateSiteMapXML(pagesManifest) {
  let pathsFromManifest = Object.keys(pagesManifest).reverse();
  const paths = [];
  for (const path of pathsFromManifest) {
    if (!isExcludedPath(path)) {
      paths.push(path);
    }
  }

  const urls = [];
  for (const path of paths) {
    urls.push(`<url><loc>${domain}${path}</loc></url>`);
  }

  const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('')}
</urlset>`;

  return sitemapXML.replace(/(\r\n|\n|\r)/gm, '');
}

const sitemapXML = generateSiteMapXML(app.pagesManifest);
fs.writeFileSync(`${STATIC_DIR}/sitemap.xml`, sitemapXML);

app
  .prepare()
  .then(() => {
    const server = express();
    server.disable('x-powered-by');

    server.use('/blog', express.static(join(__dirname, 'blog/dist')));

    server.get('/sitemap.xml', (req, res) => {
      if (isProdChannel && req.hostname.toLowerCase() === 'www.freeboardgames.org') {
        const filePath = `${STATIC_DIR}/sitemap.xml`;
        app.serveStatic(req, res, filePath);
      } else {
        res.sendstatus(404);
      }
    });

    server.get('/robots.txt', (req, res) => {
      if (isProdChannel && req.hostname.toLowerCase() === 'www.freeboardgames.org') {
        res.sendstatus(404);
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
