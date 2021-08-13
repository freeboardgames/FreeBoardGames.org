const { print, cd, fbgRun } = require("../util.js");
const chalk = require("chalk");
const { lintAll } = require("../lint/lint_all.js");
const { codegen } = require("../codegen/codegen");
const shell = require("shelljs");

function testAll() {
  print(
    `Testing ${chalk.bold(
      "EVERYTHING"
    )}... If you only care about one game, try ${chalk.inverse(
      "yarn run test GAME"
    )}`
  );
  codegen();
  test();
  checkCircularDependencies();
  lintAll();
}

function test() {
  cd("web");
  shell.env["FORCE_COLOR"] = "true";
  let cmd = "yarn run jest --silent --coverage";
  fbgRun(cmd, "Tests failed (web).");
  cd("fbg-server");
  fbgRun(cmd, "Tests failed (fbg-server).");
}

function checkCircularDependencies() {
  cd("web");
  shell.env["FORCE_COLOR"] = "true";
  let cmd = "yarn madge --circular --extensions ts,tsx src/";
  fbgRun(cmd, "Circular dependencies detected (web).");
}

module.exports = { testAll };
