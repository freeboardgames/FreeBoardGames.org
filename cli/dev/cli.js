import shell from "shelljs";
import { printErr, checkEnvironment, decodeCsv } from "../util.js";
import { dev } from "./dev.js";

const USAGE = "Usage: yarn run dev game1,game2";

function start() {
  const argv = process.argv;
  checkEnvironment();
  if (argv.length === 2) {
    dev([]);
  } else if (argv.length === 3) {
    dev(decodeCsv(argv[2]));
  } else {
    printErr(USAGE);
    shell.exit(1);
  }
}
start();
