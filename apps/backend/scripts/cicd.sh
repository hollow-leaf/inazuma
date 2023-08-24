#!/bin/sh
set -e

if ! [ "`docker network ls --format "table {{.Name}}" | grep -E ^inazuma_network$`" == "inazuma_network" ]; then
    docker network create inazuma_network
fi

if [ "`docker ps -a --format "table {{.Names}}" | grep -E ^inazuma_backend$`" == "inazuma_backend" ]; then
    docker rm -f inazuma_backend
fi

docker-compose  up --build -d
