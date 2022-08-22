import { loadGameYaml } from "infra/games/GameLoader";
import { getGameIdFromCode } from "infra/i18n/I18nGetGameId";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { NextPage } from "next";
import { parseGameSummary } from "infra/games/GameSummaryParser";
import { getGameStaticPaths } from "infra/misc/gameStaticPaths";
import { Client } from "boardgame.io/react";
import { GameMode } from "fbg-games/gamesShared/definitions/mode";
import { useTranslation } from "next-i18next";
import { IGameArgs } from "fbg-games/gamesShared/definitions/game";
import { gameBoardWrapper } from "infra/games/GameBoardWrapper";
import { Local } from "boardgame.io/multiplayer";

interface AiGameProps {
  gameId: string;
  params: UrlParams;
  name: string;
}

const AiGame: NextPage<any> = function (props: AiGameProps) {
  const t = useTranslation("Game").t;
  const players = [
    { playerID: 0, name: t("computer") },
    { playerID: 1, name: t("you") },
  ];
  const gameArgs: IGameArgs = {
    gameCode: props.gameId,
    mode: GameMode.AI,
    lang: props.params.lang,
    name: props.name,
    players,
  };
  const board = require(`fbg-games/${props.gameId}/board`).default;
  const game = require(`fbg-games/${props.gameId}/game`).default;
  const aiConfig = require(`fbg-games/${props.gameId}/ai`).default;
  // TODO(vdf): Add customization back #launch-blocker
  const customization = {};
  const gameAIConfig = aiConfig?.bgioAI(customization);
  const ai = gameAIConfig?.ai || gameAIConfig?.bot || gameAIConfig;
  const App = Client({
    board: gameBoardWrapper({ gameArgs, board }),
    multiplayer: Local({ bots: { "0": gameAIConfig.type || ai } }),
    game: {
      ...game,
      ai,
    },
    debug: false,
  });
  return <App playerID={"1"} />;
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
): Promise<{ props: AiGameProps }> {
  const { lang, gameCode } = path.params;
  const gameId = await getGameIdFromCode(lang, gameCode);
  const gameYaml = await loadGameYaml(gameId);
  const summary = parseGameSummary(gameYaml, lang, gameCode);
  return {
    props: {
      gameId,
      params: path.params,
      name: summary.name,
      ...(await serverSideTranslations(lang, [
        "Game",
        "GameOver",
        `game-${gameId}`,
      ])),
    },
  };
}

export const getStaticPaths = getGameStaticPaths;

export default AiGame;
