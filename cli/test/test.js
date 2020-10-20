const shell = require('shelljs');
const {printErr, checkEnvironment} = require('../util');
const {testGame} = require('./test_game');
const {testAll} = require('./test_all');

const USAGE = 'Usage: yarn run test [GAME CODE]';

function start() {
  const argv = process.argv;
  checkEnvironment();
  if (argv.length === 2) {
    testAll();
  } else if (argv.length === 3) {
    testGame(argv[2]);
  } else {
    printErr(USAGE);
    shell.exit(1);
  }
}

start();