const {defineConfig} = require('cypress');

module.exports = defineConfig({
  video: true,
  viewportHeight: 1080,
  viewportWidth: 1920,

  e2e: {
    baseUrl: 'https://www.netwealth.com.au/',
    excludeSpecPattern: ['**/1-getting-started', '**/2-advanced-examples'],
    specPattern: ['cypress/e2e/**/*.{js,jsx,ts,tsx}', 'cypress/e2e/support/page_objects/**/*.{js,jsx,ts,tsx}'],

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
