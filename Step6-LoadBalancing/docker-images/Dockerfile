FROM php:7.2-apache
COPY conf/ /etc/apache2

RUN apt update && apt install -y vim

RUN a2enmod proxy proxy_http proxy_balancer lbmethod_byrequests
RUN a2ensite 000-* 001-*
