// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    use: {
      headless: false,
      viewport: { width: 1280, height: 720 },
      ignoreHTTPSErrors: true,
      screenshot: "on",
      video: "retain-on-failure",
    },
   
    retries: 2,
    reporter:[["dot"], ["json",{outputFile:"test-result.json"}]]
  };
  
  module.exports = config;