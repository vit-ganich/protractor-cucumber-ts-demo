import { browser, Config } from "protractor";
import { Reporter } from "../support/reporter";
const jsonReports = process.cwd() + "/reports/json";

export const config: Config = {
    seleniumAddress: "http://127.0.0.1:4444/wd/hub",
    SELENIUM_PROMISE_MANAGER: false,
    baseUrl: "http://www.way2automation.com/protractor-angularjs-practice-website.html",
    capabilities:{
        'browserName': 'internet explorer',
        'ignoreProtectedModeSettings': true
    },
    restartBrowserBetweenTests: false,
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    specs: [
        "../tests/features/*.feature",
    ],

    onPrepare: () => {
        require('ts-node').register({ project: './tsconfig.json' });
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        Reporter.createDirectory(jsonReports);
    },

    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: "json:./reports/json/cucumber_report.json",
        require: ["../tests/step_definitions/*.ts", "../support/*ts"],
        strict: true,
        tags: "@Positive or @Negative or @Setup or @OutlineScenario",
    },

    onComplete: () => {
        Reporter.createHTMLReport();
    },
}