jest.mock('games', () => ({
  GAMES_LIST: [{ code: 'bingo' }],
}));

import fs from 'fs';
import path from 'path';
import { mocked } from 'ts-jest/utils';
import { generateSiteMapXML } from './sitemap';

const sitemapFixture = fs.readFileSync(path.resolve(__dirname, './__fixtures__/sitemap.xml'), 'utf-8');

jest.mock('fs', () => ({
  readFileSync: jest.requireActual('fs').readFileSync,
  writeFileSync: jest.fn(),
}));

const { writeFileSync } = mocked(fs, true);

describe('generateSiteMapXML', () => {
  it('should generate sitemap', () => {
    generateSiteMapXML({
      manifest: manifestFixture(),
      staticDir: staticDirFixture(),
      host: hostFixture(),
    });
    expect(writeFileSync).toHaveBeenCalledWith(expect.any(String), sitemapFixture);
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
