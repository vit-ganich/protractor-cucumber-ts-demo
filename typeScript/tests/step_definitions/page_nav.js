"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const basePage_1 = require("../../pages/basePage");
const { Given, When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(10 * 1000);
const basePage = new basePage_1.BasePageObj();
Given('I am logged on Portal as {string}', async (user) => {
    await expect(protractor_1.browser.getTitle()).to.eventually.equal("Protractor and AngularJS practice - sample website");
});
When('I click on {string} tab', async (tab) => {
    let el = await basePage.findTab(tab);
    await el.click();
});
Then('I should see page with {string}', async (text) => {
    let res = await basePage.checkPageTitle(text);
    await expect(res).to.equal(true);
});
//# sourceMappingURL=page_nav.js.map