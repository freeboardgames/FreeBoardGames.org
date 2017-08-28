# Turnato

Turnato is a Free (as in Freedom), mobile-first, board game platform.
Objective is to popularize board games reducing the friction to play. 
And to have fun with friends even if they are far :).

## Running locally

Make sure you have docker and docker-compose installed.

```
git clone https://github.com/Felizardo/turnato
cd turnato

npm install

npm run compile

sudo docker build -t turnato .
sudo docker-compose up
```

You can enable dev tools by removing 'ENV NODE\_ENV production' from Dockerfile.
