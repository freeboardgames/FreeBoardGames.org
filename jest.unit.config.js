module.exports = {
  roots: ['<rootDir>/tests', '<rootDir>/components', '<rootDir>/games'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['./jest.unit.setup.ts'],
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|sass|scss|png|mp3|md).*$': '<rootDir>/__mocks__/emptyModule.js',
  },
  coverageReporters: ['json', 'lcov', 'text', 'text-summary'],
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  collectCoverage: true,
  coverageReporters: ['json', 'lcov'],
  coverageDirectory: 'coverage-unit',
  modulePaths: ['<rootDir>'],
};
