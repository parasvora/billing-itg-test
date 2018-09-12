const {clickDefaultInvoice} = require("../core/pages/billing/settings/invoice/PrintInvoice");
const {clickLogin} = require('../core/pages/HomePage');
const {signIn} = require('../core/pages/LoginPage');

describe('Test components displayed in the page', () => {
    test('Verify if the default template row is displayed', async () => {
        const login = "login";
        const pass = "password";
        const url = "http://appdirect.localhost:8080/fusion/templates";

        /*await page.setCookie({
             document.cookie = 'itg-ui="http://localhost:3111"';
        });*/
        await page.tracing.start({screenshots: true, path: 'trace.json'});
        await page.goto(url, {"waitUntil": "networkidle0"});

        //await clickLogin();
        await signIn(login,pass);

        //await page.goto(url, {"waitUntil": "networkidle0"});

        await clickDefaultInvoice();


        await page.tracing.stop();
    })
})