# php-webdriver containerized

This is a sample test script that creates a Selenium session with a different container and then navigates to google.com for 10 seconds. This can be used for different kinds of triaging of docker-selenium and docker-seleniarm issues.

## Build the container

```
$ docker build -t phpwebdriver .
```


## Run the container and bash into interactive terminal

```
$ docker run --rm -it phpwebdriver bash
```

Inside the container, run the script using php:

```
$ php remote-demo.php
```

## To connect to the host

Since chromedriver only allows local connections, we use [selenium-proxy](https://www.npmjs.com/package/selenium-proxy) to connect to the host and then forward the WebDriver commands to chromedriver, in cases where we want to bypass Selenium.

### Install selenium-proxy globally:

```
$ npm i selenium-proxy -g
```

### Run selenium-proxy

By default, selenium-proxy listens on port 3100 and forwards to port 4444.

```
$ selenium-proxy
```
