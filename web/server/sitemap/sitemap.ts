import fs from 'fs';
import { GAMES_LIST } from 'games';
import { IGameStatus } from 'gamesShared/definitions/game';
import { template } from './sitemap.template';
import { Manifest, Url } from './types';

export const generateSiteMapXML = (options: { manifest: Manifest; staticDir: string; host: string }) => {
  const paths = [...getManifestPaths(options.manifest), ...getGamesPaths()];
  const urls = createUrlTags(options.host, paths);
  const xml = buildTemplateWith(urls);
  const sanitizedXml = sanitize(xml);
  writeOnDisk(options.staticDir, sanitizedXml);
};

function getManifestPaths(manifest: Manifest): string[] {
  const paths = [];
  const pathsFromManifest = Object.keys(manifest).reverse();
  for (const path of pathsFromManifest) {
    if (!isExcludedPath(path)) {
      paths.push(path);
    }
  }
  return paths;
}

function isExcludedPath(path) {
  const excludedPaths = ['/_error', '/_document', '/_app', '/play'];
  return path.includes('[') || excludedPaths.includes(path) || path.endsWith('index');
}

function getGamesPaths(): string[] {
  const paths = [];
  for (const game of GAMES_LIST) {
    if (game.status === IGameStatus.IN_DEVELOPMENT) {
      continue;
    }
    paths.push(`/play/${game.code}`);
  }
  return paths;
}

function createUrlTags(host: string, paths: string[]): Url[] {
  const urls: Url[] = [];
  for (const path of paths) {
    urls.push({ host, language: '/en', path });
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
