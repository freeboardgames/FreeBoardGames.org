import { print, cd, fbgRun } from "../util.js";
import chalk from "chalk";
import shell from "shelljs";

function fixFailed(linter) {
  return `Fix failed (${linter}), you will need to manually fix these errors.`;
}

export function fixAll() {
  print(
    `Fixing ${chalk.bold(
      "EVERYTHING"
    )}... If you only care about one game, try ${chalk.inverse(
      "yarn run fix GAME"
    )}`
  );
  cd("web");
  shell.env["FORCE_COLOR"] = "true";
  let cmd = `yarn run eslint --fix --max-warnings=0 --ext .ts,.tsx src/`;
  fbgRun(cmd, fixFailed("eslint, web"));
  const dir = `./**/*`;
  cmd = `yarn run prettier --write \"${dir}.{ts,tsx,js}\" \"../cli/**/*.js\"`;
  fbgRun(cmd, fixFailed("prettier, web"));
  cd("fbg-server");
  cmd = `yarn run eslint --max-warnings=0 --fix \"{src,apps,libs,test}/**/*.ts\"`;
  fbgRun(cmd, fixFailed("eslint, fbg-server"));
}
