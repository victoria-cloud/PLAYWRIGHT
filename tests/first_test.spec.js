const { test, expect } = require('@playwright/test');


test.describe('two tests', () => {
  test('Check the title:', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    const title = page.locator('.navbar__inner .navbar__title');
    await expect(title).toHaveText('Playwright');
  });

  test('Check the title on the Getting started page:', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    const navLinks = page.locator('.navbar__item.navbar__link');
    await navLinks.first().click();
    const title = page.locator('h1');
    await expect(title).toHaveText('Getting started');
  });
  test('Complex test:', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    // Expect an attribute "to be strictly equal" to the value.
    await expect(page.locator('text=Get Started').first()).toHaveAttribute('href', '/docs/intro');

    // Expect an element "to be visible".
    await expect(page.locator('text=Learn more').first()).toBeVisible();

    await page.click('text=Get Started');

    // Compare screenshot with a stored reference.
    //expect(await page.screenshot()).toMatchSnapshot('get-started.png');
  });
});