import test from "@playwright/test";

test('Login using xpath', async({page})=>{

    await page.goto('https://login.salesforce.com/?locale=in');
    await page.locator('//input[@id="username"]').fill('dilipkumar.rajendran@testleaf.com');
    await page.locator('//input[@id="Login"]').click();
    await page.locator('//input[@id="password"]').fill('TestLeaf@2025');
    await page.locator('//input[@id="Login"]').click();

})