import { UrlTag, AlternateLink } from './types';

const HOST = 'https://www.freeboardgames.org';

export const encodeSitemap = (urls: UrlTag[]) => {
  const xml = buildTemplateWith(urls);
  return sanitize(xml);
};

function buildAlternateLinkWith(alternateLink: AlternateLink) {
  return `<link rel="alternate" hreflang="${alternateLink.hreflang}" href="${alternateLink.href}" />`;
}

function buildUrlWith(url: UrlTag): string {
  return `
    <url>
      <loc>
        ${HOST}${url.loc}
      </loc>
      ${url.alternateLinks.map(buildAlternateLinkWith).join('\n')}
    </url>`;
}

function buildTemplateWith(urls: UrlTag[]): string {
  return `
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.map(buildUrlWith).join('\n')}
  </urlset>`;
}

function sanitize(xml: string) {
  return xml
    .replace(/(\r\n|\n|\r)/gm, '')
    .replace(/>\s*/g, '>')
    .replace(/\s*</g, '<')
    .trim();
}
