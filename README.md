# Turnato
[![Build Status](https://travis-ci.org/Felizardo/turnato.svg?branch=colonizers)](https://travis-ci.org/Felizardo/turnato)

Turnato is a Free (as in Freedom), mobile-first, board game platform.
Objective is to popularize board games reducing the friction to play.
And to have fun with friends even if they are far away :).

Play now at http://turnato.com/

## Running locally

Make sure you have docker and docker-compose installed.

```
git clone https://github.com/Felizardo/turnato
cd turnato
echo 'module.exports = {};' > server/secrets.js

npm install

npm run compile
sudo docker build -t turnato .
sudo docker-compose up
```

To run outside of docker, having mongod running, use
```
npm run dev
``` 

App will be available at http://localhost/
You can enable dev tools by removing 'ENV NODE\_ENV production' from Dockerfile.
