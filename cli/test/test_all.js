const { print, cd, fbgRun } = require("../util.js");
const chalk = require("chalk");
const { lintAll } = require("../lint/lint_all.js");

function testAll() {
  print(
    `Testing ${chalk.bold(
      "EVERYTHING"
    )}... If you only care about one game, try ${chalk.inverse(
      "yarn run test GAME"
    )}`
  );
  test();
  lintAll();
}

function test() {
  cd("web");
  let cmd = "FORCE_COLOR=true yarn run jest";
  fbgRun(cmd, "Tests failed (web).");
  cd("fbg-server");
  fbgRun(cmd, "Tests failed (fbg-server).");
}

module.exports = { testAll };
