// example.spec.js
const { test, expect } = require('@playwright/test');
const { PlaywrightDevPage } = require('../playwright-dev-page');


test.describe('My tests', () => {

  test('Get Started table of contents', async ({ page }) => {
     const playwrightDev = new PlaywrightDevPage(page);
    await playwrightDev.goto();
    await playwrightDev.getStarted();
    await expect(playwrightDev.tocList).toHaveText([
      'Installation',
      'First test',
      'Writing assertions',
      'Using test fixtures',
      'Using test hooks',
      'Command line',
      'Creating a configuration file',
      'Release notes',
    ]);
  });

  test('Core Concepts table of contents', async ({ page }) => {
    const playwrightDev = new PlaywrightDevPage(page);
    await playwrightDev.goto();
    await playwrightDev.getStarted();
    await expect(playwrightDev.tocList.first()).toHaveText('Installation');
  });

  test('Browser support', async ({ page }) => {
    const playwrightDev = new PlaywrightDevPage(page);
    await playwrightDev.goto();
    await playwrightDev.goToBrowsersSupport();
    await expect(playwrightDev.title).toHaveText('Why Playwright?');
  }

  )

})

