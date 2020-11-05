const { genGames } = require("../genGames/genGames");
const { cd, print, fbgRun } = require("../util");
const chalk = require("chalk");
const shell = require("shelljs");

function dev(games) {
  genGames();
  if (games.length === 0) {
    print(
      `Running development environment for ${chalk.bold(
        "ALL GAMES"
      )}... If you only care about few games, it is much faster to run ${chalk.inverse(
        "yarn run dev GAME1,GAME2"
      )}`
    );
  } else {
    const formattedGames = games.map((g) => chalk.inverse(g)).join(", ");
    print(`Running development environment for ${formattedGames} ...`);
  }
  genGames(games);
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
