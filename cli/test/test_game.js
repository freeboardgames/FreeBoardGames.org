const chalk = require("chalk");
const { print, checkGameExists, cd, fbgRun } = require("../util.js");
const { lintGame } = require("../lint/lint_game.js");
const { genGames } = require("../genGames/genGames.js");
const shell = require("shelljs");

function testGame(game, extraArgs = "") {
  checkGameExists(game);
  genGames([game]);
  test(game, extraArgs);
  lintGame(game);
}

function test(game, extraArgs = "") {
  print(`Running tests for ${chalk.inverse(game)} ...`);

  cd("web");
  shell.env["FORCE_COLOR"] = "true";
  let cmd = `yarn run jest src/games/${game}/ ${extraArgs}`.trim();
  fbgRun(cmd, `${chalk.inverse(game)}: Tests failed.`);
}

module.exports = { testGame };
