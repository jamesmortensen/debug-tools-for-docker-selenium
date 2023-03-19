from selenium import webdriver
import time

chrome_options = webdriver.ChromeOptions()
chrome_options.add_argument('--lang=zh_CN.UTF-8')
driver = webdriver.Remote(command_executor='http://localhost:4444', options=chrome_options)
driver.maximize_window()
time.sleep(5)
driver.quit()
