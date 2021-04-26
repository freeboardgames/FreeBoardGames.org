import routingJson from './routing.json';

export interface TranslatedPath {
  original: string;
  locales: { [locale: string]: string };
}

const translatedPaths: TranslatedPath[] = routingJson;

export default translatedPaths;
