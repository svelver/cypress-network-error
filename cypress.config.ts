import { defineConfig } from "cypress";

export default defineConfig({
  fixturesFolder: "tests/e2e/fixtures",
  screenshotsFolder: "tests/e2e/screenshots",
  videosFolder: "tests/e2e/videos",
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      // on('file:preprocessor', webpack({
      //  webpackOptions: require('@vue/cli-service/webpack.config'),
      //  watchOptions: {}
      // }))
      // return Object.assign({}, config, {
      //   fixturesFolder: "tests/e2e/fixtures",
      //   integrationFolder: "tests/e2e/specs",
      //   screenshotsFolder: "tests/e2e/screenshots",
      //   videosFolder: "tests/e2e/videos",
      //   supportFile: "tests/e2e/support/index.js",
      // });
    },
    specPattern: "tests/e2e/specs/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "tests/e2e/support/index.js",
    baseUrl: "http://localhost:8080/",
  },
});
