const signIn  = require('billing_itg_core');

describe('Test login for jenkins', () => {
    test('Verify if used is able to login', async () => {
        const login = "admin";
        const pass = "password";
        const url = "http://localhost:8080/";

        await page.tracing.start({screenshots: true, path: 'trace.json'});
        await page.goto(url, {"waitUntil": "networkidle0"});

        //await clickLogin();
        await signIn.signIn(login,pass);

        await page.tracing.stop();
    })
})