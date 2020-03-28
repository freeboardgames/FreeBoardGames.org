module.exports = {
  roots: ['<rootDir>/e2e'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['./jest.e2e.setup.ts', 'jest-puppeteer-istanbul/lib/setup'],
  reporters: ['default', 'jest-puppeteer-istanbul/lib/reporter'],
  collectCoverage: true,
  coverageReporters: ['json', 'lcov'],
  coverageDirectory: 'coverage-e2e',
  modulePaths: ['<rootDir>'],
  preset: 'jest-puppeteer',
};
