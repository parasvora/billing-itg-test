module.exports = {
    "testURL": "http://localhost/",
    setupTestFrameworkScriptFile: './core/setup/browser.js',
    globals: { // available in all tests
        browser: null,
        page: null,
    },
    testMatch: ['**/testscripts/**/*test.js'],
};