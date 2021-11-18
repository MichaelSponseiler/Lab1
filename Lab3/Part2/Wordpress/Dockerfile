FROM debian:jessie

RUN apt-get update && apt-get upgrade -y

RUN apt-get install apache2 -y

RUN apt-get install php5 php-pear php5-mysql -y
RUN apt-get install sudo -y

RUN apt-get install wget -y
RUN apt-get install tar -y
RUN wget http://wordpress.org/latest.tar.gz
RUN tar -xzvf latest.tar.gz

RUN rm -f /var/www/html/index.html
RUN sudo cp -a /wordpress/ /var/www/html/
RUN chown -R www-data:www-data /var/www/html

RUN service apache2 restart

EXPOSE 8000

VOLUME /var/www/html

CMD apachectl -D FOREGROUND