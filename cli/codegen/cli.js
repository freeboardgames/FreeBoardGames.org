const shell = require("shelljs");
const { decodeCsv, printErr, checkEnvironment } = require("../util");
const { codegen } = require("./codegen");

const USAGE = "Usage: yarn run codegen game1,game2";

function start() {
  const argv = process.argv;
  checkEnvironment();
  if (argv.length === 2) {
    codegen();
  } else if (argv.length === 3) {
    codegen(decodeCsv(argv[2]));
  } else {
    printErr(USAGE);
    shell.exit(1);
  }
}
start();
