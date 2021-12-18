import { IGameDef } from 'gamesShared/definitions/game';
import { GameMode } from 'gamesShared/definitions/mode';
import { TBgioPlayerId } from 'infra/types';

interface Match {
  bgioPlayerId: TBgioPlayerId;
}

export function validateMode(gameDef: IGameDef, mode: GameMode) {
  return () => {
    const validGameModes = gameDef.modes.map((mode) => mode.mode.toLowerCase());
    return validGameModes.includes(mode.toLowerCase());
  };
}

export function getPlayerID(match: Match, mode: GameMode): TBgioPlayerId | undefined {
  if (match) return match.bgioPlayerId;
  if (mode === GameMode.AI) return '1' as TBgioPlayerId;
}
