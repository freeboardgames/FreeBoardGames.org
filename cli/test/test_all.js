const {dirExists, ROOT, print, cd, fbgRun} = require('../util.js');
const shell = require('shelljs');
const chalk = require('chalk');

function testAll() {
  print(`Testing ${chalk.bold('EVERYTHING')}... If you only care about one game, try ${chalk.inverse('yarn run test GAME')}`);
  test();
  lint();
  print(chalk.bgGreenBright.black(' SUCCESS '));
}

function test() {
  cd('web');
  let cmd = 'FORCE_COLOR=true yarn run jest';
  fbgRun(cmd, 'Tests failed (web).');
  cd('fbg-server');
  fbgRun(cmd, 'Tests failed (fbg-server).');
}

function lintFailed(linter) {
  return `Lint failed (${linter}). Try ${chalk.inverse('yarn run fix')}`;
}

function lint() {
  print(`Checking lint ...`);
  cd('web');
  let cmd = `FORCE_COLOR=true yarn run eslint --max-warnings=0 --ext .ts,.tsx src/`;
  fbgRun(cmd, lintFailed('eslint, web'));
  const dir = `./**/*`;
  cmd = `FORCE_COLOR=true yarn run prettier --check \"${dir}.ts\" \"${dir}.tsx\" \"${dir}.js\" \"../cli/**/*.js\"`;
  fbgRun(cmd, lintFailed('prettier, web'));
  cd('fbg-server');
  cmd = `FORCE_COLOR=true yarn run eslint \"{src,apps,libs,test}/**/*.ts\"`
  fbgRun(cmd, lintFailed('eslint, fbg-server'));
}

module.exports = {testAll};