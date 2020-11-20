import { Ctx } from 'boardgame.io';
import { IG, IPlayer, Phases } from './interfaces';

const BetPhases = [Phases.place_or_bet, Phases.bet];
const PlacementPhases = [Phases.initial_placement, Phases.place_or_bet];
export const MaxPlayers = 6;

export enum Stages {
  select_card = 'select_card',
}

export function canPlaceCard(ctx: Ctx, playerId: string): boolean {
  return isCurrentPlayer(ctx, playerId) && PlacementPhases.map((p) => p.toString()).includes(ctx.phase);
}

export function canBet(G: IG, ctx: Ctx, playerId: string): boolean {
  return (
    isCurrentPlayer(ctx, playerId) &&
    BetPhases.map((x) => x.toString()).includes(ctx.phase) &&
    G.maxBet >= G.minBet &&
    G.minBet > 0
  );
}

export function canSkipBet(G: IG, ctx: Ctx, playerId: string): boolean {
  return (
    isCurrentPlayer(ctx, playerId) &&
    G.currentBet > 0 &&
    canBet(G, ctx, playerId) &&
    // in the 'place_or_bet' phase you cannot skip if you have nothing to place
    (ctx.phase !== Phases.place_or_bet || getPlayerById(G, playerId).hand.length > 0)
  );
}

export function isRevealing(ctx: Ctx): boolean {
  return ctx.phase === Phases.reveal.toString();
}

export function isBetting(ctx: Ctx): boolean {
  return ctx.phase === Phases.bet;
}

export function canRevealTargetStack(G: IG, ctx: Ctx, targetPlayerId: string) {
  const currentPlayer = getPlayerById(G, ctx.currentPlayer);
  const targetPlayer = getPlayerById(G, targetPlayerId);

  return (
    isRevealing(ctx) &&
    ((currentPlayer.id === targetPlayer.id && currentPlayer.stack.length > 0) ||
      (currentPlayer.stack.length === 0 && targetPlayer.stack.length > 0))
  );
}

export function canDiscard(G: IG, playerId: string): boolean {
  return G.bombPlayerId !== null && G.bombPlayerId === playerId;
}

export function getPlayerById(G: IG, playerId: string): IPlayer {
  return G.players.find((p) => p.id === playerId);
}

export function getMaxPossibleBet(G: IG) {
  return G.players.map((p) => p.stack.length).reduce((a, b) => a + b);
}

export function getMaxPlayerBet(players: IPlayer[]) {
  const playerBets = players.map((p) => p.bet).filter((b) => b !== null);

  return [...playerBets, 0].reduce((a, b) => (a >= b ? a : b));
}

export function getRevealCount(players: IPlayer[]) {
  const playerRevealCounts = players.map((p) => p.revealedStack.length);

  return [...playerRevealCounts, 0].reduce((a, b) => a + b);
}

// --------------------------

export function isCurrentPlayer(ctx: Ctx, playerId: string): boolean {
  return ctx.currentPlayer == playerId;
}

export function getPlayerWithMaxBet(G: IG): IPlayer {
  return getActivePlayers(G)
    .filter((p) => !p.betSkipped)
    .reduce((a, b) => (a.bet >= b.bet ? a : b));
}

export function getActivePlayers(G: IG): IPlayer[] {
  return G.players.filter((p) => !p.isOut);
}

export function hasEveryOtherPlayerSkippedBet(G: IG) {
  return getActivePlayers(G).filter((p) => !p.betSkipped).length === 1;
}

export function hasInitialPlacementFinished(G: IG) {
  return getActivePlayers(G).every((p) => p.stack.length === 1);
}

export function getPlayOrder(G: IG, ctx: Ctx) {
  return ctx.playOrder.filter((id) => !getPlayerById(G, id).isOut);
}

export function findWinner(G: IG) {
  const naturalWinner = G.players.find((p) => p.wins === 2);
  if (naturalWinner) return naturalWinner;

  const remainingPlayers = G.players.filter((p) => !p.isOut);
  if (remainingPlayers.length === 1) return remainingPlayers[0];
}

export function pickUpHand(G: IG) {
  for (let i = 0; i < G.players.length; i++) {
    const player = G.players[i];
    player.hand = player.hand.concat(player.stack).concat(player.revealedStack);
    player.hand.sort();
    player.stack = [];
    player.revealedStack = [];
  }
}

export function resetBets(G: IG) {
  G.minBet = 1;
  G.maxBet = 0;
  G.currentBet = 0;

  for (let i = 0; i < G.players.length; i++) {
    const player = G.players[i];
    player.betSkipped = false;
    player.bet = null;
  }
}

export function getAllRevealedCards(G: IG) {
  return getActivePlayers(G)
    .map((p) => p.revealedStack)
    .reduce((a, b) => a.concat(b));
}
