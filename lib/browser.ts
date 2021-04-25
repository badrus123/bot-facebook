import { Builder, By, ThenableWebDriver, until } from "selenium-webdriver";
import { Options } from "selenium-webdriver/chrome";

const opts = [
    '--disable-notifications',
    '--disable-infobars',
    'user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36'
]

export class Browser {
    private driver: ThenableWebDriver
    
    constructor(browserName: string, headless: boolean = false) {
        let tempBuilder = new Builder().forBrowser(browserName)
        
        switch (browserName) {
            case "chrome":
                require('chromedriver')

                let options = new Options()
                opts.forEach((v) => {
                    options.addArguments(v)
                })
                options.excludeSwitches('enable-automation')
                if (headless) { options.headless() }

                tempBuilder.setChromeOptions(options)
        }

        this.driver = tempBuilder.build()
    }

    async navigate(url: string) {
        await this.driver.get(url)
    }

    async findElementByName(selector: string) {
        return await this.driver.findElement(By.name(selector))
    }

    async findElementByXpath(selector: string) {
        return await this.driver.findElement(By.xpath(selector))
    }

    async waitElementLocated(selector: string) {
        return await this.driver.wait(
            until.elementLocated(
                By.xpath(selector)
            )
        )
    }
}