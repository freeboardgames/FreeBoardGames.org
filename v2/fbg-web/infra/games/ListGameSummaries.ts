import { loadGameYaml } from "./GameLoader";
import { GameSummary, parseGameSummary } from "./GameSummaryParser";
import { parseGameTranslations } from "./GameTranslationsParser";
import gamesJson from "fbg-games/games.json";

export const listGameSummaries = async function() :Promise<GameSummary[]> {
    const result = [];
    for (const gameId of gamesJson) {
      const gameYaml = await loadGameYaml(gameId);
      const gameLanguages = parseGameTranslations(gameYaml, gameId);
      const allLanguages = ["en", ...Object.keys(gameLanguages)];
      for (const lang of allLanguages) {
        const gameSummary = parseGameSummary(gameYaml, lang, gameId);
        result.push(gameSummary);
      }
    }
    return result;
}