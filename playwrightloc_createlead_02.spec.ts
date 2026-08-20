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
    
    const compname = page.locator('//input[@id="createLeadForm_companyName"]');
    const firstname = page.locator('//input[@id="createLeadForm_firstName"]');
    const lastname=page.locator('//input[@id="createLeadForm_lastName"]');
    const salutation = page.locator('//input[@id="createLeadForm_personalTitle"]');
    const title = page.locator('//input[@id="createLeadForm_generalProfTitle"]');
    const annualincome = page.locator('//input[@id="createLeadForm_annualRevenue"]');
    const department = page.locator('//input[@id="createLeadForm_departmentName"]');
    const phonenumber = page.locator('//input[@id="createLeadForm_primaryPhoneNumber"]');


    await compname.fill('Test Company05');
    await firstname.fill('Priya');
    await lastname.fill('Harshil');
    await salutation.fill('Mrs');
    await title.fill('Manager');
    await annualincome.fill('5000000');
    await department.fill('Information Tecchonology');
    await phonenumber.fill('2378561298');

    const createlead = page.getByRole('button',{name:'Create Lead'});
    
    await createlead.click();

    const viscompanyname = page.locator('#viewLead_companyName_sp')
    const visforename = page.locator('#viewLead_firstName_sp');
    const vislastname = page.locator('#viewLead_lastName_sp');
    const visstatus = page.locator ('#viewLead_statusId_sp');

    await expect(viscompanyname).toContainText ('Test Company05');
    await expect(visforename).toContainText ('Priya');
    await expect(vislastname).toContainText ('Harshil');
    await expect(visstatus).toContainText ('Assigned');
   
    console.log(await page.title());

})
