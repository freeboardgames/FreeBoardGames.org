import fs from 'fs';
import { IGameStatus } from 'gamesShared/definitions/game';
import { getAllGames } from 'infra/game';
import { i18n } from 'server/config/i18n';
import { template } from './sitemap.template';
import { Manifest, Url } from './types';

export const generateSiteMapXML = (options: { manifest: Manifest; staticDir: string; host: string }) => {
  if (isDevelopment()) return;

  const paths = [...getManifestPaths(options.manifest), ...getGamesPaths()];
  const urls = createUrlTags(options.host, paths);
  const xml = buildTemplateWith(urls);
  const sanitizedXml = sanitize(xml);
  writeOnDisk(options.staticDir, sanitizedXml);
};

function isDevelopment() {
  return process.env.NODE_ENV !== 'production';
}

function getManifestPaths(manifest: Manifest): string[] {
  const paths = [];
  const pathsFromManifest = Object.keys(manifest).reverse();
  for (const path of pathsFromManifest) {
    if (!isExcludedPath(path)) {
      i18n.locales.forEach((language) => {
        paths.push(`/${language}${path}`);
      });
    }
  }
  return paths;
}

function isExcludedPath(path) {
  const excludedPaths = ['/_error', '/_document', '/_app', '/play'];
  return path.includes('[') || excludedPaths.includes(path) || path.endsWith('index');
}

function getGamesPaths(): string[] {
  const paths = new Set<string>();
  const games = getAllGames();
  for (const game of games) {
    if (game.status === IGameStatus.IN_DEVELOPMENT) {
      continue;
    }

    i18n.locales.forEach((language) => {
      paths.add(`/${language}/play/${game.codes?.[language] || game.code}`);
    });
  }
  return Array.from(paths);
}

function createUrlTags(host: string, paths: string[]): Url[] {
  const urls: Url[] = [];
  for (const path of paths) {
    urls.push({ host, path });
  }
  return urls;
}

function buildTemplateWith(urls: Url[]): string {
  const xml = template(urls);
  return xml;
}

function sanitize(xml: string) {
  return xml
    .replace(/(\r\n|\n|\r)/gm, '')
    .replace(/>\s*/g, '>')
    .replace(/\s*</g, '<')
    .trim();
}

function writeOnDisk(staticDir: string, xml: string) {
  fs.writeFileSync(`${staticDir}/sitemap.xml`, xml);
}
