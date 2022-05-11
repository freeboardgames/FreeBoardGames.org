import type { NextPage } from 'next'
import Head from 'next/head'
import gamesJson from 'fbg-games/games.json';
import { loadGameYaml } from '../infra/games/GameLoader';
import { parseGameSummary, GameSummary } from '../infra/games/GameSummaryParser';

interface HomeProps {
  gameSummaries: GameSummary[];
}

// Hard coded values for now
const PLAY = 'play';
const GAME = 'tictactoe';
const LANG = 'en'; 

const Home: NextPage<HomeProps> = (props: HomeProps) => {
  const summaries = props.gameSummaries;
  const links = summaries.map((g) => { 
   const link = `/${LANG}/${PLAY}/${GAME}`;
   return <li key={g.id}><a href={link}>{g.name}: {g.callout}</a></li>;
  });
  return (
    <>
      <h1>Games</h1>
      <ul>
        {links}
      </ul>
    </>
  )
}

export async function getStaticProps(): Promise<{ props: HomeProps }> {
  const gameSummaries = await Promise.all(gamesJson.map(async (gameId) => { 
    const gameYaml = await loadGameYaml(gameId);
    return parseGameSummary(gameYaml, LANG, gameId);
  }));
  return {
    props: {
      gameSummaries
    },
  }
}

export default Home;
