import test from "@playwright/test";
import data from '../../Data/salesforcelogin.json' with {type: "json"}


for (let loginData of data) {

    test(`Login into Sales force page  ${loginData.TestCaseID}`, async ({ page }) => {
        await page.goto('https://login.salesforce.com')
        await page.locator('//input[@id="username"]').fill(loginData.Email)
        await page.getByRole('button', { name: 'Log In' }).click();
        await page.locator('//input[@id="password"]').fill(loginData.Password)
        await page.getByRole('button', { name: 'Log In' }).click();
    })
}