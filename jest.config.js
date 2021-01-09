module.exports = {
  verbose: true,
  collectCoverageFrom: ["src/**/*.{js,jsx}"],
  setupFilesAfterEnv: ["./src/setupTests.js"],
  roots: ["./src/__tests__"],
  modulePaths: ["./__stubs__"],
  coveragePathIgnorePatterns: ["src/apollo-client"],
  moduleFileExtensions: ["web.js", "js", "jsx"],
  testPathIgnorePatterns: ["/node_modules/"],
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/src/__mocks__/styleMock.js",
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/__mocks__/fileMock.js",
  },
};
