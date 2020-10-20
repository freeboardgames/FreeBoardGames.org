const shell = require('shelljs');
const chalk = require('chalk');
const path = require('path');
const {dirExists, ROOT, print, printErr, cd, fbgRun} = require('../util.js');

function testGame(game) {
  if (!dirExists(path.resolve(ROOT, 'web', 'src', 'games', game))) {
    printErr(`${chalk.inverse(game)}: Game not found.`);
    shell.exit(1);
  }
  test(game);
  lint(game);
  print(chalk.bgGreenBright.black(' SUCCESS '));
}

function test(game) {
  print(`Running tests for ${chalk.inverse(game)} ...`);
  
  cd('web');
  let cmd = `FORCE_COLOR=true yarn run jest src/games/${game}`;
  fbgRun(cmd, `${chalk.inverse(game)}: Tests failed.`);
}

function lintFailed(linter, game) {
  return `${chalk.inverse(game)}: Lint failed (${linter}). Try ${chalk.inverse(`yarn run fix ${game}`)}`;
}

function lint(game) {
  print(`Checking lint for ${chalk.inverse(game)} ...`);
  cd('web');
  let cmd = `FORCE_COLOR=true yarn run eslint --max-warnings=0 --ext .ts,.tsx src/games/${game}`;
  fbgRun(cmd, lintFailed('eslint', game));
  const dir = `./src/games/${game}/**/*`;
  cmd = `FORCE_COLOR=true yarn run prettier --check \"${dir}.ts\" \"${dir}.tsx\" \"${dir}.js\"`;
  fbgRun(cmd, lintFailed('prettier', game));
}

module.exports = {testGame};