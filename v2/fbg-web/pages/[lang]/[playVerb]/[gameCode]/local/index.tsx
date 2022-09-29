import { loadGameYaml } from "infra/games/GameLoader";
import { getGameIdFromCode } from "infra/i18n/I18nGetGameId";
import { Client } from "boardgame.io/react";
import { GameMode } from "fbg-games/gamesShared/definitions/mode";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { NextPage } from "next";
import { gameBoardWrapper } from "infra/games/GameBoardWrapper";
import { IGameArgs } from "fbg-games/gamesShared/definitions/game";
import { useTranslation } from "next-i18next";
import { parseGameSummary } from "infra/games/GameSummaryParser";
import {
  GameUrlParams,
  GameUrlPath,
  getGameStaticPaths,
} from "infra/misc/gameStaticPaths";
import { GameCustomizationState } from "fbg-games/gamesShared/definitions/customization";
import { useEffect, useState } from "react";
import { getGameCustomization } from "infra/settings/GameCustomization";
import { LoadingMessage } from "infra/alert/LoadingMessage";
import { Ctx } from "boardgame.io";

interface LocalGameProps {
  gameId: string;
  params: GameUrlParams;
  name: string;
}

interface LocalGameState {
  customization: GameCustomizationState | null;
}
const LocalGame: NextPage<any> = function (props: LocalGameProps) {
  const initialState: LocalGameState = { customization: null };
  const [state, setState] = useState(initialState);
  const t = useTranslation("Game").t;
  useEffect(() => {
    const newState = { customization: getGameCustomization(props.gameId).AI };
    setState(() => newState);
  }, [props.gameId]);
  if (!state.customization) {
    return <LoadingMessage />;
  }
  const customization = state.customization;
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
  const setup = (ctx: Ctx) => game.setup?.(ctx, customization);
  const App = Client({
    board: gameBoardWrapper({ gameArgs, board }),
    game: {
      ...game,
      setup,
    },
    debug: false,
  });
  return <App />;
};

export async function getStaticProps(
  path: GameUrlPath
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
      ...(await serverSideTranslations(lang, [
        "Game",
        "GameOver",
        "LoadingMessage",
        `game-${gameId}`,
      ])),
    },
  };
}

export const getStaticPaths = getGameStaticPaths;

export default LocalGame;
