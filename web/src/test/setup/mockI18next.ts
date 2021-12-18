jest.mock('react-i18next/dist/commonjs/context', () => {
  const { createContext } = jest.requireActual('react');
  const i18next = jest.requireActual('i18next');
  const glob = jest.requireActual('glob');
  const { readFileSync } = jest.requireActual('fs');

  const paths: string[] = glob.sync('public/static/locales/en/**/*.json', { nonull: false });
  if (!paths.length) throw new Error('Locale files not found');

  i18next.init({
    lng: 'en',
    supportedLngs: ['en', 'pt'],
    initImmediate: false,
    resources: paths.reduce(
      (resources, path: string) => {
        const shortPath = path.replace('public/static/locales/en/', '').replace('.json', '');
        const translations = JSON.parse(readFileSync(path, 'utf-8'));
        resources.en = {
          ...resources.en,
          [shortPath]: translations,
        };
        return resources;
      },
      { en: {} },
    ),
  });

  return {
    ...(jest.requireActual('react-i18next/dist/commonjs/context') as object),
    I18nContext: createContext({ i18n: i18next }),
  };
});

export {};
