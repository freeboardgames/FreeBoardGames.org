import languages from "../../../public/locales/languages.json";
import type { NextPage } from "next";
import { useRouter } from "next/router";

interface MatchProps {
  lang: string;
}

const Match: NextPage<MatchProps> = function (props: MatchProps) {
  const router = useRouter();
  const s = router.query.s ? parseInt(router.query.s as string) : undefined;
  const i = router.query.i;
  // Do not require login to watch a match.
  return (
    <h1>
      <>
        MATCH lang: {props.lang} i: {i} nickname:{" "}
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
