/**
 * Created by paras.vora on 07-Sep-18
 */

async function signIn(username, password){
    const user = "input[id='username']";
    await page.waitForSelector(user);
    await page.type(user, username);
    await page.type("input[id='password']", password);
    await page.click("button[type='submit']");
}

module.exports = { signIn };