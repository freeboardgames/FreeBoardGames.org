import { print, cd, fbgRun } from "../util.js";
import chalk from "chalk";
import { lintAll } from "../lint/lint_all.js";
import { codegen } from "../codegen/codegen.js";
import shell from "shelljs";

export function testAll() {
  print(
    `Testing ${chalk.bold(
      "EVERYTHING"
    )}... If you only care about one game, try ${chalk.inverse(
      "yarn run test GAME"
    )}`
  );
  codegen();
  test();
  checkCircularDependencies();
  lintAll();
}

function test() {
  cd("web");
  shell.env["FORCE_COLOR"] = "true";
  let cmd = "yarn run jest --silent --coverage";
  fbgRun(cmd, "Tests failed (web).");
  cd("fbg-server");
  fbgRun(cmd, "Tests failed (fbg-server).");
}

function checkCircularDependencies() {
  cd("web");
  shell.env["FORCE_COLOR"] = "true";
  let cmd = "yarn madge --circular --extensions ts,tsx src/";
  fbgRun(cmd, "Circular dependencies detected (web).");
}
