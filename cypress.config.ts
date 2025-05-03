const {defineConfig} = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://the-internet.herokuapp.com/',
    viewportWidth: 1920,
    viewportHeight: 1080,
    chromeWebSecurity: false,
    downloadsFolder: 'cypress/downloads',
    trashAssetsBeforeRuns: true,
  },
});
