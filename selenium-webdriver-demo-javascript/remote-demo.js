const args = require('argumently');
const port = args.has('-p') ? args.get('-p') : 4444; 

const { Builder, Capabilities } = require("selenium-webdriver");
const chrome = require('selenium-webdriver/chrome');
var capabilities = Capabilities.chrome();
var options = new chrome.Options();
options.addArguments('--start-maximized');

(async function helloSelenium() {
    let driver = new Builder()
        .usingServer("http://localhost:" + port)
        .forBrowser('chrome')
        .setChromeOptions(options)
        .withCapabilities(capabilities)
        .build();
    try {
        await driver.get('http://www.google.com');
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
  
