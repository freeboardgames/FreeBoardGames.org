import { genGames } from "./genGames.js";
import { cd, print, fbgRun } from "../util.js";

export function codegen(games = []) {
  print("Generating games index...");
  genGames(games);
  print("Generating GraphQL definitions...");
  cd("web");
  fbgRun("yarn run apollo:codegen");
  print("Generating i18n translations...");
  fbgRun("yarn run i18n:copy");
}
