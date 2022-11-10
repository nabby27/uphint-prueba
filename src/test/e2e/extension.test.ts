import puppeteer from 'puppeteer'

const EXTENSION_PATH = '/app/build'
const extensionId = 'fkmajfgkmjgkckicclmhbhlmihlgmhfa'

describe('Example extension group test', () => {

    const browserArray: puppeteer.Browser[] = []

    afterAll(async () => {
        console.log('clean up');
        try {
            await Promise.all(
                browserArray.map(async (browser) => {
                    try {
                        await browser.close()
                    } catch (error) {
                        //
                    }
                })
            )
        } catch (error) {
            // 
        }
    })

    it('Example test', async () => {
        const browser = await puppeteer.launch({
            headless: false,
            devtools: true,
            args: [
                `--disable-extensions-except=${EXTENSION_PATH}`,
                `--load-extension=${EXTENSION_PATH}`,
                '--headless=chrome',
                "--disable-gpu",
                "--disable-dev-shm-usage",
                "--disable-setuid-sandbox",
                "--no-sandbox",
            ]
        })

        browserArray.push(browser)

        let [page] = await browser.pages()
        await page.goto(`chrome-extension://${extensionId}/popup.html`)
        await page.bringToFront()
        await page.waitForSelector('button')

        const textEl = await page.$('button')
        const text = await textEl?.evaluate(e => e.innerText)

        expect(text).toEqual('Stop Recording')
    })

})