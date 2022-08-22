import { parseI18nConfig } from "infra/i18n/I18nConfigParser";
import { loadI18nConfig } from "infra/i18n/I18nConfigLoader";
import { listGameSummaries } from "infra/games/ListGameSummaries";
import { parseGameDetails } from "infra/games/GameDetailsParser";
import { loadGameYaml } from "infra/games/GameLoader";
import { GameMode } from "fbg-games/gamesShared/definitions/mode";

export async function getGameStaticPaths() {
  const i18nConfig = parseI18nConfig(await loadI18nConfig());
  const paths = [];
  for (const gameSummary of await listGameSummaries()) {
    const gameCode = gameSummary.code;
    const lang = gameSummary.lang;
    const gameId = gameSummary.id;
    const playVerb = i18nConfig[lang].playVerb;
    const gameYaml = await loadGameYaml(gameId);
    const details = parseGameDetails(
      gameYaml,
      gameSummary.lang,
      gameSummary.code
    );
    if (!details.modes.includes(GameMode.LocalFriend)) {
      continue;
    }
    paths.push({ params: { lang, playVerb, gameCode, gameId } });
  }
  return { paths, fallback: false };
}
