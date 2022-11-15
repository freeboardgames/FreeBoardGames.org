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
import { useNewRoom } from "infra/hooks/useNewRoom";
import MessagePage from "infra/alert/MessagePage";
import Router from "next/router";

export const getStaticPaths = getGameStaticPaths;

interface NewRoomProps {
  gameId: string;
  params: GameUrlParams;
}

const NewRoom: NextPage<any> = function (props: NewRoomProps) {
  const server = useServer();
  const [login, setLogin] = useLogin();
  const [newRoom, createNewRoom] = useNewRoom();
  if (!server.resolved) {
    return <LoadingMessage />;
  }
  if (server.error) {
    return (
      <MessagePage
        type="error"
        message={server.error}
      />
    );
  }
  if (!login.loaded) {
    return <LoadingMessage />;
  }
  if (!login.loggedIn) {
    return (
      <FreeBoardGamesBar>
        <NicknamePrompt setNickname={setLogin} />
      </FreeBoardGamesBar>
    );
  }
  const nickname = login.nickname!;
  if (!newRoom.loaded) {
    const hostname = server.hostname!;
    const gameId = props.gameId;
    const numPlayers = 2; // TODO: FIX THIS
    createNewRoom({ nickname, gameId, hostname, numPlayers });
    return <LoadingMessage />;
  }
  if (!newRoom.success || !newRoom.roomId) {
    return <MessagePage type="error" message={`Failed to create room`} />;
  }
  Router.replace({
    pathname: `/${props.params.lang}/room`,
    query: { s: server.index, i: newRoom.roomId },
  });
  return <LoadingMessage />;
};

export async function getStaticProps(
  path: GameUrlPath
): Promise<{ props: NewRoomProps }> {
  const { lang, gameCode } = path.params;
  const gameId = await getGameIdFromCode(lang, gameCode);
  return {
    props: {
      gameId,
      params: path.params,
      ...(await serverSideTranslations(lang, [
        "NicknamePrompt",
        "LoadingMessage",
        "Game",
        `game-${gameId}`,
      ])),
    },
  };
}

export default NewRoom;
