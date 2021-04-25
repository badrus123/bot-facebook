import { Key } from "selenium-webdriver";
import { Browser } from "../lib/browser";

class Facebook {
    browser: Browser
    private baseUrl: string = "http://facebook.com"

    constructor(driver: Browser) {
        this.browser = driver
    }

    async Login(email: string, password: string): Promise<Facebook> {
        await this.browser.navigate(this.baseUrl);
        await (await this.browser.findElementByName("email")).sendKeys(email)
        await (await this.browser.findElementByName("pass")).sendKeys(password, Key.RETURN)

        return this
    }

    async openStreamPage(url: string): Promise<Facebook> {
        await this.browser.navigate(url)
        await this.waitStreamPageLoad()

        return this
    }

    private async waitStreamPageLoad(): Promise<Facebook> {
        await this.browser.waitElementLocated(`//div[@aria-label="Putar video" or @aria-label="Play video"]`)

        return this
    }
}

export default Facebook