import { $, ElementFinder, protractor, browser, ExpectedConditions as until, element, by } from "protractor";

export class LoginPageObj {
    public productLabel: ElementFinder;
    public userNameTbx: ElementFinder;
    public passwordTbx: ElementFinder;
    public domainTbx: ElementFinder;
    public logonBtn: ElementFinder;

    constructor() {
        this.productLabel = $("label[title='Log In']");
        this.userNameTbx = $("aw-property-text-box-val input[type='text']");
        this.passwordTbx = $("aw-property-text-box-val input[type='password']");
        this.domainTbx = $(".gwt-ListBox[type='text']");
        this.logonBtn = $('div.aw-layout-panelFooter.ng-scope > button');
    }

    public async loginAs(user: string) {
        await browser.wait(until.presenceOf(this.productLabel));

        await this.userNameTbx.sendKeys(user);
        await this.passwordTbx.sendKeys('JJuneSummer((99');
        await this.domainTbx.clear();
        await this.domainTbx.sendKeys('csiqa.local');
        await this.logonBtn.click();
        
        await browser.wait(until.urlContains('https://cltqacep1490.csiqa.local/CamstarPortal/default.htm#/screen/apollo'));

        return true;
    }
}