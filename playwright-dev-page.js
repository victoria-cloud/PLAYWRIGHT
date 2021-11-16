// playwright-dev-page.js
const { expect } = require('@playwright/test');

exports.PlaywrightDevPage = class PlaywrightDevPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.getStartedLink = page.locator('text=Get started');
    this.tocList = page.locator('article ul > li > a');
    this.title=page.locator('h1');
    this.tableofContents=page.locator('.table-of-contents.table-of-contents__left-border');
  }

  async goto() {
    await this.page.goto('https://playwright.dev');
  }

  async getStarted() {
    await this.getStartedLink.first().click();
  }

  async goToBrowsersSupport(){
    await this.page.locator('//h3[text()="Test across all modern browsers"]/..//a[text()="Learn more"]').click();
  }
}