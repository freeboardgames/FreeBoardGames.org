const shell = require("shelljs");
const chalk = require("chalk");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");

function fbgRun(cmd, err) {
  if (shell.exec(cmd).code !== 0) {
    printErr(err);
    shell.exit(1);
  }
}

function cd(dir) {
  if (dir) {
    shell.cd(path.resolve(ROOT, dir));
  } else {
    shell.cd(ROOT);
  }
}

function decodeCsv(csv) {
  return csv.split(",").map((x) => x.trim());
}

function dirExists(dir) {
  return shell.test("-d", dir);
}

function print(text) {
  console.log(`${chalk.black.bgBlueBright(" FBG ")} ${text}`);
}

function printErr(text) {
  console.error(`${chalk.black.bgRed(" FBG ")} ${text}`);
}

function checkEnvironment() {
  if (!dirExists(path.resolve(ROOT, "node_modules"))) {
    printErr(
      `Run ${chalk.inverse(
        "yarn install"
      )} on root before running this command.`
    );
    shell.exit(1);
  }
}

function checkGameExists(game) {
  if (!dirExists(path.resolve(ROOT, "web", "src", "games", game))) {
    printErr(`${chalk.inverse(game)}: Game not found.`);
    shell.exit(1);
  }
}

module.exports = {
  ROOT,
  decodeCsv,
  dirExists,
  print,
  printErr,
  checkEnvironment,
  cd,
  fbgRun,
  checkGameExists,
};
