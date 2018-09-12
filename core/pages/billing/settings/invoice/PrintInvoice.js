/**
 * Created by paras.vora on 07-Sep-18
 */

async function clickDefaultInvoice(){
    await page.click("//div[text()='Default Template']");
}

module.exports = { clickDefaultInvoice };