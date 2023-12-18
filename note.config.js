const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000",
    "retries": 0,
  },
  // разрешение для ноутбука (HD)
  env: {
    "x": 1920,
    "y": 1080,
  },
 
});