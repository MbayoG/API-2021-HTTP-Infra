FROM php:7.2-apache
COPY conf/ /etc/apache2

COPY apache2-foreground /usr/local/bin/
RUN chmod +x /usr/local/bin/apache2-foreground

RUN apt update && apt install -y vim

RUN a2enmod proxy proxy_http
RUN a2ensite 000-* 001-*
