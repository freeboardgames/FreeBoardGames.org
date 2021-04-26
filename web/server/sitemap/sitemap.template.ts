import { Url } from './types';

export const template = (urls: Url[]) => join`
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.map((url: Url) => `<url><loc>${url.host}${url.language ? url.language : ''}${url.path}</loc></url>`)}
  </urlset>`;

function join(strings: TemplateStringsArray, ...values: TypeOrArray<string | number>[]) {
  let output = '';
  strings.forEach((string, index) => {
    let part = values[index];
    part = Array.isArray(part) ? part.join('') : part;
    part = part || '';
    output += string + part;
  });
  return output;
}

type TypeOrArray<T> = T | T[];
