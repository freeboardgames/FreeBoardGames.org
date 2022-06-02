import type { NextPage } from 'next';
import gamesJson from 'fbg-games/games.json';
import { loadGameYaml } from '../../../../infra/games/GameLoader';
import { parseGameTranslations } from '../../../../infra/games/GameTranslationsParser';
import { loadI18nConfig } from '../../../../infra/i18n/I18nConfigLoader';
import { parseI18nConfig } from '../../../../infra/i18n/I18nConfigParser';
import { GameSummary, parseGameSummary } from '../../../../infra/games/GameSummaryParser';
import { GameDetails, GameInstructions, GameMode, parseGameDetails } from '../../../../infra/games/GameDetailsParser';
import { ReactElement } from 'react';

interface GameInfoProps { 
  summary: GameSummary;
  details: GameDetails;
}

interface UrlParams {
  lang: string;
  playVerb: string;
  gameCode: string;
  gameId: string;
}

interface UrlPath {
  params: UrlParams;
}

const gameInstructionToCard = function(instructions: GameInstructions): ReactElement {
  let video = null;
  const videoId = instructions.videoId;
  if (videoId) {
    video = <p>
      <a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank">
        Watch video
      </a>
    </p>;
  }
  return (
    <>
      <p>{instructions.text}</p>
      {video}
    </>
  );
}

const gameModeToCard = function(mode: GameMode): ReactElement {
  switch (mode) {
    case GameMode.AI: 
      return <li>AI: <a href="#">Play!</a></li>;
    case GameMode.OnlineFriend: 
      return <li>Online Friend: <a href="#">Play!</a></li>;
    case GameMode.LocalFriend: 
      return <li>Local Friend: <a href="#">Play!</a></li>;
  }
}

const GameInfo: NextPage<GameInfoProps> = function(props: GameInfoProps) {
  const modeCards = props.details.modes.map(gameModeToCard);
  const instructions = gameInstructionToCard(props.details.instructions);
  const contributors = props.details.contributors.map((contributor) => (
    <li>
      <a href={`https://github.com/${contributor}`} target="_blank">
        {contributor}
      </a>
    </li>
  ));
  return (
    <>
      <h1>Play {props.summary.name}</h1>
      <div>
        <h2>Game Modes</h2>
        <ul>{modeCards}</ul>
      </div>
      <div>
        <h2>Instructions</h2>
        {instructions}
      </div>
      <div>
        <h2>Contributors</h2>
        <ul>
          {contributors}
        </ul>
      </div>
    </>
  )
}

export async function getStaticProps(path: UrlPath): Promise<{ props: GameInfoProps }> {
  const { lang, gameCode } = path.params;
  const gameYaml = await loadGameYaml(gameCode);
  const summary = parseGameSummary(gameYaml, lang, gameCode);
  const details = parseGameDetails(gameYaml, lang, gameCode);
  return { props: { summary, details } };
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
      paths.push({ params: { lang, playVerb, gameCode, gameId } });
    }
  } 
  return { paths, fallback: false };
}

export default GameInfo;