const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
  rootDir: 'src/',
  roots: ['<rootDir>', '<rootDir>/../server'],
  testPathIgnorePatterns: ['.next/', 'node_modules/'],
  setupFilesAfterEnv: ['../jest.setup.defineProperty.ts', '../jest.setup.ts', './test/matchers/index.ts'],
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
    '\\.(sass|scss|png|jpg|mp3|md).*$': '<rootDir>/infra/common/helpers/__mocks__/emptyModule.js',
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  coverageReporters: ['json', 'lcov', 'text', 'text-summary'],
  globals: {
    'ts-jest': {
      isolatedModules: true,
      tsConfig: './tsconfig.jest.json',
    },
  },
  collectCoverageFrom: [
    '**',
    '!games/chess/stockfish8.worker.js',
    '!deprecated-bgio-ui/**',
    '!.storybook/**',
    '!**/*.stories.tsx',
    '!**/*.json',
  ],
  coverageReporters: ['json', 'lcov'],
  coverageDirectory: '../coverage-unit',
  modulePaths: ['<rootDir>'],
};
