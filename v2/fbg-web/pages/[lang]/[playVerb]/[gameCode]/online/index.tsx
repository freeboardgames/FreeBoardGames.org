import type { NextPage } from "next";
import {
  GameUrlParams,
  GameUrlPath,
  getGameStaticPaths,
} from "infra/misc/gameStaticPaths";
import { getGameIdFromCode } from "infra/i18n/I18nGetGameId";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
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
  const [login, setLogin] = useLogin();
  const newRoom = useNewRoom({
    nickname: login.nickname,
    numPlayers: 2,
    gameId: props.gameId,
  });
  if (!login.resolved) {
    return <LoadingMessage />;
  }
  if (!login.nickname) {
    return (
      <FreeBoardGamesBar>
        <NicknamePrompt setNickname={setLogin} />
      </FreeBoardGamesBar>
    );
  }
  if (!newRoom.resolved) {
    return <LoadingMessage />;
  }
  if (newRoom.error || !newRoom.result) {
    return (
      <MessagePage
        type="error"
        message={`Failed to create room: ${newRoom.error}`}
      />
    );
  }
  Router.replace({
    pathname: `/${props.params.lang}/room`,
    query: { s: newRoom.result.serverIndex, i: newRoom.result.roomID },
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
