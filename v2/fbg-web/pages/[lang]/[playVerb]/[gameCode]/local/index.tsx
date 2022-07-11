import { loadGameYaml } from "infra/games/GameLoader";
import { getGameIdFromCode } from "infra/i18n/I18nGetGameId";
import { Client } from "boardgame.io/react";
import { GameMode } from "fbg-games/gamesShared/definitions/mode";
import { parseGameDetails } from "infra/games/GameDetailsParser";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { NextPage } from "next";
import { parseI18nConfig } from "infra/i18n/I18nConfigParser";
import { loadI18nConfig } from "infra/i18n/I18nConfigLoader";
import { listGameSummaries } from "infra/games/ListGameSummaries";
import { gameBoardWrapper } from "infra/games/GameBoardWrapper";
import { IGameArgs } from "fbg-games/gamesShared/definitions/game";
import { useTranslation } from "next-i18next";
import { parseGameSummary } from "infra/games/GameSummaryParser";

interface LocalGameProps {
  gameId: string;
  params: UrlParams;
  name: string;
}

const LocalGame: NextPage<any> = function (props: LocalGameProps) {
  // TODO(vdf): Add customization back #launch-blocker
  const t = useTranslation("Game").t;
  const players = [
    { playerID: 0, name: t("player_1") },
    { playerID: 1, name: t("player_2") },
  ];
  const gameArgs: IGameArgs = {
    gameCode: props.gameId,
    mode: GameMode.LocalFriend,
    lang: props.params.lang,
    name: props.name,
    players,
  };
  const board = require(`fbg-games/${props.gameId}/board`).default;
  const game = require(`fbg-games/${props.gameId}/game`).default;
  const App = Client({
    board: gameBoardWrapper({ gameArgs, board }),
    game,
    debug: false,
  });
  return <App />;
};

interface UrlParams {
  lang: string;
  playVerb: string;
  gameCode: string;
  gameId: string;
}

interface UrlPath {
  params: UrlParams;
}

export async function getStaticProps(
  path: UrlPath
): Promise<{ props: LocalGameProps }> {
  const { lang, gameCode } = path.params;
  const gameId = await getGameIdFromCode(lang, gameCode);
  const gameYaml = await loadGameYaml(gameId);
  const summary = parseGameSummary(gameYaml, lang, gameCode);
  return {
    props: {
      gameId,
      params: path.params,
      name: summary.name,
      ...(await serverSideTranslations(lang, ["Game", "GameOver", `game-${gameId}`])),
    },
  };
}

export async function getStaticPaths() {
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

export default LocalGame;
