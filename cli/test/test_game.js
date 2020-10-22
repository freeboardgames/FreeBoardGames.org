const shell = require("shelljs");
const chalk = require("chalk");
const path = require("path");
const { dirExists, ROOT, print, printErr, cd, fbgRun } = require("../util.js");

function testGame(game) {
  if (!dirExists(path.resolve(ROOT, "web", "src", "games", game))) {
    printErr(`${chalk.inverse(game)}: Game not found.`);
    shell.exit(1);
  }
  test(game);
  lint(game);
}

function test(game) {
  print(`Running tests for ${chalk.inverse(game)} ...`);

  cd("web");
  let cmd = `FORCE_COLOR=true yarn run jest src/games/${game}`;
  fbgRun(cmd, `${chalk.inverse(game)}: Tests failed.`);
}

module.exports = { testGame };
