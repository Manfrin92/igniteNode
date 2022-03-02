## Docker commands

`docker-compose up`

`docker-compose start`

`docker-compose stop`

`docker-compose up -d`

### Remove all
`docker-compose down`

### Accessing container files
`docker exec -it nameOrId /bin/bash`

`docker logs nameOrId -f`

### Recreating
`docker-compose up --force-recreate`

### Getting ip address
`docker exec nameOfContainer cat /etc/hosts`
