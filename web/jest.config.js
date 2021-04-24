module.exports = {
  roots: ['<rootDir>/src/', '<rootDir>/server/'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(sass|scss|png|jpg|mp3|md).*$': '<rootDir>/src/infra/common/helpers/__mocks__/emptyModule.js',
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  coverageReporters: ['json', 'lcov', 'text', 'text-summary'],
  globals: {
    'ts-jest': {
      isolatedModules: true,
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
  modulePaths: ['<rootDir>/src/'],
};
