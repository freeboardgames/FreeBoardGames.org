import { Ctx } from 'boardgame.io';
import { _ClientImpl } from 'boardgame.io/dist/types/src/client/client';
import { IG, IGameMoves } from '../engine/interfaces';

export function getTypedMoves(player: _ClientImpl<any>): IGameMoves {
  return player.moves as any;
}

export function getTypedState(player: _ClientImpl<any>): { G: IG; ctx: Ctx } {
  return player.getState();
}
