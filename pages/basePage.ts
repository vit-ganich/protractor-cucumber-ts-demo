
import { $, ElementFinder, protractor, browser, element, by} from "protractor";
import { String, StringBuilder } from 'typescript-string-operations';

const until = protractor.ExpectedConditions;

export class BasePageObj {

    private tabPattern = "//*[@id='toggleNav']/descendant::a[text()='{0}']";

    async findTab(tabName: string) {
        let locator: string = String.Format(this.tabPattern, tabName);
        let tab: ElementFinder = await element(by.xpath(locator));
        await browser.wait(until.visibilityOf(tab))

        return await tab;
    }

    async checkPageTitle(text: string){
        await browser.wait(until.titleContains(text));
        return true;
    }
}