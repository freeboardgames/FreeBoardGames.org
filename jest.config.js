module.exports = {
  rootDir: 'src/',
  roots: ['<rootDir>/../tests', '<rootDir>/components', '<rootDir>/games'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['../jest.setup.ts'],
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(sass|scss|png|mp3|md).*$': '<rootDir>/../tests/__mocks__/emptyModule.js',
    '\\.(css|less)$': 'identity-obj-proxy',
    'dto/(.*)': '<rootDir>/../common/dto/$1',
  },
  coverageReporters: ['json', 'lcov', 'text', 'text-summary'],
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  collectCoverageFrom: ['**', '!games/chess/stockfish8.worker.js', '!ui/**'],
  coverageReporters: ['json', 'lcov'],
  coverageDirectory: '../coverage-unit',
  modulePaths: ['<rootDir>'],
};
