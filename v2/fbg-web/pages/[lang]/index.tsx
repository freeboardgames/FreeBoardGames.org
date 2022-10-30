import type { NextPage } from "next";
import gamesJson from "fbg-games/games.json";
import { loadGameYaml } from "../../infra/games/GameLoader";
import {
  parseGameSummary,
  GameSummary,
} from "../../infra/games/GameSummaryParser";
import { loadI18nConfig } from "../../infra/i18n/I18nConfigLoader";
import { parseI18nConfig } from "../../infra/i18n/I18nConfigParser";
import languages from "../../public/locales/languages.json";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import { FreeBoardGamesBar } from "fbg-games/gamesShared/components/fbg/FreeBoardGamesBar";
import { GameCard } from "fbg-web/infra/widgets/GameCard";
import css from "./index.module.css";
import {
  GameTranslationStatus,
  parseGameTranslations,
} from "infra/games/GameTranslationsParser";

interface HomeProps {
  lang: string;
  playVerb: string;
  gameSummaries: GameSummary[];
}

const Home: NextPage<HomeProps> = function (props: HomeProps) {
  const { t } = useTranslation("Home");
  const summaries = props.gameSummaries;
  const games = summaries.map((g) => {
    const link = `/${props.lang}/${props.playVerb}/${g.code}`;
    return (
      <div className={css.Card} key={g.id}>
        <Link href={link}>
          <GameCard gameSummary={g} isLink={true} />
        </Link>
      </div>
    );
  });
  return (
    <FreeBoardGamesBar>
      <div className={css.Wrapper}>{games}</div>
    </FreeBoardGamesBar>
  );
};

export async function getStaticProps({
  params,
}: {
  params: { lang: string };
}): Promise<{ props: HomeProps }> {
  const gameSummaries = [];
  for (const gameId of gamesJson) {
    const gameYaml = await loadGameYaml(gameId);
    const translations = parseGameTranslations(gameYaml, gameId);
    const status = translations[params.lang];
    if (
      status != GameTranslationStatus.DONE &&
      status != GameTranslationStatus.PARTIAL &&
      params.lang != "en"
    ) {
      continue;
    }
    gameSummaries.push(parseGameSummary(gameYaml, params.lang, gameId));
  }
  const langDetails = parseI18nConfig(await loadI18nConfig())[params.lang];
  return {
    props: {
      ...(await serverSideTranslations(params.lang, ["Home"])),
      lang: params.lang,
      playVerb: langDetails.playVerb,
      gameSummaries,
    },
  };
}

export async function getStaticPaths() {
  const paths = languages.map((lang: string) => ({ params: { lang } }));
  return { paths, fallback: false };
}

export default Home;
