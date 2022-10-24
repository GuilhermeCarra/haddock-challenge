/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  testMatch: [ '**/*.test.ts'],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
}