import shell from "shelljs";
import { print, printErr, checkEnvironment } from "../util.js";
import { lintGame } from "./lint_game.js";
import { lintAll } from "./lint_all.js";
import chalk from "chalk";

const USAGE = "Usage: yarn run lint [GAME CODE]";

function start() {
  const argv = process.argv;
  checkEnvironment();
  if (argv.length === 2) {
    lintAll();
  } else if (argv.length === 3) {
    lintGame(argv[2]);
  } else {
    printErr(USAGE);
    shell.exit(1);
  }
  print(chalk.bgGreenBright.black(" SUCCESS "));
}

start();
