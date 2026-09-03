import test from "@playwright/test";
import data from '../../Data/leaftapsasgment.json' with {type: "json"}

let useData = data[0]

test(`Create Lead using data parameterisation`, async ({ page }) => {

    await page.goto('http://leaftaps.com/opentaps/control/main')
    await page.getByLabel('Username').fill(useData.UserName)
    await page.getByRole('textbox', { name: 'Password' }).fill(useData.Password)
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: 'CRM/SFA' }).click();

    await page.getByRole('link', { name: 'Create Lead' }).click();

    const compname = page.locator('//input[@id="createLeadForm_companyName"]');
    const firstname = page.locator('//input[@id="createLeadForm_firstName"]');
    const lastname = page.locator('//input[@id="createLeadForm_lastName"]');
    const source = page.locator('#createLeadForm_dataSourceId');
    await page.waitForTimeout(4000)
    const marketCampgn = page.locator('#createLeadForm_marketingCampaignId');
    const marketCampgncount = await marketCampgn.count();
    console.log("Count of marketCampgncount:" + marketCampgncount);
    for (let n = 0; n < marketCampgncount; n++) {
        const value = await marketCampgn.nth(n).textContent();
        console.log(`MarketCampgn List ${n + 1}: ${value}`);

    }


    const indstry = page.locator('#createLeadForm_industryEnumId');
    const prefCurr = page.locator('#createLeadForm_currencyUomId');
    const country = page.locator('#createLeadForm_generalCountryGeoId');
    await page.waitForTimeout(4000)
    const state = page.locator('#createLeadForm_generalStateProvinceGeoId');

    const stateOptions = state.locator('option');
    const stateCount = await stateOptions.count();
    console.log("Count of states:", stateCount);
    for (let i = 0; i < stateCount; i++) {
        const text = await stateOptions.nth(i).textContent();
        console.log(`State ${i + 1}: ${text}`);
    }

    //Fill values from dropdown using select optoion method from useData.json file
    await compname.fill(useData.CompanyName);
    await firstname.fill(useData.FirstName);
    await lastname.fill(useData.LastName);

    //Select values from dropdown using select option method from useData.json file
    await source.selectOption(useData.SouceDropdown);

    await marketCampgn.selectOption(useData.MarketCampgDrpdwn);

    await indstry.selectOption(useData.IndstryDrpdwn);
    await prefCurr.selectOption(useData.PrefCurr);
    await country.selectOption(useData.Country);

    await state.selectOption(useData.State);

    const createlead = page.getByRole('button', { name: 'Create Lead' });

    await createlead.click();


})