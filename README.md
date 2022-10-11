# FreeBoardGames.org

FOSS platform for publishing your [boardgame.io](https://boardgame.io) games. We curate high quality implementations of board games and optimize your game for delivery so you can quickly reach [thousands of players](https://stats.freeboardgames.org).

Play now at [FreeBoardGames.org](https://FreeBoardGames.org/)

## Contributing

Check out [**our documentation**](https://www.freeboardgames.org/docs/) and [**how to add your game**](https://www.freeboardgames.org/docs/?path=/docs/documentation-getting-started-adding-a-new-game--page).

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

## Important commands

`yarn run dev GAME` runs the **development** environment only for a given game.

`yarn run test GAME` runs unit tests and linter for given game.

`yarn run lint GAME` runs linter for given game.

`yarn run fix GAME` tries to automatically fix linter errors for given game.

`yarn run ci` on root runs everything CI will run (including e2e tests).

Omitting the GAME from any command above will run it for all the codebase.

##  Thanks to

[**Our amazing contributors**](https://www.FreeBoardGames.org/about)
