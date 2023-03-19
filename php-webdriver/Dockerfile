# Derived from: https://github.com/tristanpenman/docker-php-webdriver

# https://hub.docker.com/layers/library/php/7.3/images/sha256-b65d1b38434e586d73200b2feba4415da57eb2d5fe415e1ec3143df274abdaf0?context=explore
FROM php:7.4

# Install dependencies
RUN apt-get update \
&& apt-get install -y unzip libzip-dev vim \
  && docker-php-ext-install zip \
&& apt-get clean \
&& rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Install Composer
RUN cd /usr/local/bin \
&& php -r "readfile('https://getcomposer.org/installer');" | php \
&& ln -sf /usr/local/bin/composer.phar /usr/local/bin/composer

# Install php-webdriver and PHPUnit
COPY composer.json /wd/composer.json
RUN cd /wd \
&& composer install

# Setup working directory
RUN mkdir -p /wd/src
WORKDIR /wd/src

COPY remote-demo.php .

CMD ["php", "remote-demo.php"]
