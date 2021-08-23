import { UrlTag, AlternateLink } from './types';

export const encodeSitemap = (urls: UrlTag[], host: string) => {
  const xml = buildTemplateWith(urls, host);
  return sanitize(xml);
};

const buildAlternateLinkWith = (host: string) => (alternateLink: AlternateLink) => {
  return `<link rel="alternate" hreflang="${alternateLink.hreflang}" href="${host}${alternateLink.href}" />`;
};

const buildUrlWith = (host: string) => (url: UrlTag): string => {
  return `
    <url>
      <loc>
        ${host}${url.loc}
      </loc>
      ${url.alternateLinks.map(buildAlternateLinkWith(host)).join('\n')}
    </url>`;
};

function buildTemplateWith(urls: UrlTag[], host: string): string {
  return `
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.map(buildUrlWith(host)).join('\n')}
  </urlset>`;
}

function sanitize(xml: string) {
  return xml
    .replace(/(\r\n|\n|\r)/gm, '')
    .replace(/>\s*/g, '>')
    .replace(/\s*</g, '<')
    .trim();
}
