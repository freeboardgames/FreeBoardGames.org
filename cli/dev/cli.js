const shell = require("shelljs");
const { printErr, checkEnvironment, decodeCsv } = require("../util");
const { dev } = require("./dev");

const USAGE = "Usage: yarn run dev game1,game2";

function start() {
  const argv = process.argv;
  checkEnvironment();
  if (argv.length === 2) {
    dev([]);
  } else if (argv.length === 3) {
    dev(decodeCsv(argv[2]));
  } else {
    printErr(USAGE);
    shell.exit(1);
  }
}
start();
