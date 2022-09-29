import type { NextPage } from "next";
import {
  GameUrlParams,
  GameUrlPath,
  getGameStaticPaths,
} from "infra/misc/gameStaticPaths";
import { getGameIdFromCode } from "infra/i18n/I18nGetGameId";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useServer } from "infra/hooks/useServer";
import { useLogin } from "infra/hooks/useLogin";
import { NicknamePrompt } from "infra/widgets/NicknamePrompt";
import { FreeBoardGamesBar } from "fbg-games/gamesShared/components/fbg/FreeBoardGamesBar";
import { LoadingMessage } from "infra/alert/LoadingMessage";

export const getStaticPaths = getGameStaticPaths;

interface NewGameProps {
  gameId: string;
  params: GameUrlParams;
}

const NewGame: NextPage<any> = function (props: NewGameProps) {
  const [login, setLogin] = useLogin();
  const server = useServer();
  if (!login.loaded) {
    return <LoadingMessage />;
  }
  if (!login.loggedIn) {
    return <FreeBoardGamesBar><NicknamePrompt setNickname={setLogin} /></FreeBoardGamesBar>;
  }
  const nickname = login.nickname!;
  return (
    <>
      <p>nickname: {nickname}</p>
      <p>resolved: {JSON.stringify(server.resolved)}</p>
      <p>serversDown: {JSON.stringify(server.serversDown)}</p>
      <p>hostname: {server.hostname}</p>
      <p>index: {server.index}</p>
    </>
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
      ...(await serverSideTranslations(lang, ["NicknamePrompt", "LoadingMessage", "Game", `game-${gameId}`])),
    },
  };
}

export default NewGame;
