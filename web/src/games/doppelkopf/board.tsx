import * as React from 'react';
import { IGameArgs } from 'gamesShared/definitions/game';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { isLocalGame } from 'gamesShared/helpers/gameMode';
import { Ctx } from 'boardgame.io';
import { IScore, Scoreboard } from 'gamesShared/components/scores/Scoreboard';
import { useCurrentGameTranslation } from 'infra/i18n';

import { Board } from './components/GameBoard';

import { Contract, Phases, Stages, IGameMoves, Announcement, IG } from './types';
import * as u_placement from './util/placement';
import * as util from './util/misc';

export function BgioBoard(props: { G: IG; ctx: Ctx; moves: IGameMoves; playerID: string; gameArgs?: IGameArgs }) {
  const { translate } = useCurrentGameTranslation();
  const G = props.G;
  const ctx = props.ctx;
  const playerID = isLocalGame(props.gameArgs) ? props.ctx.currentPlayer : props.playerID;
  const playerPhase = ctx.currentPlayer === playerID && ctx.phase;
  const playerStage = ctx.activePlayers && ctx.activePlayers[playerIndex()];

  function renderBoard() {
    const moves = props.moves;
    const isTaker = playerID == G.takerId || playerID == G.partnerId;
    const player = { ...G.players.find((P) => P.id === playerID), isTaker: isTaker };

    let prevTrick = G.trick;
    if (G.resolvedTricks.length > 0) {
      prevTrick = G.resolvedTricks[G.resolvedTricks.length - 1];
    }

    let selectableCards: boolean[] = player.hand.map(() => false);
    if (playerPhase == Phases.placement) {
      selectableCards = u_placement.selectableCards(G, playerID);
    }

    const canBid = playerPhase == Phases.bidding && player.bid != Contract.Pass;

    let canAnnounce = false;
    if (ctx.phase == Phases.placement && G.contract != Contract.Marriage) {
      const announcement = isTaker ? G.announcementRe : G.announcementContra;
      if (announcement < Announcement.Schwarz) {
        const otherAnnouncement = isTaker ? G.announcementContra : G.announcementRe;
        let announceRank = util.announceRank(announcement);
        if (announcement == Announcement.None && otherAnnouncement > Announcement.None) {
          announceRank = util.announceRank(otherAnnouncement) + 1;
        }
        canAnnounce = player.hand.length >= 11 - announceRank - G.marriageShift;
      }
    }

    return (
      <GameLayout gameArgs={props.gameArgs} maxWidth="1500px">
        <Board
          player={player}
          players={G.players.map((P) => (P.id == player.id ? player : P))}
          playerNames={G.players.map((P) => playerName(P.id))}
          contract={G.contract}
          announcementRe={G.announcementRe}
          announcementContra={G.announcementContra}
          takerId={G.takerId}
          currentPlayerId={ctx.currentPlayer}
          trick={G.trick}
          prevTrick={prevTrick}
          trumpSuit={G.trumpSuit}
          selectableCards={selectableCards}
          roundSummaries={G.roundSummaries}
          showRoundSummary={ctx.phase == Phases.round_end && G.roundSummaries.length > 0}
          selectCards={playerPhase == Phases.placement ? moves.SelectCards : null}
          selectBid={canBid ? moves.MakeBid : null}
          selectTrump={playerStage == Stages.select_trump ? moves.SelectTrumpSuit : null}
          announce={canAnnounce ? moves.Announce : null}
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
        gameOver={player.score >= scores[0].score ? translate('gameover_you_won') : translate('gameover_you_lost')}
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
