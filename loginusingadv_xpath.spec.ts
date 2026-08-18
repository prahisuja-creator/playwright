import test from "@playwright/test";

test('Login using xpath', async({page})=>{

    await page.goto('https://login.salesforce.com/?locale=in');
    await page.locator('//div[@id="username_container"]/input[@id="username"]').fill('dilipkumar.rajendran@testleaf.com');
    await page.locator('//div[@id="usernamegroup"]/following-sibling::input[@id="Login"]').click();
    await page.locator('//div[@id="pwcaps"]/preceding::input[@id="password"]').fill('TestLeaf@2025');
    await page.locator('//input[@id="Login"]').click();

})