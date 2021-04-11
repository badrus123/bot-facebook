const { Builder, By, Key } = require('selenium-webdriver');
(async function example() {
  require('chromedriver')
  let chrome = require('selenium-webdriver/chrome')

  let driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(
      new chrome.Options()
        .addArguments(
          [
            "--disable-notifications",
            "--disable-infobars",
            "user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36"
          ]
        )
        .excludeSwitches("enable-automation")
    )
    .build()
  try {
    await driver.manage().window().maximize()
    await driver.get('http://www.facebook.com')
    await driver
      .findElement(By.name('email'))
      .sendKeys('qohqwrk682@noquviti.com')
    await driver.findElement(By.name('pass')).sendKeys('Aku999@', Key.RETURN)
    await setTimeout(() => {
      driver.get('https://www.facebook.com/100008720376125/videos/2645872805713373/')
      driver.findElement(By.xpath(`//div[@aria-label="Putar video"]`)).click()
    }, 5000)
    // await driver.executeScript(
    //   'document.getElementsByTagName("video")[0].play()',
    // )
    // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  } finally {
    // await driver.quit();
  }
})()
