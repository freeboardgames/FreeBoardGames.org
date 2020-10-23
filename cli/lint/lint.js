const shell = require("shelljs");
const { print, printErr, checkEnvironment } = require("../util");
const { lintGame } = require("./lint_game");
const { lintAll } = require("./lint_all");
const chalk = require("chalk");

const USAGE = "Usage: yarn run lint [GAME CODE]";

function start() {
  const argv = process.argv;
  checkEnvironment();
  if (argv.length === 2) {
    lintAll();
  } else if (argv.length === 3) {
    lintGame(argv[2]);
  } else {
    printErr(USAGE);
    shell.exit(1);
  }
  print(chalk.bgGreenBright.black(" SUCCESS "));
}

start();
