import translatedPaths from './translatedPaths';

describe('routing', () => {
  translatedPaths.forEach((r) => {
    it(`match params of each translated route from ${r.original} route`, () => {
      const defaultTokens = extractPathParams(r.original);
      Object.values(r.locales).forEach((l) => {
        const localeTokens = extractPathParams(l);
        expect(defaultTokens).toEqual(localeTokens);
      });
    });
  });
});

function extractPathParams(route: string) {
  return route.split('/').filter((p) => p.startsWith(':'));
}
