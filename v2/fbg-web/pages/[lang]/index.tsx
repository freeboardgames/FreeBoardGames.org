import type { NextPage } from 'next';
import gamesJson from 'fbg-games/games.json';
import { loadGameYaml } from '../../infra/games/GameLoader';
import { parseGameSummary, GameSummary } from '../../infra/games/GameSummaryParser';
import { loadI18nConfig } from '../../infra/i18n/I18nConfigLoader';
import { parseI18nConfig } from '../../infra/i18n/I18nConfigParser';
import languages from '../../public/locales/languages.json';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

interface HomeProps {
  lang: string;
  playVerb: string;
  gameSummaries: GameSummary[];
}

const Home: NextPage<HomeProps> = function (props: HomeProps) {
  const { t } = useTranslation('Home');
  const summaries = props.gameSummaries;
  const links = summaries.map((g) => { 
   const link = `/${props.lang}/${props.playVerb}/${g.code}`;
   return <li key={g.id}><a href={link}>{g.name}: {g.callout}</a></li>;
  });
  return (
    <>
      <h1>{t('title')}</h1>
      <ul>
        {links}
      </ul>
    </>
  )
}

export async function getStaticProps({ params }: { params: {lang: string}}): Promise<{ props: HomeProps }> {
  const gameSummaries = await Promise.all(gamesJson.map(async (gameId) => { 
    const gameYaml = await loadGameYaml(gameId);
    return parseGameSummary(gameYaml, params.lang, gameId);
  }));
  const langDetails = parseI18nConfig((await loadI18nConfig()))[params.lang];
  return {
    props: {
      ...await serverSideTranslations(params.lang, ['Home']), 
      lang: params.lang,
      playVerb: langDetails.playVerb,
      gameSummaries
    },
  }
}

export async function getStaticPaths() {
  const paths =  languages .map((lang: string) => ({ params: { lang }}))
  return { paths, fallback: false };
}

export default Home;
