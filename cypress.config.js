const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "upem8x",
  viewportHeight: 1080,
  viewportWidth: 1920,
  video: true,
  videoCompression: false,
  defaultCommandTimeout: 5000,
  pageLoadTimeout: 20000,
  trashAssetsBeforeRuns: true,
  env: {
    grepOmitFiltered: true
  },
  reporter: 'cypress-mochawesome-reporter',
  retries: {
    runMode: 1,
    openMode: 1
  },
  e2e: {
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
