const { print, cd, fbgRun } = require("../util.js");
const chalk = require("chalk");
const shell = require("shelljs");

function fixFailed(linter, game) {
  return `${chalk.inverse(
    game
  )}: Fix failed (${linter}), you will need to manually fix these errors.`;
}

function fixGame(game) {
  print(`Fixing ${chalk.inverse(game)} ...`);
  cd("web");
  shell.env["FORCE_COLOR"] = "true";
  let cmd = `yarn run eslint --fix --max-warnings=0 --ext .ts,.tsx src/games/${game}`;
  fbgRun(cmd, fixFailed("eslint", game));
  const dir = `./src/games/${game}/**/*`;
  cmd = `yarn run prettier --write \"${dir}.{ts,tsx,js}\"`;
  fbgRun(cmd, fixFailed("prettier", game));
}

module.exports = { fixGame };
