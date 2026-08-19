import test, {expect} from "@playwright/test"

test ('Learn Playwright Locators for Create Lead', async({page})=>{
    await page.goto('http://leaftaps.com/opentaps/control/main');
    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill('Demosalesmanager');
    await page.getByRole('textbox',{name:'Password'}).click();
    await page.getByRole('textbox',{name:'Password'}).fill('crmsfa');
    await page.getByRole('button',{name:'Login'}).click();
    await page.getByRole('link',{name:'CRM/SFA'}).click();

    await page.getByRole('link',{name:'Create Lead'}).click();
    // await page.getByLabel('CreateLead').click();
    // await page.waitForTimeout(3000);
    // await page.getByLabel('Company Name',{exact:true}).fill('Test Company02');
    
    await page.locator('//input[@id="createLeadForm_companyName"]').click();
    await page.locator('//input[@id="createLeadForm_companyName"]').fill('Test Company05');

    await page.locator('//input[@id="createLeadForm_firstName"]').click();
    await page.locator('//input[@id="createLeadForm_firstName"]').fill('Priya');

    await page.locator('//input[@id="createLeadForm_lastNameLocal"]').click();
    await page.locator('//input[@id="createLeadForm_lastNameLocal"]').fill('Harshil');

    await page.locator('//input[@id="createLeadForm_personalTitle"]').click();
    await page.locator('//input[@id="createLeadForm_personalTitle"]').fill('Mrs');
 

     await page.locator('//input[@id="createLeadForm_generalProfTitle"]').click();
    await page.locator('//input[@id="createLeadForm_generalProfTitle"]').fill('Manager');

     await page.locator('//input[@id="createLeadForm_annualRevenue"]').click();
    await page.locator('//input[@id="createLeadForm_annualRevenue"]').fill('200000');

      await page.locator('//input[@id="createLeadForm_departmentName"]').click();
    await page.locator('//input[@id="createLeadForm_departmentName"]').fill('Information TEch');

       await page.locator('//input[@id="createLeadForm_primaryPhoneNumber"]').click();
    await page.locator('//input[@id="createLeadForm_primaryPhoneNumber"]').fill('9025128912');
      
    

    await page.getByRole('button',{name:'Create Lead'}).click();

    await expect(page.locator('//input[@id="createLeadForm_companyName"]')).toHaveValue('Test Company05');
    await expect(page.locator('//input[@id="createLeadForm_firstName"]')).toHaveValue('Priya');
    await expect(page.locator('//input[@id="createLeadForm_lastNameLocal"]')).toHaveValue('Harshil');
    

        console.log(await page.title());

})
