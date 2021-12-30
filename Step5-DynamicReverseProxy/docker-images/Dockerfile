FROM php:7.2-apache

RUN apt update && apt install -y vim

COPY apache2-foreground /usr/local/bin/
RUN chmod 755 /usr/local/bin/apache2-foreground

COPY templates /var/apache2/templates

COPY conf/ /etc/apache2

RUN a2enmod proxy proxy_http
RUN a2ensite 000-* 001-*