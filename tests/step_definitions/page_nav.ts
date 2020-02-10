import { browser } from "protractor";
import { BasePageObj } from "../../pages/basePage";

const { Given, When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(10 * 1000);
const basePage: BasePageObj = new BasePageObj();

Given('I am logged on Portal as {string}', async (user: string) => {
    await expect(browser.getTitle()).to.eventually.equal("Protractor and AngularJS practice - sample website");
});

When('I click on {string} tab', async (tab: string) => {
    let el = await basePage.findTab(tab);
    await el.click();
});

Then('I should see page with {string}', async (text: string) => {
    let res: boolean = await basePage.checkPageTitle(text);
    await expect(res).to.equal(true);
});

