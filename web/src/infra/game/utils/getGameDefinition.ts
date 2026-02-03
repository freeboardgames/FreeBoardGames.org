import { GAMES_LIST } from 'games';
import { IGameDef } from 'gamesShared/definitions/game';

const gameDictionaryByCodes = GAMES_LIST.reduce((games, game) => {
  games[game.code] = game;

  if (game.codes) {
    Object.entries(game.codes).forEach(([, code]) => {
      games[code] = game;
    });
  }

  return games;
}, {});

export const getGameDefinition = (gameCode: string): IGameDef => {
  return gameDictionaryByCodes[gameCode];
};

export const getAllGames = () => GAMES_LIST;

export const getGameCodeNamespace = (gameCode: string) => `games/${gameCode}`;

/**
 * Returns a JSON-serializable version of the game definition.
 * Removes function properties (config, aiConfig, customization) that cannot
 * be serialized for Next.js getServerSideProps.
 */
export interface ISerializableGameDef {
  code: string;
  codes?: IGameDef['codes'];
  name: string;
  contributors: string[];
  imageURL: string;
  description: string;
  descriptionTag: string;
  minPlayers: number;
  maxPlayers: number;
  modes: IGameDef['modes'];
  instructions?: IGameDef['instructions'];
  status: IGameDef['status'];
  translationStatus?: IGameDef['translationStatus'];
}

export const getSerializableGameDef = (gameDef: IGameDef): ISerializableGameDef => {
  // Build an object with only the serializable properties
  // Using JSON.parse(JSON.stringify()) ensures deep cloning and removes undefined values
  const serializableData: Record<string, unknown> = {
    code: gameDef.code,
    name: gameDef.name,
    contributors: [...gameDef.contributors],
    imageURL: gameDef.imageURL,
    description: gameDef.description,
    descriptionTag: gameDef.descriptionTag,
    minPlayers: gameDef.minPlayers,
    maxPlayers: gameDef.maxPlayers,
    modes: gameDef.modes.map((m) => ({ ...m })),
    status: gameDef.status,
  };

  // Only include optional properties if they exist, are truthy, and are serializable
  if (gameDef.codes && typeof gameDef.codes === 'object' && Object.keys(gameDef.codes).length > 0) {
    serializableData.codes = { ...gameDef.codes };
  }

  if (gameDef.instructions) {
    serializableData.instructions = { ...gameDef.instructions };
  }

  if (gameDef.translationStatus && typeof gameDef.translationStatus === 'object') {
    serializableData.translationStatus = { ...gameDef.translationStatus };
  }

  // Use JSON round-trip to ensure everything is serializable and remove any undefined values
  return JSON.parse(JSON.stringify(serializableData)) as ISerializableGameDef;
};
