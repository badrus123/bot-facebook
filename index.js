const { Builder, By, Key, until } = require('selenium-webdriver')
module.exports.facebook_streamer = async function example(email, password) {
  require('chromedriver')
  let chrome = require('selenium-webdriver/chrome')

  let driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(
      new chrome.Options()
        .addArguments([
          // "--headless",
          '--disable-notifications',
          '--disable-infobars',
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
    await setTimeout(() => {
      driver.get(
        'https://www.facebook.com/100008720376125/videos/2645980845702569/',
      )
      driver.wait(
        until.elementLocated(
          By.xpath(
            `//div[@aria-label="Putar video" or @aria-label="Play video"]`,
          ),
        ),
      )
      driver
        .findElement(
          By.xpath(
            `//div[@aria-label="Putar video" or @aria-label="Play video"]`,
          ),
        )
        .click()
    }, 5000)
    // await driver.executeScript(
    //   'document.getElementsByTagName("video")[0].play()',
    // )
    // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  } finally {
    // await driver.quit();
  }
}
