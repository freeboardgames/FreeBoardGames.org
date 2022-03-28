import chalk from "chalk";
import { print, checkGameExists, cd, fbgRun } from "../util.js";
import { lintGame } from "../lint/lint_game.js";
import { codegen } from "../codegen/codegen.js";
import shell from "shelljs";

export function testGame(game, extraArgs = "") {
  checkGameExists(game);
  codegen([game]);
  test(game, extraArgs);
  lintGame(game);
}

function test(game, extraArgs = "") {
  print(`Running tests for ${chalk.inverse(game)} ...`);

  cd("web");
  shell.env["FORCE_COLOR"] = "true";
  let cmd = `yarn run jest src/games/${game}/ ${extraArgs}`.trim();
  fbgRun(cmd, `${chalk.inverse(game)}: Tests failed.`);
}
