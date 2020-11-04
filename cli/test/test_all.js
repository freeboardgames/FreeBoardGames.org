const { print, cd, fbgRun } = require("../util.js");
const chalk = require("chalk");
const { lintAll } = require("../lint/lint_all.js");
const { genGames } = require("../genGames/genGames.js");
const shell = require("shelljs");

function testAll() {
  print(
    `Testing ${chalk.bold(
      "EVERYTHING"
    )}... If you only care about one game, try ${chalk.inverse(
      "yarn run test GAME"
    )}`
  );
  genGames();
  test();
  lintAll();
}

function test() {
  cd("web");
  shell.env['FORCE_COLOR'] = "true";
  let cmd = "yarn run jest";
  fbgRun(cmd, "Tests failed (web).");
  cd("fbg-server");
  fbgRun(cmd, "Tests failed (fbg-server).");
}

module.exports = { testAll };
