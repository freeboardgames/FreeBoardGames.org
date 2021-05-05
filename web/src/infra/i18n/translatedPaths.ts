export interface TranslatedPath {
  original: string;
  locales: { [locale: string]: string };
}

const translatedPaths: TranslatedPath[] = [
  {
    original: '/play/:rest+',
    locales: { pt: '/jogar/:rest+' },
  },
];

export default translatedPaths;
