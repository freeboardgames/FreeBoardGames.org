const shell = require("shelljs");
const { print, printErr, checkEnvironment } = require("../util");
const { genGames } = require("./genGames");
const chalk = require("chalk");

const USAGE = "Usage: yarn run gen:games game1,game2";

function start() {
  const argv = process.argv;
  checkEnvironment();
  if (argv.length === 2) {
    genGames([]);
  } else if (argv.length === 3) {
    genGames(argv[2].split(","));
  } else {
    printErr(USAGE);
    shell.exit(1);
  }
}
start();
