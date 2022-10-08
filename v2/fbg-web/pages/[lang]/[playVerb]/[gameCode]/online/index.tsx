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
    console.log("A");
    return <LoadingMessage />;
  }
  if (server.serversDown) {
    return (
      <MessagePage
        type="error"
        message={`Servers down: ${server.serversDown.join(", ")}`}
      />
    );
  }
  if (!login.loaded) {
    console.log("B");
    return <LoadingMessage />;
  }
  if (server.serversDown) {
    return <MessagePage type="error" message={`Servers down: ${server.serversDown.join(', ')}`} />;
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
  } else if (!newRoom.success) {
    return <MessagePage type="error" message={`Failed to create room`} />;
  }
  Router.push(
    `/${props.params.lang}/room?s=${server.index}&i=${newRoom.roomId}`
  }
  if (!newRoom.success) {
    return <MessagePage type="error" message={`Failed to create room`} />; 
  }
  
  return (
    <>
    </>
>>>>>>> 043b04c83f8a68483c0a664be48314bf12d27b3b
  );
  console.log("C");
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
