const playwright = require('playwright')
async function main() {
    const browser = await playwright.chromium.launch({
        headless: true
    });
    const page = await browser.newPage()
    await page.setViewportSize({ width: 1280, height: 800 })
    await page.goto('https://finance.yahoo.com/')
    const imageBuffer = await page.screenshot({ path: 'my_screenshot.png' })
    await browser.close()
    console.log(imageBuffer.toString('base64'))
}

main()
