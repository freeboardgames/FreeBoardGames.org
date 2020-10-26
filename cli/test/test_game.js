const chalk = require("chalk");
const { print, checkGameExists, cd, fbgRun } = require("../util.js");
const { lintGame } = require("../lint/lint_game.js");

function testGame(game) {
  checkGameExists(game);
  test(game);
  lintGame(game);
}

function test(game) {
  print(`Running tests for ${chalk.inverse(game)} ...`);

  cd("web");
  let cmd = `FORCE_COLOR=true yarn run jest src/games/${game}/`;
  fbgRun(cmd, `${chalk.inverse(game)}: Tests failed.`);
}

module.exports = { testGame };
