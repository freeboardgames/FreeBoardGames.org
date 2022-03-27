import { print, cd, fbgRun } from "../util.js";
import chalk from "chalk";
import shell from "shelljs";

function lintFailed(linter) {
  return `Lint failed (${linter}). Try ${chalk.inverse("yarn run fix")}`;
}

export function lintAll() {
  print(
    `Linting ${chalk.bold(
      "EVERYTHING"
    )}... If you only care about one game, try ${chalk.inverse(
      "yarn run lint GAME"
    )}`
  );
  cd("web");
  shell.env["FORCE_COLOR"] = "true";
  let cmd = `yarn run eslint --max-warnings=0 --ext .ts,.tsx src/`;
  fbgRun(cmd, lintFailed("eslint, web"));
  const dir = `./**/*`;
  cmd = `yarn run prettier --check \"${dir}.{ts,tsx,js}\" \"../cli/**/*.js\"`;
  fbgRun(cmd, lintFailed("prettier, web"));
  cd("fbg-server");
  cmd = `yarn run eslint --max-warnings=0 \"{src,apps,libs,test}/**/*.ts\"`;
  fbgRun(cmd, lintFailed("eslint, fbg-server"));
}
