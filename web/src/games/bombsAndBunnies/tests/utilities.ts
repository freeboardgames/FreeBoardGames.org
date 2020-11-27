import { Ctx } from 'boardgame.io';
import { _ClientImpl } from 'boardgame.io/dist/types/src/client/client';
import { IG, IGameMoves, CardType } from '../engine/interfaces';
import { getPlayerById } from '../engine/stateExtensions';

export function getTypedMoves(player: _ClientImpl<any>): IGameMoves {
  return player.moves as any;
}

export function getTypedState(player: _ClientImpl<any>): { G: IG; ctx: Ctx } {
  return player.getState();
}

export function getBombHandIndex(player: _ClientImpl<any>): number {
  var { G } = getTypedState(player);

  var gamePlayer = getPlayerById(G, player.playerID);
  return gamePlayer.hand.findIndex((c) => c == CardType.Bomb);
}

export function getBunnyHandIndex(player: _ClientImpl<any>): number {
  var { G } = getTypedState(player);

  var gamePlayer = getPlayerById(G, player.playerID);
  return gamePlayer.hand.findIndex((c) => c == CardType.Bunny);
}

export function PlaceBunnyCard(player: _ClientImpl<any>): void {
  getTypedMoves(player).PlaceCard(getBunnyHandIndex(player));
}

export function PlaceBombCard(player: _ClientImpl<any>): void {
  getTypedMoves(player).PlaceCard(getBombHandIndex(player));
}

export function DiscardOwnBunnyCard(player: _ClientImpl<any>): void {
  getTypedMoves(player).Discard(player.playerID, getBunnyHandIndex(player));
}

export function DiscardOwnBombCard(player: _ClientImpl<any>): void {
  getTypedMoves(player).Discard(player.playerID, getBombHandIndex(player));
}
