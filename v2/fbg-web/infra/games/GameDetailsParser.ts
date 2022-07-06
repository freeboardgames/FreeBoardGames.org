import YAML from "js-yaml";
import { GameMode } from 'fbg-games/gamesShared/definitions/mode';

export interface GameInstructions {
  text: string;
  videoId?: string;
}

export interface GameDetails {
  contributors: string[];
  instructions: GameInstructions;
  modes: GameMode[];
}

const parseGameInstructions = function (
  gameDef: any,
  lang: string,
  gameId: string
) {
  const i18nGame = gameDef[lang];
  if (!("instructions" in i18nGame)) {
    throw new Error(
      `instructions configuration missing for ${gameId} and ${lang}`
    );
  }
  const text = i18nGame.instructions.text;
  if (typeof text !== "string" || text.length === 0) {
    throw new Error(`Invalid instruction text for ${gameId} and ${lang}`);
  }
  return {
    text,
    videoId: i18nGame.instructions.videoId,
  };
};

const parseGameContributors = function (
  gameDef: any,
  gameId: string
): string[] {
  if (!("contributors" in gameDef)) {
    throw new Error(`contributors configuration missing for ${gameId}`);
  }
  const result = [];
  for (const contributor of gameDef.contributors) {
    if (typeof contributor !== "string") {
      throw new Error(
        `contributors usernames need to be a string for ${gameId}`
      );
    }
    result.push(contributor);
  }
  return result;
};

const parseGameModes = function (gameDef: any, gameId: string): GameMode[] {
  if (!("modes" in gameDef)) {
    throw new Error(`modes configuration missing for ${gameId}`);
  }
  const result = [];
  for (const rawMode of gameDef["modes"]) {
    switch (rawMode) {
      case "OnlineFriend":
        result.push(GameMode.OnlineFriend);
        break;
      case "LocalFriend":
        result.push(GameMode.LocalFriend);
        break;
      case "AI":
        result.push(GameMode.AI);
        break;
      default:
        throw new Error(`Invalid game mode "${rawMode}" on ${gameId}`);
    }
  }
  return result;
};

export const parseGameDetails = function (
  gameYaml: string,
  lang: string,
  gameId: string
): GameDetails {
  const gameDef = YAML.load(gameYaml) as any;
  const modes = parseGameModes(gameDef, gameId);
  const contributors = parseGameContributors(gameDef, gameId);
  const instructions = parseGameInstructions(gameDef, lang, gameId);
  return {
    modes,
    contributors,
    instructions,
  };
};
