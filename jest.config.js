module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
    "^react-leaflet$": "<rootDir>/__mocks__/react-leaflet.js",
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  moduleDirectories: ["node_modules", "src"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  transformIgnorePatterns: [
    "/node_modules/(?!react-leaflet)/",
  ],
};
