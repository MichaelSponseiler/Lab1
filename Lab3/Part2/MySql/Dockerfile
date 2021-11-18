FROM debian:jessie

ENV MYSQL_ROOT_PASSWORD=somewordpress
ENV MYSQL_DATABASE=wordpress
ENV MYSQL_USER=wordpress
ENV MYSQL_PASSWORD=wordpress

RUN apt-get update && apt-get upgrade -y

RUN echo "mysql-server mysql-server/root_password password $MYSQL_ROOT_PASSWORD" | debconf-set-selections
RUN echo "mysql-server mysql-server/root_password_again password $MYSQL_ROOT_PASSWORD" | debconf-set-selections
RUN apt-get install mysql-server -y

RUN sed -i "s/.*bind-address.*/bind-address = 0.0.0.0/" /etc/mysql/my.cnf

RUN service mysql restart && mysql --user=root --password=$MYSQL_ROOT_PASSWORD -e "CREATE DATABASE IF NOT EXISTS $MYSQL_DATABASE;"
RUN service mysql restart && mysql --user=root --password=$MYSQL_ROOT_PASSWORD -e "CREATE USER '$MYSQL_USER'@'%';"
RUN service mysql restart && mysql --user=root --password=$MYSQL_ROOT_PASSWORD -e "SET PASSWORD FOR $MYSQL_USER=PASSWORD('$MYSQL_PASSWORD');"
RUN service mysql restart && mysql --user=root --password=$MYSQL_ROOT_PASSWORD -e "GRANT ALL PRIVILEGES ON $MYSQL_DATABASE.* TO '$MYSQL_USER'@'%';"
RUN service mysql restart && mysql --user=root --password=$MYSQL_ROOT_PASSWORD -e "FLUSH PRIVILEGES;"

VOLUME /var/lib/mysql

EXPOSE 3306

CMD ["mysqld"]