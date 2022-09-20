import type { NextPage } from "next";
import {
  GameUrlParams,
  GameUrlPath,
  getGameStaticPaths,
} from "infra/misc/gameStaticPaths";
import { getGameIdFromCode } from "infra/i18n/I18nGetGameId";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useServer } from "infra/hooks/useServer";

export const getStaticPaths = getGameStaticPaths;

interface NewGameProps {
  gameId: string;
  params: GameUrlParams;
}

const NewGame: NextPage<any> = function (props: NewGameProps) {
  const server = useServer();
  return (
    <h1>
      resolved: {JSON.stringify(server.resolved)} serversDown:{" "}
      {JSON.stringify(server.serversDown)} hostname: {server.hostname}
    </h1>
  );
};

export async function getStaticProps(
  path: GameUrlPath
): Promise<{ props: NewGameProps }> {
  const { lang, gameCode } = path.params;
  const gameId = await getGameIdFromCode(lang, gameCode);
  return {
    props: {
      gameId,
      params: path.params,
      ...(await serverSideTranslations(lang, ["Game", `game-${gameId}`])),
    },
  };
}

export default NewGame;
