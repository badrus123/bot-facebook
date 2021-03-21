const {Builder, By, Key, until} = require('selenium-webdriver');
(async function example() {
    require('chromedriver')
  let driver = await new Builder().forBrowser('chrome').setChromeOptions().build();
  try {
    await driver.get('http://www.facebook.com');
    await driver.findElement(By.name('email')).sendKeys('badrussholehaxel@gmail.com');
    await driver.findElement(By.name('pass')).sendKeys('123axelkeren', Key.RETURN);
    await setTimeout(() => {
     driver.get('https://fb.watch/4lgCbHy42p/');  
    }, 5000);
    
    // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  } finally {
    // await driver.quit();
  }
})();