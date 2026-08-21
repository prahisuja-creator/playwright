import test, { expect } from "@playwright/test";

test('Learn Playwright Locators for Edit Lead', async ({ page }) => {

    const baseurl = 'http://leaftaps.com/opentaps/control/main';

    const usrname = page.getByLabel('Username');
    const pwd = page.getByRole('textbox', { name: 'Password' });
    const logBtn = page.getByRole('button', { name: 'Login' });
    const crmBtn = page.getByRole('link', { name: 'CRM/SFA' });

    await page.goto(baseurl);
    await usrname.fill('Demosalesmanager');
    await pwd.fill('crmsfa');
    await logBtn.click();
    await crmBtn.click();

    //Find the already stored Lead value and 

    const leadsbtn = page.locator('//a[@href="/crmsfa/control/leadsMain"]');
    const findLeads = page.locator('//a[@href="/crmsfa/control/findLeads"]');
    const fName = page.locator('//input[@id="ext-gen248"]');
    const fndBtn = page.getByRole('button', { name: 'Find Leads' });

    await leadsbtn.click();
    await findLeads.click();
    await fName.fill('Priya');
    await fndBtn.click();

    const gridlink = page.getByRole('link', { name: 'Priya' }).nth(0);
    await gridlink.click();
    console.log(await page.title());

    //Edit the existing value in the fields department, annual revenue and description

    const editBtn = page.getByRole('link', { name: 'Edit' });

    const compNameedit = page.locator('//input[@id="updateLeadForm_companyName"]');
    const annualRevedit = page.locator('//input[@id="updateLeadForm_annualRevenue"]');
    const departEdit = page.locator('//input[@id="updateLeadForm_departmentName"]');
    const descEdit = page.locator('//textarea[@id="updateLeadForm_description"]');
    const updateBtn = page.getByRole('button', { name: 'Update' })

    await editBtn.click();
    await page.waitForLoadState('domcontentloaded');
    await compNameedit.click();
    await compNameedit.clear();
    await compNameedit.fill('Updated Company03');
    await annualRevedit.clear();
    await annualRevedit.fill('10000000');
    await departEdit.clear();
    await departEdit.fill('Micro Biology');
    await descEdit.clear();
    await descEdit.fill('Sample Description');
    await updateBtn.click();

    //Verify the updated fields Company Name, Annual Revenue, Department

    const vercompName = page.locator('#viewLead_companyName_sp');
    const verannualRevedit = page.locator('#viewLead_annualRevenue_sp');
    const verdepartEdit = page.locator('#viewLead_departmentName_sp');

    await expect(vercompName).toContainText('Updated Company03');
    await expect(verannualRevedit).toContainText('$10,000,000.00');
    await expect(verdepartEdit).toContainText('Micro Biology')
    console.log(await page.title());

})
