jest.mock('games', () => ({
  GAMES_LIST: [{ code: 'bingo' }],
}));

import fs from 'fs';
import path from 'path';
import { mocked } from 'ts-jest/utils';
import { generateSiteMapXML } from './sitemap';
import mockedEnv from 'mocked-env';

const sitemapI18nFixture = fs.readFileSync(path.resolve(__dirname, './__fixtures__/sitemap_i18n.xml'), 'utf-8');
const sitemapFixture = fs.readFileSync(path.resolve(__dirname, './__fixtures__/sitemap.xml'), 'utf-8');

jest.mock('fs', () => ({
  readFileSync: jest.requireActual('fs').readFileSync,
  writeFileSync: jest.fn(),
}));

const { writeFileSync } = mocked(fs, true);

describe('generateSiteMapXML', () => {
  beforeEach(() => {
    const restore = mockedEnv({ NODE_ENV: 'production' });
    afterEach(restore);
  });

  afterEach(() => {
    writeFileSync.mockClear();
  });

  it('should generate sitemap with i18n disabled', () => {
    const restore = mockedEnv({ NEXT_PUBLIC_I18N_ENABLED: 'false' });
    generateSiteMapXML({
      manifest: manifestFixture(),
      staticDir: staticDirFixture(),
      host: hostFixture(),
    });
    expect(writeFileSync).toHaveBeenCalledWith(expect.any(String), sitemapFixture);
    restore();
  });

  it('should generate sitemap with i18n enabled', () => {
    const restore = mockedEnv({ NEXT_PUBLIC_I18N_ENABLED: 'true' });
    generateSiteMapXML({
      manifest: manifestFixture(),
      staticDir: staticDirFixture(),
      host: hostFixture(),
    });
    expect(writeFileSync).toHaveBeenCalledWith(expect.any(String), sitemapI18nFixture);
    restore();
  });
});

function manifestFixture(): { [x: string]: unknown } {
  return {
    '/path1': '/path1',
    '/path2': '/path2',
    '/path3': '/path3',
  };
}

function staticDirFixture(): string {
  return '/';
}

function hostFixture(): string {
  return 'https://www.freeboardgames.org';
}
