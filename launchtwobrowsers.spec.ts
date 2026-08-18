import test, { chromium, firefox} from '@playwright/test'

test ('launch chromium browser', async()=>{
    let browser = await chromium.launch({channel:'msedge', headless:false})
    let context = await browser.newContext()
    let page = await context.newPage()
    await page.goto('https://www.redbus.in/')
    await page.waitForTimeout(5000)
    console.log("The title is :" + "   "+ await page.title())
    console.log("The page url is : " + "   " + await page.url())
    
})

test ('lanuch Firefox browser', async () => {
    let browser = await firefox.launch({channel:'firefox', headless:false})
    let context = await browser.newContext()
    let page = await context.newPage()
    await page.goto(' https://www.flipkart.com' , {waitUntil:"domcontentloaded"})
    // await page.waitForTimeout(5000)
    console.log("The title is :" + "   "+ await page.title())
    console.log("The page url is : " + "   " + await page.url())
    
})
