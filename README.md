# Turnato
[![Build Status](https://travis-ci.org/flamecoals/turnato.svg?branch=master)](https://travis-ci.org/flamecoals/turnato)
[![Coverage Status](https://coveralls.io/repos/github/flamecoals/turnato/badge.svg?branch=master)](https://coveralls.io/github/flamecoals/turnato?branch=master)

Turnato is a free (as in freedom), mobile-first, board game platform.  Its goal is to popularize board games and to make them easy to play with friends, even from afar.

Play now at http://turnato.com/

## Contributing

Check out the [infrastructure kanban](https://github.com/flamecoals/turnato/projects/6), each game kanban ([Chess](https://github.com/flamecoals/turnato/projects/5), [Seabattle](https://github.com/flamecoals/turnato/projects/4), [TicTacToe](https://github.com/flamecoals/turnato/projects/8)), or create your own game! Feel free to ask for any help :).

## Running locally

```
git clone https://github.com/flamecoals/turnato
cd turnato

yarn install

yarn run dev
```

Visit Turnato at [http://localhost:8000/](http://localhost:8000/)

## Running with [Docker Compose](https://docs.docker.com/compose/)

[Install Docker Compose](https://docs.docker.com/compose/install/), then:

```
git clone https://github.com/flamecoals/turnato
cd turnato

docker-compose up --build
```

Visit Turnato at [http://localhost:8000/](http://localhost:8000/)
