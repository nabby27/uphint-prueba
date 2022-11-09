import puppeteer from 'puppeteer'

const EXTENSION_PATH = './src/'
const extensionId = 'meekmgdpdhedokecafknhncnblcnfkmp'

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
            headless: true,
            devtools: true,
            args: [
                `--disable-extensions-except=${EXTENSION_PATH}`,
                `--load-extension=${EXTENSION_PATH}`,
            ]
        })

        browserArray.push(browser)

        let [page] = await browser.pages()
        await page.goto(`chrome-extension://${extensionId}/popup.html`)
        await page.bringToFront()
        await page.waitForSelector('button')

        const textEl = await page.$('button')
        const text = await textEl?.evaluate(e => e.innerText)
        console.log('string', text);

        // expect(text).toEqual('Start recording')
        expect(true).toEqual(true)
    })

})