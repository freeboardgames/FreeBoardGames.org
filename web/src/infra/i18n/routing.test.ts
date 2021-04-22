import routing from './routing.json';

describe('routing.json', () => {
  routing.forEach((r) => {
    it(`match params of each translated route from ${r.default} route`, () => {
      const defaultTokens = extractPathParams(r.default);
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
