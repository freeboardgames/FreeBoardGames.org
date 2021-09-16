import * as React from 'react';
import { IGameArgs } from 'gamesShared/definitions/game';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { isLocalGame } from 'gamesShared/helpers/gameMode';
import { Ctx } from 'boardgame.io';
import { IScore, Scoreboard } from 'gamesShared/components/scores/Scoreboard';
import { useCurrentGameTranslation } from 'infra/i18n';

import { Board } from './components/GameBoard';

import { Announcement, Phases, Stages, IGameMoves, IG, IPlayer } from './types';
import * as util from './util/misc';
import * as u_discard from './util/discard';
import * as u_placement from './util/placement';

export function BgioBoard(props: { G: IG; ctx: Ctx; moves: IGameMoves; playerID: string; gameArgs?: IGameArgs }) {
  const { translate } = useCurrentGameTranslation();
  const ctx = props.ctx;
  const G = props.G;
  const playerID = isLocalGame(props.gameArgs) ? ctx.currentPlayer : props.playerID;
  const playerStage = ctx.activePlayers && ctx.activePlayers[playerIndex()];

  function renderBoard() {
    const moves = props.moves;
    const player = util.getPlayerById(G, playerID);
    const prevTrick = G.resolvedTricks.length > 1 ? G.resolvedTricks[G.resolvedTricks.length - 1] : G.trick;

    let cardsOuvert = [];
    if (ctx.phase == Phases.round_end) {
      cardsOuvert = G.takerCards.slice(0, 10);
    } else if (G.announcement == Announcement.Ouvert && !player.isTaker) {
      cardsOuvert = util.getPlayerById(G, G.takerId).hand;
    }

    return (
      <GameLayout gameArgs={props.gameArgs} maxWidth="1500px">
        <Board
          player={player}
          players={G.players}
          playerNames={G.players.map((P) => playerName(P.id))}
          holderId={G.holderId}
          contract={G.contract}
          announcement={G.announcement}
          handGame={G.hand}
          currentPlayerId={ctx.currentPlayer}
          kitty={G.kitty}
          kittyRevealed={G.kittyRevealed || (player.isTaker && G.hand === false)}
          kittyPrev={G.kittyPrev}
          cardsOuvert={cardsOuvert}
          trick={G.trick}
          prevTrick={prevTrick}
          trumpSuit={G.trumpSuit}
          selectableCards={selectableCards(G, ctx, playerID)}
          roundSummaries={G.roundSummaries}
          showRoundSummary={ctx.phase == Phases.round_end && G.roundSummaries.length > 0}
          selectCards={canSelectCards(ctx, player) ? moves.SelectCards : null}
          selectBid={canBid(ctx, player) ? moves.MakeBid : null}
          declareHand={playerStage == Stages.declare_hand ? moves.DeclareHand : null}
          selectContract={playerStage == Stages.select_contract ? moves.SelectContract : null}
          selectTrump={playerStage == Stages.select_trump ? moves.SelectTrumpSuit : null}
          announce={playerStage == Stages.announce ? moves.Announce : null}
          discard={canDiscard(ctx, player) ? moves.Discard : null}
          endGame={moves.Finish}
        />
      </GameLayout>
    );
  }

  function renderGameOver() {
    const scores: IScore[] = G.players.map((P) => ({ playerID: P.id, score: P.score }));
    scores.sort((a, b) => b.score - a.score);
    const player = G.players.find((P) => P.id === playerID);
    const scoreboard = <Scoreboard scoreboard={scores} players={props.gameArgs.players} playerID={ctx.playerID} />;
    return (
      <GameLayout
        gameOver={player.score > scores[0].score ? translate('gameover_you_won') : translate('gameover_you_lost')}
        extraCardContent={scoreboard}
        gameArgs={props.gameArgs}
      />
    );
  }

  function playerIndex(id: string = playerID): number {
    return ctx.playOrder.indexOf(id);
  }

  function playerName(id: string = playerID): string {
    return props.gameArgs ? props.gameArgs.players[playerIndex(id)].name : translate('player_n', { n: id });
  }

  return ctx.gameover ? renderGameOver() : renderBoard();
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
