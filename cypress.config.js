const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.feature",
    baseUrl: "http://localhost:3000",

    // 🎥 Video ayarları
    video: true,
    videosFolder: "cypress/videos",
    trashAssetsBeforeRuns: false,
    videoUploadOnPasses: true,
    videoCompression: 18, // Daha yüksek kalite
    screenshotOnRunFailure: true,

    // 🕐 Komut hız ayarları (videoyu daha yavaş ve detaylı yapar)
    defaultCommandTimeout: 15000,
    responseTimeout: 25000,

    env: {
      stepDelay: 1000, // her adım arası 1 saniye gecikme → video yavaş ve uzun olur
    },

    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      // Her komuttan sonra otomatik yavaşlatma (video detaylı gözüksün)
      on("task", {
        delay(ms = config.env.stepDelay || 1000) {
          return new Promise((resolve) => setTimeout(resolve, ms));
        },
      });

      return config;
    },
  },
});
