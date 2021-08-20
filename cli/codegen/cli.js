const shell = require("shelljs");
const { print, checkEnvironment, cd, fbgRun } = require("../util");

function start() {
  const argv = process.argv;
  checkEnvironment();
  print("Generating required code...");
  cd("web");
  fbgRun(`yarn run codegen:games ${argv[2]}`);
  cd("web");
  fbgRun("yarn run codegen:i18n");
  fbgRun("yarn run codegen:apollo"); 
}
start();
