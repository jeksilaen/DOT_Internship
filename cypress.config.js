const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {},
    supportFile : false,
    baseUrl: 'http://localhost:3000'
  },
})
