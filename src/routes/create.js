import { getScreenshot } from "../lib/chromium";

const isDev = !process.env.AWS_REGION

export async function GET(req, res) {
    try {
        const options = {
            screenWidth: req.url.searchParams.get('screenWidth'),
            screenHeight: req.url.searchParams.get('screenHeight'),
            deviceScaleFactor: req.url.searchParams.get('deviceScaleFactor'),
            waitUntil: req.url.searchParams.get('waitUntil'),
            waitForElement: req.url.searchParams.get('waitForElement'),
            waitTime: req.url.searchParams.get('waitTime'),
            quality: req.url.searchParams.get('quality'),
            url: req.url.searchParams.get('url'),
            isDev
        }

        const file = await getScreenshot(options)

        return  {
            status: 200,
            headers: {
                'Content-Type': 'image/png',
                'Cache-Control': 'public, immutable, no-transform, s-maxage=31536000, max-age=31536000'
            },
            body: file
        }
        

    } catch (error) {
        console.error('ERROR: ', error)
        return {
            status: 500,
            body: {
                error: 'INTERNAL SERVER ERROR'
            }
        }
    }
}