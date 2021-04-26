jest.mock('games', () => ({
  GAMES_LIST: [{ code: 'bingo' }],
}));

import fs from 'fs';
import path from 'path';
import { mocked } from 'ts-jest/utils';
import { generateSiteMapXML } from './sitemap';

const sitemapI18nFixture = fs.readFileSync(path.resolve(__dirname, './__fixtures__/sitemap_i18n.xml'), 'utf-8');
const sitemapFixture = fs.readFileSync(path.resolve(__dirname, './__fixtures__/sitemap.xml'), 'utf-8');

jest.mock('fs', () => ({
  readFileSync: jest.requireActual('fs').readFileSync,
  writeFileSync: jest.fn(),
}));

const { writeFileSync } = mocked(fs, true);

describe('generateSiteMapXML', () => {
  beforeEach(() => {
    const oldNodeEnv = process.env.NODE_ENV;

    process.env = Object.assign(process.env, {
      NODE_ENV: 'production',
    });

    afterEach(() => {
      process.env = Object.assign(process.env, {
        NODE_ENV: oldNodeEnv,
      });
    });
  });

  it('should generate sitemap', () => {
    generateSiteMapXML({
      manifest: manifestFixture(),
      staticDir: staticDirFixture(),
      host: hostFixture(),
    });
    expect(writeFileSync).toHaveBeenCalledWith(expect.any(String), sitemapFixture);
    writeFileSync.mockClear();
    process.env = Object.assign(process.env, {
      NEXT_PUBLIC_I18N_ENABLED: 'true',
    });
    generateSiteMapXML({
      manifest: manifestFixture(),
      staticDir: staticDirFixture(),
      host: hostFixture(),
    });
    expect(writeFileSync).toHaveBeenCalledWith(expect.any(String), sitemapI18nFixture);
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
