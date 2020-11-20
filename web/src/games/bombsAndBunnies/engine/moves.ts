import { INVALID_MOVE } from 'boardgame.io/core';
import { Ctx } from 'boardgame.io';
import { IG, CardType, Phases } from './interfaces';
import * as StateExtensions from './stateExtensions';

export function PlaceCard(G: IG, ctx: Ctx, handIndex: number) {
  const player = StateExtensions.getPlayerById(G, ctx.currentPlayer);
  if (player.hand.length <= handIndex) {
    return INVALID_MOVE;
  }

  const chosenCard = player.hand.splice(handIndex, 1)[0];
  player.stack.push(chosenCard);

  G.maxBet += 1;

  return G;
}

export function Bet(G: IG, ctx: Ctx, bet: number) {
  const player = StateExtensions.getPlayerById(G, ctx.currentPlayer);

  if (bet < G.minBet || bet > G.maxBet) {
    return INVALID_MOVE;
  }

  player.bet = bet;
  G.minBet = bet + 1;
  G.currentBet = bet;

  const maxBet = StateExtensions.getMaxPossibleBet(G);

  if (bet === maxBet) {
    ctx.events.endPhase();
  }

  return G;
}

export function SkipBet(G: IG, ctx: Ctx) {
  const player = StateExtensions.getPlayerById(G, ctx.currentPlayer);

  player.betSkipped = true;

  if (StateExtensions.hasEveryOtherPlayerSkippedBet(G)) {
    ctx.events.endPhase();
  }

  return G;
}

export function Reveal(G: IG, ctx: Ctx, targetPlayerId: string) {
  const currentPlayer = StateExtensions.getPlayerById(G, ctx.currentPlayer);
  const targetPlayer = StateExtensions.getPlayerById(G, targetPlayerId);

  if (targetPlayer.stack.length <= 0 || (currentPlayer.stack.length > 0 && targetPlayerId !== currentPlayer.id)) {
    return INVALID_MOVE;
  }

  const revealedCard = targetPlayer.stack.splice(targetPlayer.stack.length - 1, 1)[0];
  targetPlayer.revealedStack.push(revealedCard);

  if (revealedCard === CardType.Bomb) {
    G.bombPlayerId = targetPlayer.id;
    G.failedRevealPlayerId = ctx.currentPlayer;

    ctx.events.setPhase(Phases.penalty);
    return G;
  }

  const revealed = StateExtensions.getAllRevealedCards(G);
  if (revealed.length === currentPlayer.bet) {
    currentPlayer.wins++;
    G.lastWinningPlayerId = currentPlayer.id;
    ctx.events.setPhase(Phases.initial_placement);
  }

  return G;
}

export function Discard(G: IG, ctx: Ctx, targetPlayerId: string, handIndex: number) {
  if (
    !G.failedRevealPlayerId &&
    !G.bombPlayerId &&
    ctx.currentPlayer === G.bombPlayerId &&
    targetPlayerId === G.failedRevealPlayerId
  ) {
    return INVALID_MOVE;
  }

  const targetPlayer = StateExtensions.getPlayerById(G, targetPlayerId);
  if (targetPlayer.hand.length === 0) {
    return INVALID_MOVE;
  }

  targetPlayer.hand.splice(handIndex, 1);

  G.discardPile.push(targetPlayer.cardStyle);

  if (targetPlayer.hand.length === 0) {
    targetPlayer.isOut = true;
  }

  ctx.events.endPhase();

  return G;
}
