const { print, cd, fbgRun } = require("../util.js");
const chalk = require("chalk");

function lintFailed(linter) {
  return `Lint failed (${linter}). Try ${chalk.inverse("yarn run fix")}`;
}

function lintAll() {
  print(
    `Linting ${chalk.bold(
      "EVERYTHING"
    )}... If you only care about one game, try ${chalk.inverse(
      "yarn run lint GAME"
    )}`
  );
  cd("web");
  let cmd = `FORCE_COLOR=true yarn run eslint --max-warnings=0 --ext .ts,.tsx src/`;
  fbgRun(cmd, lintFailed("eslint, web"));
  const dir = `./**/*`;
  cmd = `FORCE_COLOR=true yarn run prettier --check \"${dir}.{ts,tsx,js}\" \"../cli/**/*.js\"`;
  fbgRun(cmd, lintFailed("prettier, web"));
  cd("fbg-server");
  cmd = `FORCE_COLOR=true yarn run eslint --max-warnings=0 \"{src,apps,libs,test}/**/*.ts\"`;
  fbgRun(cmd, lintFailed("eslint, fbg-server"));
}

module.exports = { lintAll };
