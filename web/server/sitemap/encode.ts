import { UrlTag, AlternateLink } from './types';

export const encodeSitemap = (urls: UrlTag[], host: string) => {
  return buildTemplateWith(urls, host);
};

const buildAlternateLinkWith = (host: string) => (alternateLink: AlternateLink) => {
  return `<xhtml:link rel="alternate" hreflang="${alternateLink.hreflang}" href="${host}${alternateLink.href}" />`;
};

const buildUrlWith = (host: string) => (url: UrlTag): string => {
  return `
    <url>
      <loc>${host}${url.loc}</loc>
      ${url.alternateLinks.map(buildAlternateLinkWith(host)).join('\n')}
    </url>`;
};

function buildTemplateWith(urls: UrlTag[], host: string): string {
  return `
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
    ${urls.map(buildUrlWith(host)).join('\n')}
  </urlset>\n`;
}
