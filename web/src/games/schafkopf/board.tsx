import * as React from 'react';
import { IGameArgs } from 'gamesShared/definitions/game';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { isLocalGame } from 'gamesShared/helpers/gameMode';
import { Ctx } from 'boardgame.io';
import { IScore, Scoreboard } from 'gamesShared/components/scores/Scoreboard';
import { useCurrentGameTranslation } from 'infra/i18n';

import { Board } from './components/GameBoard';

import { Phases, IGameMoves, IG, IPlayer } from './types';
import * as util from './util/misc';
import * as u_discard from './util/discard';
import * as u_placement from './util/placement';

export function BgioBoard(props: { G: IG; ctx: Ctx; moves: IGameMoves; playerID: string; gameArgs?: IGameArgs }) {
  const { translate } = useCurrentGameTranslation();
  const playerID = isLocalGame(props.gameArgs) ? props.ctx.currentPlayer : props.playerID;
  const playerPhase = props.ctx.currentPlayer === playerID && props.ctx.phase;

  function renderBoard() {
    const G = props.G;
    const ctx = props.ctx;
    const moves = props.moves;
    const player = G.players.find((P) => P.id === playerID);
    let prevTrick = G.trick;
    if (G.resolvedTricks.length > (util.kittySize(ctx.numPlayers) > 0 ? 1 : 0)) {
      prevTrick = G.resolvedTricks[G.resolvedTricks.length - 1];
    }

    return (
      <GameLayout gameArgs={props.gameArgs} maxWidth="1500px">
        <Board
          player={player}
          players={G.players}
          playerNames={G.players.map((P) => playerName(P.id))}
          contract={G.contract}
          currentPlayerId={ctx.currentPlayer}
          kitty={G.kitty}
          kittyRevealed={G.kittyRevealed || player.isTaker}
          kittyPrev={G.kittyPrev}
          trick={G.trick}
          prevTrick={prevTrick}
          calledCard={G.calledCard}
          selectableCards={selectableCards(G, ctx, playerID)}
          roundSummaries={G.roundSummaries}
          showRoundSummary={ctx.phase == Phases.round_end && G.roundSummaries.length > 0}
          selectCards={canSelectCards(ctx, player) ? moves.SelectCards : null}
          selectBid={canBid(ctx, player) ? moves.MakeBid : null}
          callCard={playerPhase == Phases.calling ? moves.Call : null}
          discard={canDiscard(ctx, player) ? moves.Discard : null}
          endGame={moves.Finish}
        />
      </GameLayout>
    );
  }

  function renderGameOver() {
    const scores: IScore[] = props.G.players.map((P) => ({ playerID: P.id, score: P.score }));
    scores.sort((a, b) => b.score - a.score);
    const player = props.G.players.find((P) => P.id === playerID);
    const scoreboard = (
      <Scoreboard scoreboard={scores} players={props.gameArgs.players} playerID={props.ctx.playerID} />
    );
    return (
      <GameLayout
        gameOver={player.score > scores[0].score ? translate('gameover_you_won') : translate('gameover_you_lost')}
        extraCardContent={scoreboard}
        gameArgs={props.gameArgs}
      />
    );
  }

  function playerIndex(id: string = playerID): number {
    return props.ctx.playOrder.indexOf(id);
  }

  function playerName(id: string = playerID): string {
    return props.gameArgs ? props.gameArgs.players[playerIndex(id)].name : translate('player_n', { n: id });
  }

  return props.ctx.gameover ? renderGameOver() : renderBoard();
}

function selectableCards(G: IG, ctx: Ctx, playerId: string): boolean[] {
  const player = util.getPlayerById(G, playerId);
  if (ctx.currentPlayer == playerId) {
    if (ctx.phase == Phases.discard) {
      return u_discard.selectableCards(G, playerId);
    } else if (ctx.phase == Phases.placement) {
      return u_placement.selectableCards(G, playerId);
    }
  }
  return player.hand.map(() => false);
}

function canSelectCards(ctx: Ctx, player: IPlayer): boolean {
  if (ctx.currentPlayer != player.id) return false;
  return ctx.phase == Phases.discard ? player.isTaker : ctx.phase == Phases.placement;
}

function canBid(ctx: Ctx, player: IPlayer): boolean {
  if (ctx.currentPlayer != player.id || ctx.phase != Phases.bidding) {
    return false;
  }
  return player.bid != 0;
}

function canDiscard(ctx: Ctx, player: IPlayer): boolean {
  if (ctx.currentPlayer != player.id) return false;
  return player.isTaker && ctx.phase == Phases.discard;
}
