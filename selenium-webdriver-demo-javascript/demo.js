/*
 * This is the JavaScript version of Selenium-WebDriver.
 * Unlike WebdriverIO and Playwright, it is standalone with no test runner.
 * It is as if selenium-webdriver is more of a library than a framework.
 * I even had to manually download geckodriver from mozilla/releases.
 */

const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    await driver.get('http://www.google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleIs('webdriver - Google Search'), 6000);
    sleep(16000);
  } finally {
    await driver.quit();
  }
})();


function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
