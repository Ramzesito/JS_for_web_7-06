const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000",
    "retries": 0,
    //testIsolation: false,
  },
  // разрешение по умолчанию
  env: {
    "x": 1280,
    "y": 720,
  },
  
});
