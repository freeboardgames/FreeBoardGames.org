import languages from "../../../public/locales/languages.json";
import type { NextPage } from "next";

interface RoomProps {
  lang: string;
}

const Room: NextPage<RoomProps> = function (props: RoomProps) {
  /*const router = useRouter();
  const s = router.query.s ? parseInt(router.query.s as string) : undefined;
  const i = router.query.i;
  const server = useServer(s);
  const [login, setLogin] = useLogin();
  const room = useRoom({
    gameId: 'tictactoe', // TODO: use await getGameIdFromCode(lang, gameCode); 
    roomId: router.query.i as string,
    nickname: login.nickname!,
    serverId: server.index!, 
    hostname: server.hostname! 
  });
  if (!server.resolved || !login.loaded) {
    return <LoadingMessage />;
  }
  if (!login.loggedIn) {
    return (
      <FreeBoardGamesBar>
        <NicknamePrompt setNickname={setLogin} />
      </FreeBoardGamesBar>
    );
  }
  if (room.matchStarted) {
    Router.replace({
      pathname: `/${props.lang}/match`,
      query: { s: router.query.s, i: router.query.i },
    });
    return <LoadingMessage />;
  }*/
  return (
    <h1>
      <pre>ROOM lang: {props.lang}</pre>
    </h1>
  );
};

export async function getStaticProps({
  params,
}: {
  params: { lang: string };
}): Promise<{ props: { lang: string } }> {
  return { props: { lang: params.lang } };
}

export async function getStaticPaths() {
  const paths = languages.map((lang: string) => ({ params: { lang } }));
  return { paths, fallback: false };
}

export default Room;
