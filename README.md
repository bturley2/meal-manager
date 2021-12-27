Set up a `.env` file with the following variables defined:
```
# ports to connect the docker containers with
SERVER_LISTEN_PORT=8080
DATABASE_PORT=5432

# database configuration info
POSTGRES_ROOT_PASSWORD=password
POSTGRES_DATABASE=meal-manager
POSTGRES_USER=user1
POSTGRES_PASSWORD=usbw
```

Run the server with the following command:
```
docker-compose build
docker-compose up
```

To remove anything that currently exists in the docker containers, use the following command:
```
docker-compose down --volumes
```

TODO: Check that inserts work properly - Add routes to retrieve information
