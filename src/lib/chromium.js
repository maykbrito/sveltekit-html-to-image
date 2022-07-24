import puppeteer from 'puppeteer-core'
import { getOptions } from './chromeOptions'

let _page;

async function getPage(isDev) {
    if (_page) {
      return _page
    }
  
    const options = await getOptions(isDev)
    const browser = await puppeteer.launch(options)
  
    _page = await browser.newPage()
  
    return _page
  }

export async function getScreenshot({screenWidth, screenHeight, waitUntil, waitTime, url, waitForElement, isDev, quality, deviceScaleFactor}){

    const page = await getPage(isDev)

    let viewportOptions = {width: +screenWidth, height: +screenHeight, deviceScaleFactor: +deviceScaleFactor}
    
    await page.setViewport(viewportOptions)
    await page.goto(url, { waitUntil });
    await page.waitForTimeout(waitTime);

    if(waitForElement) {
        await page.waitForSelector(waitForElement, {
            visible: true,
        });
    }

    const screenshotOption =  {
        type: 'png',
    }

    if (screenHeight == '') {
        screenshotOption.fullPage = true
    }

    const file = await page.screenshot(screenshotOption)

    return file
}