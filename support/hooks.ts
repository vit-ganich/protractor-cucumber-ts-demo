import { browser } from "protractor";
import { config } from "../configs/config";
import { Before, After, AfterAll, Status, setDefaultTimeout} from "cucumber";

setDefaultTimeout(20 * 1000);

Before({ timeout: 60 * 1000 }, async () => {
    await browser.get(config.baseUrl);
});

After({ timeout: 60 * 1000 }, async function (scenario) {
    if (scenario.result.status === Status.FAILED) {
        const screenShot = await browser.takeScreenshot();
        this.attach(screenShot, "image/png");
    }
    await browser.refresh();
    await browser.manage().deleteAllCookies();
});
AfterAll({ timeout: 60 * 1000 }, async () => {
    await browser.quit();
})