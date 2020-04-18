# Sahajanand Games

This open source project is an initiative to introduce games in Satsang, so that everyone can enjoy Satsang in a new way. You are welcome to contribute to the project. Currently, we are working to get the contribution guidelines ready, but if you are eager to contribute you can contact us on our [Discord](https://discord.gg/AaE6n3n) channel. 

<<<<<<< HEAD
site: [www.sahajanand-games.com](www.sahajanand-games.com)
=======
FOSS platform for publishing your [boardgame.io](https://boardgame.io) games. We curate high quality implementations of board games and optimize your game for delivery so you can quickly reach hundreds of players.

Play now at [FreeBoardGames.org](https://FreeBoardGames.org/)

Check out our [reported issues and feature requests](https://github.com/freeboardgames/FreeBoardGames.org/issues).

## Contributing

Contributions are always welcome, even if just reporting bugs (check our [issue tracker](https://github.com/freeboardgames/FreeBoardGames.org/issues)). Feel free to ask for any help!

## Community

<a href="https://discord.gg/AaE6n3n" target="_blank"><img src="https://discordapp.com/assets/fc0b01fe10a0b8c602fb0106d8189d9b.png" alt="Discord Logo" width="240" height="80" /></a>

## Running locally

```
git clone https://github.com/freeboardgames/FreeBoardGames.org
cd FreeBoardGames.org

yarn install  # installs dependencies

yarn run dev  # runs the webserver and backend (for online multiplayer games)
```

## Important Commands:

`yarn run dev` builds and starts the **development** web server *and* the **boardgame.io** server (used for multiplayer games).  **Both servers will automatically load code changes.**

`yarn run prod` builds and starts the **production** web server.

`yarn run bgio` builds and starts the Boardgame.io server (used for multiplayer games).

`yarn run bgio:dev` builds and starts the **boardgame.io** server.  The **boardgame.io** server will automatically recompile/restart on file changes.

`yarn run pre` runs all tests, including linting/formatting, unit tests, and e2e/visual tests.  This command is run by Travis CI for all pull requests.  

`yarn run autopre` will automatically format and attempt to fix issues.  Then it will run the same tests as `pre` (mentioned above).  **You should run this command before committing changes.**

`yarn run e2e:buildandstartserver` will build and start an unoptimized production-like web server for e2e tests.

`yarn run cyp:run` will run e2e visual testing.

`yarn run test` will run all unit tests.  You may use Jest CLI options (such as --watch).

Jest CLI Options: https://jestjs.io/docs/en/cli.html
>>>>>>> upstream/master
