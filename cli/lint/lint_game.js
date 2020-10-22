const { print, cd, fbgRun } = require("../util.js");
const chalk = require("chalk");

function lintFailed(linter, game) {
  return `${chalk.inverse(game)}: Lint failed (${linter}). Try ${chalk.inverse(
    `yarn run fix ${game}`
  )}`;
}

function lintGame(game) {
  print(`Checking lint for ${chalk.inverse(game)} ...`);
  cd("web");
  let cmd = `FORCE_COLOR=true yarn run eslint --max-warnings=0 --ext .ts,.tsx src/games/${game}`;
  fbgRun(cmd, lintFailed("eslint", game));
  const dir = `./src/games/${game}/**/*`;
  cmd = `FORCE_COLOR=true yarn run prettier --check \"${dir}.ts\" \"${dir}.tsx\" \"${dir}.js\"`;
  fbgRun(cmd, lintFailed("prettier", game));
}

module.exports = { lintGame };
