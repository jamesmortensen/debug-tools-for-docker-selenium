# https://github.com/seleniumhq-community/docker-seleniarm/issues/31

FROM seleniarm/standalone-chromium:106.0

USER root

# Install latest selenium
RUN  rm /home/seluser/.wget-hsts && rm -rf /opt/selenium && mkdir -p /opt/selenium /opt/selenium/assets /var/run/supervisor /var/log/supervisor \
  && touch /opt/selenium/config.toml \
  && chmod -R 777 /opt/selenium /opt/selenium/assets /var/run/supervisor /var/log/supervisor \
  && wget --no-verbose https://github.com/SeleniumHQ/selenium/releases/download/selenium-4.8.0/selenium-server-4.8.1.jar \
    -O /opt/selenium/selenium-server.jar \
  && wget --no-verbose https://repo1.maven.org/maven2/org/seleniumhq/selenium/selenium-http-jdk-client/4.8.1/selenium-http-jdk-client-4.8.1.jar \
    -O /opt/selenium/selenium-http-jdk-client.jar \
  && chgrp -R 0 /opt/selenium ${HOME} /opt/selenium/assets /var/run/supervisor /var/log/supervisor \
  && chmod -R g=u /opt/selenium ${HOME} /opt/selenium/assets /var/run/supervisor /var/log/supervisor


# Reinstall latest chromium and chromedriver
RUN apt-get update -qqy \
  && apt-get remove -y chromium \
  # && apt-get -qqy install chromium=89.0.4389.82-1 \
  # && apt-get -qqy install chromium=90.0.4430.212-1 \
  # && apt-get -qqy install chromium=93.0.4577.82-1 \
  # && apt-get -qqy install chromium=97.0.4692.71-0.1 \
  # && apt-get -qqy install chromium=98.0.4758.102-1+b1 \
  && apt-get -qqy install chromium \
  && rm -rf /var/lib/apt/lists/* /var/cache/apt/*

RUN /opt/bin/wrap_chromium_binary

RUN apt-get update -qqy \
  && apt-get -qqy install chromium-driver \
  && rm -rf /var/lib/apt/lists/* /var/cache/apt/*

RUN echo "chromium" > /opt/selenium/browser_name


USER seluser


