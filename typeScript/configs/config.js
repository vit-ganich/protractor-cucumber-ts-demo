"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const reporter_1 = require("../support/reporter");
const jsonReports = process.cwd() + "/reports/json";
exports.config = {
    seleniumAddress: "http://127.0.0.1:4444/wd/hub",
    SELENIUM_PROMISE_MANAGER: false,
    baseUrl: "http://www.way2automation.com/protractor-angularjs-practice-website.html",
    capabilities: {
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
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.manage().window().maximize();
        reporter_1.Reporter.createDirectory(jsonReports);
    },
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: "json:./reports/json/cucumber_report.json",
        require: ["../tests/step_definitions/*.ts", "../support/*ts"],
        strict: true,
        tags: "@Positive or @Negative or @Setup or @OutlineScenario",
    },
    onComplete: () => {
        reporter_1.Reporter.createHTMLReport();
    },
};
//# sourceMappingURL=config.js.map