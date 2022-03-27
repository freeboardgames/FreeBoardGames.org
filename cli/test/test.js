import shell from "shelljs";
import { print, printErr, checkEnvironment } from "../util.js";
import { testGame } from "./test_game.js";
import { testAll } from "./test_all.js";
import chalk from "chalk";

const USAGE = "Usage: yarn run test [GAME CODE]";

function start() {
  const argv = process.argv;
  checkEnvironment();
  if (argv.length === 2) {
    testAll();
  } else if (argv.length === 3) {
    testGame(argv[2]);
  } else {
    const extraArgs = argv.slice(3).join(" ");
    testGame(argv[2], extraArgs);
    printErr(USAGE);
    shell.exit(1);
  }
  print(chalk.bgGreenBright.black(" SUCCESS "));
}

start();
