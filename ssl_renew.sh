#!/bin/bash

COMPOSE="/usr/bin/docker-compose --no-ansi"
DOCKER="/usr/bin/docker"

cd /root/hslu-studio-web-2/
$COMPOSE run certbot renew && $COMPOSE kill -s SIGHUP webserver
$DOCKER system prune -af