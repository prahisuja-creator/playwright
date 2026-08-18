import test, { chromium, firefox } from '@playwright/test'

test('launch chromium browser', async()=>{
    const browser = await chromium.launch({channel:'msedge',headless:false})
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://www.amazon.com/')
    await page.waitForTimeout(3000)
    console.log(await page.title())
})

test('launch firefox browser', async()=>{
    let browser1 = await firefox.launch({channel:'firefox',headless:false})
    let context1 = await browser1.newContext()
    let page1 = await context1.newPage()
    await page1.goto('https://platform.testleaf.com/#/')
    await page1.waitForTimeout(5000)
    console.log(await page1.title())
})