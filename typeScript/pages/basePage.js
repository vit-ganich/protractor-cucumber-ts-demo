"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const typescript_string_operations_1 = require("typescript-string-operations");
const until = protractor_1.protractor.ExpectedConditions;
class BasePageObj {
    constructor() {
        this.tabPattern = "//*[@id='toggleNav']/descendant::a[text()='{0}']";
    }
    async findTab(tabName) {
        let locator = typescript_string_operations_1.String.Format(this.tabPattern, tabName);
        let tab = await protractor_1.element(protractor_1.by.xpath(locator));
        await protractor_1.browser.wait(until.visibilityOf(tab));
        return await tab;
    }
    async checkPageTitle(text) {
        await protractor_1.browser.wait(until.titleContains(text));
        return true;
    }
}
exports.BasePageObj = BasePageObj;
//# sourceMappingURL=basePage.js.map