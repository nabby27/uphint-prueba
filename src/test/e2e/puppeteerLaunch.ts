import puppeteer, { PuppeteerLaunchOptions } from "puppeteer";

interface Options extends PuppeteerLaunchOptions {
    goToTargetApp?: boolean;
}

export default async function boot(options: Options) {
    let page = null;
    let browser = null;

    browser = await puppeteer.launch({
        ...options,
    });

    if (options.goToTargetApp) {
        page = await browser.newPage();
        await page.goto(process.env.APP_URL || '');
    }

    return { page };
}