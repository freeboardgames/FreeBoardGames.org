const { print, cd, fbgRun } = require("../util.js");
const chalk = require("chalk");

function fixFailed(linter) {
  return `Fix failed (${linter}).`;
}

function fixAll() {
  print(
    `Fixing ${chalk.bold(
      "EVERYTHING"
    )}... If you only care about one game, try ${chalk.inverse(
      "yarn run fix GAME"
    )}`
  );
  cd("web");
  let cmd = `FORCE_COLOR=true yarn run eslint --fix --max-warnings=0 --ext .ts,.tsx src/`;
  fbgRun(cmd, fixFailed("eslint, web"));
  const dir = `./**/*`;
  cmd = `FORCE_COLOR=true yarn run prettier --write \"${dir}.{ts,tsx,js}\" \"../cli/**/*.js\"`;
  fbgRun(cmd, fixFailed("prettier, web"));
  cd("fbg-server");
  cmd = `FORCE_COLOR=true yarn run eslint --fix \"{src,apps,libs,test}/**/*.ts\"`;
  fbgRun(cmd, fixFailed("eslint, fbg-server"));
}

module.exports = { fixAll };
