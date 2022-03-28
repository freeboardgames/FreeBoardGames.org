import shell from "shelljs";
import chalk from "chalk";
import path from "path";
import { fileURLToPath } from "url";

const thisUrl = fileURLToPath(import.meta.url);
export const ROOT = path.resolve(path.dirname(thisUrl), "..");

export function fbgRun(cmd, err) {
  if (shell.exec(cmd).code !== 0) {
    printErr(err);
    shell.exit(1);
  }
}

export function cd(dir) {
  if (dir) {
    shell.cd(path.resolve(ROOT, dir));
  } else {
    shell.cd(ROOT);
  }
}

export function decodeCsv(csv) {
  return csv.split(",").map((x) => x.trim());
}

export function dirExists(dir) {
  return shell.test("-d", dir);
}

export function print(text) {
  console.log(`${chalk.black.bgBlueBright(" FBG ")} ${text}`);
}

export function printErr(text) {
  console.error(`${chalk.black.bgRed(" FBG ")} ${text}`);
}

export function checkEnvironment() {
  if (!dirExists(path.resolve(ROOT, "node_modules"))) {
    printErr(
      `Run ${chalk.inverse(
        "yarn install"
      )} on root before running this command.`
    );
    shell.exit(1);
  }
}

export function checkGameExists(game) {
  if (!dirExists(path.resolve(ROOT, "web", "src", "games", game))) {
    printErr(`${chalk.inverse(game)}: Game not found.`);
    shell.exit(1);
  }
}
