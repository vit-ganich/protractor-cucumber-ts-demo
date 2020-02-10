const { Before, After, Status } = require("cucumber");
import { browser } from "protractor";
import { config } from "../configs/config";
import { AfterAll } from "cucumber";

Before({ timeout: 100 * 1000 }, async () => {
    await browser.get(config.baseUrl);
});

After({ timeout: 100 * 1000 }, async function (scenario) {
    if (scenario.result.status === Status.FAILED) {
        const screenShot = await browser.takeScreenshot();
        this.attach(screenShot, "image/png");
    }
    await browser.refresh();
    await browser.manage().deleteAllCookies();
});
AfterAll({ timeout: 100 * 1000 }, async () => {
    await browser.quit();
})