# FreeBoardGame.org
[![Build Status](https://travis-ci.org/freeboardgame/FreeBoardGame.org.svg?branch=master)](https://travis-ci.org/freeboardgame/FreeBoardGame.org)
[![Coverage Status](https://coveralls.io/repos/github/freeboardgame/FreeBoardGame.org/badge.svg?branch=master)](https://coveralls.io/github/freeboardgame/FreeBoardGame.org?branch=master)

Mobile-First Free board games for everybody. Free as in "free beer" and as in "freedom". You are welcome to study the games, modify and contribute back to the community !

Play now at [FreeBoardGame.org](https://FreeBoardGame.org/)

Made with React, Typescript and [Boardgame.io](https://boardgame.io/)

## Contributing

Check out the [infrastructure kanban](https://github.com/freeboardgame/FreeBoardGame.org/projects/6), each game kanban ([Chess](https://github.com/freeboardgame/FreeBoardGame.org/projects/5), [Seabattle](https://github.com/freeboardgame/FreeBoardGame.org/projects/4), [TicTacToe](https://github.com/freeboardgame/FreeBoardGame.org/projects/8)), or create your own game! Feel free to ask for any help :).

## Running locally

```
git clone https://github.com/freeboardgame/FreeBoardGame.org
cd FreeBoardGame.org

yarn install

yarn run dev
```
Open [http://localhost:8000/](http://localhost:8000/)

## Running with [Docker Compose](https://docs.docker.com/compose/)

[Install Docker Compose](https://docs.docker.com/compose/install/), then:

```
git clone https://github.com/freeboardgame/FreeBoardGame.org
cd FreeBoardGame.org

docker-compose up --build
```

Open [http://localhost:8000/](http://localhost:8000/)
