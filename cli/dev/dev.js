const { codegen } = require("../codegen/codegen");
const { cd, print, fbgRun } = require("../util");
const chalk = require("chalk");
const shell = require("shelljs");

function dev(games) {
  if (games.length === 0) {
    print(
      `Running development environment for ${chalk.bold(
        "ALL GAMES"
      )}... If you only care about few games, it is much faster to run ${chalk.inverse(
        "yarn run dev GAME1,GAME2"
      )}`
    );
    codegen();
  } else {
    const formattedGames = games.map((g) => chalk.inverse(g)).join(", ");
    print(`Running development environment for ${formattedGames} ...`);
    codegen(games);
  }
  print(
    `Visit ${chalk.inverse(
      "http://localhost:3000"
    )} to access local FBG when ready.`
  );
  cd();
  shell.env["FORCE_COLOR"] = "true";
  let cmd = "yarn run dev:internal";
  fbgRun(cmd, "Dev failed.");
}

module.exports = {
  dev,
};
