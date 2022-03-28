import { print, cd, fbgRun } from "../util.js";
import chalk from "chalk";
import shell from "shelljs";

function fixFailed(linter, game) {
  return `${chalk.inverse(
    game
  )}: Fix failed (${linter}), you will need to manually fix these errors.`;
}

export function fixGame(game) {
  print(`Fixing ${chalk.inverse(game)} ...`);
  cd("web");
  shell.env["FORCE_COLOR"] = "true";
  let cmd = `yarn run eslint --fix --max-warnings=0 --ext .ts,.tsx src/games/${game}`;
  fbgRun(cmd, fixFailed("eslint", game));
  const dir = `./src/games/${game}/**/*`;
  cmd = `yarn run prettier --write \"${dir}.{ts,tsx,js}\"`;
  fbgRun(cmd, fixFailed("prettier", game));
}
