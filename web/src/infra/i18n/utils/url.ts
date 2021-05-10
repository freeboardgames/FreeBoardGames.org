import { Redirect } from '../types';

export function buildUrl(path: string[]) {
  const [locale, ...parts] = path;
  const url = `/:lang(${locale})/${parts.join('/')}`;
  return url;
}

export function buildRewrite(sourcePaths: string[][], destinationPath: string[]) {
  return sourcePaths.map((path) => ({
    source: buildUrl(path),
    destination: buildUrl(destinationPath),
  }));
}

export function buildRedirect(paths: string[][], pathDictionary: Record<string, string[]>): Redirect[] {
  return paths
    .map((path) => {
      const [sourceLocale] = path;
      const source = buildUrl(path);
      const destination = buildUrl(pathDictionary[sourceLocale]);
      if (source === destination) return null;
      return { source, destination, permanent: true };
    })
    .filter(Boolean) as Redirect[];
}
