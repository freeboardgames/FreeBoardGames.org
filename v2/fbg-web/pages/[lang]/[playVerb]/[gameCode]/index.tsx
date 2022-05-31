import type { NextPage } from 'next';
import gamesJson from 'fbg-games/games.json';
import { loadGameYaml } from '../../../../infra/games/GameLoader';
import { parseGameTranslations } from '../../../../infra/games/GameTranslationsParser';
import { loadI18nConfig } from '../../../../infra/i18n/I18nConfigLoader';
import { parseI18nConfig } from '../../../../infra/i18n/I18nConfigParser';
import { parseGameSummary } from '../../../../infra/games/GameSummaryParser';

interface GameInfoProps { 
  lang: string;
  playVerb: string;
  gameCode: string;
}

interface UrlParams {
  lang: string;
  playVerb: string;
  gameCode: string;
}

interface UrlPath {
  params: UrlParams;
}

const GameInfo: NextPage<GameInfoProps> = function(props: GameInfoProps) {
  return (
    <>
      <h1>Hello world!</h1>
      <p>lang: {props.lang}</p>
      <p>playVerb: {props.playVerb}</p>
      <p>gameCode: {props.gameCode}</p>
    </>
  )
}

export async function getStaticProps(path: UrlPath): Promise<{ props: GameInfoProps }> {
  return { props: path.params };
}

export async function getStaticPaths() {
  const i18nConfig = parseI18nConfig(await loadI18nConfig());
  const paths : UrlPath[] = [];
  for (const gameId of gamesJson) {
    const gameYaml = await loadGameYaml(gameId);
    const gameLanguages = parseGameTranslations(gameYaml, gameId);
    const allLanguages = ['en', ...Object.keys(gameLanguages)];
    for (const lang of allLanguages) {
      const gameSummary = parseGameSummary(gameYaml, lang, gameId);
      const gameCode = gameSummary.code;
      const playVerb = i18nConfig[lang].playVerb;
      paths.push({ params: { lang, playVerb, gameCode } });
    }
  } 
  return { paths, fallback: false };
}

export default GameInfo;