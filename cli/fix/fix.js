const shell = require("shelljs");
const { print, printErr, checkEnvironment } = require("../util");
const { fixGame } = require("./fix_game");
const { fixAll } = require("./fix_all");
const chalk = require("chalk");

const USAGE = "Usage: yarn run fix [GAME CODE]";

function start() {
  const argv = process.argv;
  checkEnvironment();
  if (argv.length === 2) {
    fixAll();
  } else if (argv.length === 3) {
    fixGame(argv[2]);
  } else {
    printErr(USAGE);
    shell.exit(1);
  }
  print(chalk.bgGreenBright.black(" SUCCESS "));
}

start();
