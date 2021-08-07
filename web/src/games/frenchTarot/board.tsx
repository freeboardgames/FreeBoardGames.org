import * as React from 'react';
import { IGameArgs } from 'gamesShared/definitions/game';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { isLocalGame } from 'gamesShared/helpers/gameMode';
import { Ctx } from 'boardgame.io';
import { IScore, Scoreboard } from 'gamesShared/components/scores/Scoreboard';

import { Board } from './components/GameBoard';

import { Phases, IGameMoves, IG, IPlayer, IRoundSummary } from './engine/types';
import * as util from './engine/util';

export class BgioBoard extends React.Component<
  {
    G: IG;
    ctx: Ctx;
    moves: IGameMoves;
    playerID: string;
    gameArgs?: IGameArgs;
  },
  {}
> {
  render() {
    return this.props.ctx.gameover ? this.renderGameOver() : this.renderBoard();
  }

  renderBoard() {
    const G = this.props.G;
    const ctx = this.props.ctx;
    const moves = this.props.moves;
    const playerID = this.playerID();
    const player = G.players.find((P) => P.id === playerID);
    const prevTrick = G.resolvedTricks.length > 1 ? G.resolvedTricks[G.resolvedTricks.length - 1] : G.trick;

    const roundSummary: IRoundSummary =
      ctx.phase == Phases.round_end && G.roundSummaries.length > 0
        ? G.roundSummaries[G.roundSummaries.length - 1]
        : null;

    return (
      <GameLayout gameArgs={this.props.gameArgs} allowWiderScreen={true}>
        <Board
          player={player}
          players={G.players}
          playerNames={G.players.map((P) => this.playerName(P.id))}
          slam={G.announcedSlam}
          currentPlayerId={ctx.currentPlayer}
          kitty={G.kitty}
          kittyRevealed={G.kittyRevealed}
          trick={G.trick}
          prevTrick={prevTrick}
          calledCard={G.calledCard}
          selectableCards={selectableCards(G, ctx, playerID)}
          roundSummary={roundSummary}
          selectCards={canSelectCards(ctx, player) ? moves.SelectCards : null}
          selectBid={canBid(ctx, player) ? moves.MakeBid : null}
          callCard={this.playerPhase() == Phases.calling ? moves.Call : null}
          announceSlam={canAnnounceSlam(ctx, player) ? moves.AnnounceSlam : null}
          declarePoignee={this.playerStage() == 'declare_poignee' ? moves.DeclarePoignee : null}
          discard={canDiscard(ctx, player) ? moves.Discard : null}
          endGame={moves.Finish}
        />
      </GameLayout>
    );
  }

  renderGameOver() {
    const scores: IScore[] = this.props.G.players.map((P) => ({ playerID: P.id, score: P.score }));
    scores.sort((a, b) => b.score - a.score);
    const player = this.props.G.players.find((P) => P.id === this.playerID());
    const scoreboard = (
      <Scoreboard scoreboard={scores} players={this.props.gameArgs.players} playerID={this.props.ctx.playerID} />
    );
    return (
      <GameLayout
        gameOver={player.score > scores[0].score ? 'you won' : 'you lost'}
        extraCardContent={scoreboard}
        gameArgs={this.props.gameArgs}
      />
    );
  }

  playerID(): string {
    return isLocalGame(this.props.gameArgs) ? this.props.ctx.currentPlayer : this.props.playerID;
  }

  playerIndex(id: string = this.playerID()): number {
    return this.props.ctx.playOrder.indexOf(id);
  }

  playerName(id: string = this.playerID()): string {
    return this.props.gameArgs ? this.props.gameArgs.players[this.playerIndex(id)].name : `Player ${id}`;
  }

  playerPhase(): string {
    return this.props.ctx.currentPlayer === this.playerID() && this.props.ctx.phase;
  }

  playerStage(): string {
    return this.props.ctx.activePlayers && this.props.ctx.activePlayers[this.playerIndex()];
  }
}

function selectableCards(G: IG, ctx: Ctx, playerId: string): boolean[] {
  const player = util.getPlayerById(G, playerId);
  const stage = ctx.activePlayers && ctx.activePlayers[parseInt(playerId)];
  if (ctx.currentPlayer == playerId) {
    if (stage == 'declare_poignee') {
      return util.Poignee.selectableCards(G, playerId);
    } else if (ctx.phase == Phases.discard) {
      return util.Discard.selectableCards(G, playerId);
    } else if (ctx.phase == Phases.placement) {
      return util.Placement.selectableCards(G, playerId);
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

function canAnnounceSlam(ctx: Ctx, player: IPlayer): boolean {
  if (ctx.currentPlayer != player.id) return false;
  return player.isTaker && ctx.phase == Phases.announce_slam;
}
