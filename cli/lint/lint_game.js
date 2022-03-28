import { print, cd, fbgRun } from "../util.js";
import chalk from "chalk";
import shell from "shelljs";

function lintFailed(linter, game) {
  return `${chalk.inverse(game)}: Lint failed (${linter}). Try ${chalk.inverse(
    `yarn run fix ${game}`
  )}`;
}

export function lintGame(game) {
  print(`Checking lint for ${chalk.inverse(game)} ...`);
  cd("web");
  shell.env["FORCE_COLOR"] = "true";
  let cmd = `yarn run eslint --max-warnings=0 --ext .ts,.tsx src/games/${game}`;
  fbgRun(cmd, lintFailed("eslint", game));
  const dir = `./src/games/${game}/**/*`;
  cmd = `yarn run prettier --check \"${dir}.{ts,js,tsx}\"`;
  fbgRun(cmd, lintFailed("prettier", game));
}
