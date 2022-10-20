import languages from "../../../public/locales/languages.json";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useServer } from "infra/hooks/useServer";
import { LoadingMessage } from "infra/alert/LoadingMessage";
import { useLogin } from "infra/hooks/useLogin";
import { FreeBoardGamesBar } from "fbg-games/gamesShared/components/fbg/FreeBoardGamesBar";
import { NicknamePrompt } from "infra/widgets/NicknamePrompt";

interface MatchProps {
  lang: string;
}

const Match: NextPage<MatchProps> = function (props: MatchProps) {
  const router = useRouter();
  const s = router.query.s ? parseInt(router.query.s as string) : undefined;
  const i = router.query.i;
  const server = useServer(s);
  const [login, setLogin] = useLogin();
  // useCredential
  if (!server.resolved || !login.loaded) {
    return <LoadingMessage />;
  }
  return (
    <h1>
      <>
        MATCH lang: {props.lang} i: {i} server: {server.hostname} nickname:{" "}
        {login.nickname}
      </>
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

export default Match;
