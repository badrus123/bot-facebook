const { Builder, By, Key, until } = require('selenium-webdriver')
module.exports.facebook_streamer = async function example(
  email,
  password,
  url,
  code,
) {
  require('chromedriver')
  let chrome = require('selenium-webdriver/chrome')

  let driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(
      new chrome.Options()
        .addArguments([
          // '--headless',
          '--disable-notifications',
          '--disable-infobars',
          '--start-maximized',
          '--disable-web-security',
          '--no-proxy-server',
          'user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36',
        ])
        .excludeSwitches('enable-automation'),
    )
    .build()
  try {
    await driver.manage().window().maximize()
    await driver.get('http://www.facebook.com')
    await driver.findElement(By.name('email')).sendKeys(email)
    await driver.findElement(By.name('pass')).sendKeys(password, Key.RETURN)
    await driver.get('https://www.facebook.com/checkpoint/?next')
    await setTimeout(() => {
      driver.findElement(By.name('approvals_code')).sendKeys(code, Key.RETURN)
    }, 10000)
    await setTimeout(() => {
      driver.findElement(By.id('checkpointSubmitButton')).click()
    }, 10000)

    // await setTimeout(() => {
    //   driver.get(`${url}`)
    //   driver.wait(
    //     until.elementLocated(
    //       By.xpath(
    //         `//div[@aria-label="Putar video" or @aria-label="Play video"]`,
    //       ),
    //     ),
    //   )
    //   driver
    //     .findElement(
    //       By.xpath(
    //         `//div[@aria-label="Putar video" or @aria-label="Play video"]`,
    //       ),
    //     )
    //     .click()
    // }, 60000)
  } finally {
    // await driver.quit();
  }
}
