# Sahajanand Games

This open source project is an initiative to introduce games in Satsang, so that everyone can enjoy Satsang in a new way. You are welcome to contribute to the project. Currently, we are working to get the contribution guidelines ready, but if you are eager to contribute you can contact us on our [Discord](https://discord.gg/AaE6n3n) channel. 

site: [www.sahajanand-games.com](www.sahajanand-games.com)


## Running locally

```
git clone https://github.com/sahajanand-games/SahajanandGames.git
cd SahajanandGames

yarn install  # installs dependencies

yarn run dev  # runs the webserver and backend (for online multiplayer games)
```

## Important commands

`yarn run dev GAME` runs the **development** environment only for a given game.

`yarn run test GAME` runs unit tests and linter for given game.

`yarn run lint GAME` runs linter for given game.

`yarn run fix GAME` tries to automatically fix linter errors for given game.

`yarn run ci` on root runs everything CI will run (including e2e tests).

Omitting the GAME from any command above will run it for all the codebase.

##  Thanks to

This project is forked from [FreeBoardGames.org](www.freeboardgames.org).