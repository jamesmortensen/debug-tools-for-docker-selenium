// index.js

const webdriver = require("selenium-webdriver");
const { Builder, Capabilities } = require("selenium-webdriver");
const firefox = require('selenium-webdriver/firefox');

(async () => {
  var capabilities = Capabilities.firefox();
  var options = new firefox.Options();
  //options.addArguments('--headless');
  const driver = new webdriver.Builder()
    .forBrowser(webdriver.Browser.FIREFOX)
    .setFirefoxOptions(options)
    .usingServer("http://localhost:4444/wd/hub")
.build();
  console.log("driver created");

  console.log("Getting...");
  await driver.get("https://example.com");
  const title = await driver.getTitle();
  console.log(`title=${title}`);
  // expected => title=Example Domain
})();

