from selenium import webdriver
import time
import sys

print(sys.argv)
port = sys.argv[2] if sys.argv[1] == '-p' else '4444'

options = webdriver.ChromeOptions()
# https://stackoverflow.com/a/12213723/552792
options.add_argument("--start-maximized")
driver = webdriver.Remote(
    command_executor='http://localhost:'+port,
    options=options
)
driver.get("http://www.google.com")
time.sleep(10)
driver.quit() 
