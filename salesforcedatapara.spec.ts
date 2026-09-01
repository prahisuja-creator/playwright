import test from "@playwright/test";
import data from '../../Data/salesforcelogin.json' with {type:"json"}

let loginData = data[0]

test('Login into Sales force page', async ({ page }) => {

    await page.goto('https://login.salesforce.com')
    await page.locator('//input[@id="username"]').fill(loginData.Email)
    await page.getByRole('button', { name: 'Log In' }).click();
    await page.locator('//input[@id="password"]').fill(loginData.Password)
    await page.getByRole('button', { name: 'Log In' }).click();
})