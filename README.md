# AP - Backend Test

REST API for mobile application.

## Feature includes:

  - Fetch news data for specific user
  - Update news read list for specific user

## Tech

This project uses a number of open source projects accordng to the test specification:

* [Node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework
* [Docker] - a powerful container service use to deliver software in packages

##Installation

Prerequisites:
  - Docker

### Start service with docker compose

Start docker compose

```sh
$ docker compose up -d
```

Test the app
```sh
http://localhost:3000/
```

### Request load balacing with docker swarm

First, down docker compose

```sh
$ docker compose down
```

Initailize docker swarm
```sh
$ docker swarm init
```

Deploy docker swarm app with name 'apps'

```sh
$ docker stack deploy -c docker-compose-swarm.yml apps
```

Check weather app if created successfull
```sh
$ docker stack ps apps
```
You should see 10 replica nodes as image below:
[![Docker Swarm Node](http://www.kanatat.com/images/docker-swarm-node.png "Docker Swarm Node")](http://www.kanatat.com/images/docker-swarm-node.png "Docker Swarm Node")

Test the app
```sh
http://localhost:3000/
```


## Request URL
API are written with POST Request type

### Fetch News Data
```sh
http://localhost:3000/api/getnews
```
Request Body:
```sh
{
    "userName": "takeshi@gmail.com",
    "token": "ABCD1234"
}
```

### Update User's News Mark as Read List
```sh
http://localhost:3000/api/updatereadlist
```
Request Body:
```sh
{
    "userName": "takeshi@gmail.com",
    "newsId" : "5",
    "token": "ABCD1234"
}
```

###Database Schema

[![AP Backend DB Schema](http://www.kanatat.com/images/ap-backend-db-schema.png "AP Backend DB Schema")](http://www.kanatat.com/images/ap-backend-db-schema.png "AP Backend DB Schema")

**Enjoy :)**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)
   [Node.js]: <http://nodejs.org>
   [Express]: <http://expressjs.com>
   [Docker]: <https://www.docker.com/>
