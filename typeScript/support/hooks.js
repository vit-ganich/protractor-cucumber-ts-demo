"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Before, After, Status } = require("cucumber");
const protractor_1 = require("protractor");
const config_1 = require("../configs/config");
const cucumber_1 = require("cucumber");
Before({ timeout: 100 * 1000 }, async () => {
    await protractor_1.browser.get(config_1.config.baseUrl);
});
After({ timeout: 100 * 1000 }, async function (scenario) {
    if (scenario.result.status === Status.FAILED) {
        const screenShot = await protractor_1.browser.takeScreenshot();
        this.attach(screenShot, "image/png");
    }
    await protractor_1.browser.refresh();
    await protractor_1.browser.manage().deleteAllCookies();
});
cucumber_1.AfterAll({ timeout: 100 * 1000 }, async () => {
    await protractor_1.browser.quit();
});
//# sourceMappingURL=hooks.js.map