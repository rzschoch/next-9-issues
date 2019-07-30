const THRESHOLD = 80;

module.exports = {
  setupFilesAfterEnv: ["<rootDir>/jest-setup.js"],
  // to have snapshots for the components rendered by enzyme
  snapshotSerializers: ["enzyme-to-json/serializer"],
  moduleNameMapper: {
    // imported css classnames will be as declared in the css files for the jest environment
    "\\.(css)$": "identity-obj-proxy"
  },
  collectCoverageFrom: ["src/**/*.js", "!src/.next/**/*.js"],
  coverageThreshold: {
    global: {
      branches: THRESHOLD,
      functions: THRESHOLD,
      lines: THRESHOLD,
      statements: THRESHOLD
    }
  },
  testURL: "http://localhost/",
  watchPathIgnorePatterns: ["<rootDir>/node_modules/"]
};
