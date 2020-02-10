import { browser } from "protractor";
import { BasePageObj } from "../../pages/basePage";
import { LoginPageObj } from "../../pages/loginPage";

const { Given, When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

// Pages
const basePage: BasePageObj = new BasePageObj();
const loginPage: LoginPageObj = new LoginPageObj();

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

Given('I am logged on MfgPortal as {string}', async(user: string) => {
    let result = await loginPage.loginAs(user);
    await expect(result).to.equal(true);
});