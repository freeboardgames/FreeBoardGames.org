module.exports = {
  rootDir: 'src/',
  roots: ['<rootDir>/../tests', '<rootDir>/components', '<rootDir>/games'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['../jest.unit.setup.ts'],
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|sass|scss|png|mp3|md).*$': '<rootDir>/../tests/__mocks__/emptyModule.js',
  },
  coverageReporters: ['json', 'lcov', 'text', 'text-summary'],
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  collectCoverageFrom: ['**', '!games/chess/stockfish8.worker.js'],
  coverageReporters: ['json', 'lcov'],
  coverageDirectory: '../coverage-unit',
  modulePaths: ['<rootDir>'],
};
