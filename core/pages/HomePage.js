/**
 * Created by paras.vora on 07-Sep-18
 */

async function clickLogin() {
    await this.page.click("a[href*='login']");
}


module.exports = { clickLogin }