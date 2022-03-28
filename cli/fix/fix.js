import shell from "shelljs";
import { print, printErr, checkEnvironment } from "../util.js";
import { fixGame } from "./fix_game.js";
import { fixAll } from "./fix_all.js";
import chalk from "chalk";

const USAGE = "Usage: yarn run fix [GAME CODE]";

function start() {
  const argv = process.argv;
  checkEnvironment();
  if (argv.length === 2) {
    fixAll();
  } else if (argv.length === 3) {
    fixGame(argv[2]);
  } else {
    printErr(USAGE);
    shell.exit(1);
  }
  print(chalk.bgGreenBright.black(" SUCCESS "));
}

start();
