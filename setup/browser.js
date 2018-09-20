const puppeteer = require('puppeteer');
const PendingXHR = require('pending-xhr-puppeteer').PendingXHR

beforeEach(async () => {
    jest.setTimeout(2400000); // 40mn by test

    global.browser = await puppeteer.launch({
        headless: false,
        args: ['--disable-dev-shm-usage']
    });

    global.page = await browser.newPage();
    global.pendingXHR = new PendingXHR(page);

});

afterEach(async () => {
    await browser.close();
});