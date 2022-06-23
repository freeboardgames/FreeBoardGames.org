import gamesJson from 'fbg-games/games.json';
import { loadGameYaml } from '../games/GameLoader';
import { parseGameSummary } from '../games/GameSummaryParser';

interface GameIdCode {
  gameId: string;
  code: string;
}

export async function getGameIdFromCode(lang: string, code: string) {
  const matchingCodes = await gamesJson.map(async (gameId) => {
      const gameYaml = await loadGameYaml(gameId);
      const gameSummary = parseGameSummary(gameYaml, lang, gameId);
      return { gameId, code: gameSummary.code };
  }).filter(async (gameIdCode: Promise<GameIdCode>) => (await gameIdCode).code === code);
  if (matchingCodes.length !== 1) {
    throw new Error(`More than one game with ${code} code for ${lang}.`);
  }
  return (await matchingCodes[0]).gameId;
}