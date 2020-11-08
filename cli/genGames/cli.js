const shell = require("shelljs");
const { decodeCsv, printErr, checkEnvironment } = require("../util");
const { genGames } = require("./genGames");
const chalk = require("chalk");

const USAGE = "Usage: yarn run gen:games game1,game2";

function start() {
  const argv = process.argv;
  checkEnvironment();
  if (argv.length === 2) {
    genGames();
  } else if (argv.length === 3) {
    genGames(decodeCsv(argv[2]));
  } else {
    printErr(USAGE);
    shell.exit(1);
  }
}
start();
