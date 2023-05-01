//package JavaBasics;

//import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.WebElement;
//import org.openqa.selenium.WebDriver.Options;
//import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.Test;

import java.net.MalformedURLException;
import java.net.URL;
import java.time.Duration;
//import java.util.concurrent.TimeUnit;

public class RemoteDemo {

    public static void main(String[] args) throws Exception {
        RemoteDemo demo = new RemoteDemo();
        demo.simpleRemoteTest();
    }

    @Test
    public void simpleRemoteTest() throws MalformedURLException {
        URL gridUrl = new URL("http://localhost:4444");
        //FirefoxOptions chromeOptions = new FirefoxOptions();
        ChromeOptions chromeOptions = new ChromeOptions();
        RemoteWebDriver webDriver = new RemoteWebDriver(gridUrl, chromeOptions);

        webDriver.get("http://www.google.com/ncr");
        webDriver.findElement(By.name("q")).sendKeys("webdriver", Keys.RETURN);

        WebDriverWait webDriverWait = new WebDriverWait(webDriver, Duration.ofSeconds(5));
        webDriverWait.until(ExpectedConditions.titleContains("webdriver"));

        webDriver.quit();
    
    }
}
