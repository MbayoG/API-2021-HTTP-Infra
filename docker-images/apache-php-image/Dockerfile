# Copies the html content from the local directory to the docker image
FROM httpd:2.4
COPY ./public-html/ /usr/local/apache2/htdocs/

# Copies the httpd configuration from the local directory to the docker image
FROM httpd:2.4
COPY ./my-httpd.conf /usr/local/apache2/conf/httpd.conf


