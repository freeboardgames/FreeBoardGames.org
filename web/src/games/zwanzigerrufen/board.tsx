import * as React from 'react';
import { Ctx } from 'boardgame.io';
import { IGameArgs } from 'gamesShared/definitions/game';
import { Pattern } from 'gamesShared/definitions/cards';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { Hand } from 'gamesShared/components/cards/Hand';
import { PreviousTrick } from 'gamesShared/components/cards/PreviousTrick';
import { DisplayCard } from 'gamesShared/components/cards/DisplayCard';
import { Trick } from 'gamesShared/components/cards/Trick';
import { ButtonBar } from 'gamesShared/components/cards/ButtonBar';
import { PlayerZones } from 'gamesShared/components/cards/PlayerZones';
import { RoundScores } from 'gamesShared/components/cards/RoundScores';
import { IScore, Scoreboard } from 'gamesShared/components/scores/Scoreboard';
import { isLocalGame } from 'gamesShared/helpers/gameMode';
import { useCurrentGameTranslation } from 'infra/i18n';

import css from './board.module.css';

import { Contract, Announcement, Phases, IGameMoves, IG } from './types';
import * as util from './util/misc';
import * as u_placement from './util/placement';

export function BgioBoard(props: { G: IG; ctx: Ctx; moves: IGameMoves; playerID: string; gameArgs?: IGameArgs }) {
  const { translate } = useCurrentGameTranslation();
  const [declinedContra, setDeclinedContra] = React.useState(false);
  const spectatorMode = !props.playerID && !isLocalGame(props.gameArgs);

  const G = props.G;
  const ctx = props.ctx;
  const moves = props.moves;
  const playerID = isLocalGame(props.gameArgs) ? ctx.currentPlayer : props.playerID || G.players[0].id;
  const playerIsTaker = playerID == G.takerId || playerID == G.partnerId;
  const player = { ...util.getPlayerById(G, playerID), isTaker: playerIsTaker };
  const playerPhase = ctx.currentPlayer === playerID && ctx.phase;
  const players = G.players.map((P) => (P.id == playerID ? player : P));
  const playerNames = players.map((P) => playerName(P.id));
  const showRoundSummary = ctx.phase == Phases.round_end && G.roundSummaries.length > 0;

  let prevTrick = G.trick;
  if (G.resolvedTricks.length > 0) {
    prevTrick = G.resolvedTricks[G.resolvedTricks.length - 1];
  }

  const handSize = 10;
  const playerHands = players.map((P, i) => {
    if (ctx.phase == Phases.round_end) {
      return G.deck.slice(i * handSize, (i + 1) * handSize).sort(util.cmpCards);
    } else {
      return P.hand.map(() => null);
    }
  });

  function renderBoard() {
    return (
      <GameLayout gameArgs={props.gameArgs} maxWidth="1500px">
        <div className={css.board}>
          <div className={css.upperBoard}>
            {renderRoundScores()}
            {renderCalledCard()}
            {renderPrevTrick()}
            {renderPlayerZones()}
            {renderTrick()}
            {renderButtonBar()}
          </div>
          <div className={css.lowerBoard}>{renderHand()}</div>
        </div>
      </GameLayout>
    );
  }

  function renderHand() {
    if (spectatorMode) {
      return (
        <div className={css.spectatorMsg}>
          <span>You are in spectator mode.</span>
        </div>
      );
    }
    let selectableCards: boolean[] = player.hand.map(() => false);
    if (playerPhase == Phases.placement) {
      selectableCards = u_placement.selectableCards(G, playerID);
    }
    return (
      <Hand
        hand={ctx.phase == Phases.round_end ? playerHands[+playerID] : player.hand}
        pattern={Pattern.Tarock}
        selectable={selectableCards}
        selection={[]}
        selectCards={playerPhase == Phases.placement ? moves.SelectCards : null}
      />
    );
  }

  function renderRoundScores() {
    const roundSummaries = G.roundSummaries.map((summary) => {
      const playerRoles = players.map((P) => {
        return P.id == summary.takerId || P.id == summary.partnerId;
      });
      const playerKeys = playerNames.map((_, i) => i);
      const rPlayers = playerKeys.filter((i) => playerRoles[i]).concat(playerKeys.filter((i) => !playerRoles[i]));
      const points = rPlayers.map((i) => {
        const rePoints = summary.rePoints;
        const isTaker = playerRoles[i];
        const requiredPoints = `(${isTaker ? summary.rePointsRequired : summary.contraPointsRequired})`;
        return `${isTaker ? rePoints : 88 - rePoints}${requiredPoints}`;
      });
      return {
        players: rPlayers,
        scoring: rPlayers.map((i) => summary.scoring[i].toString()),
        details: [
          {
            description: translate('scoreboard_points'),
            values: points,
          },
          {
            description: translate('scoreboard_basic'),
            values: rPlayers.map((i) => (playerRoles[i] ? `${summary.basic}` : '-')),
          },
          {
            description: translate('scoreboard_valat'),
            values: rPlayers.map((i) => (playerRoles[i] ? `${summary.valat}` : '-')),
          },
          {
            description: translate('scoreboard_absolut'),
            values: rPlayers.map((i) => (playerRoles[i] && !isNone(summary.absolut) ? `${summary.absolut}` : '-')),
          },
          {
            description: translate('scoreboard_kings'),
            values: rPlayers.map((i) => (playerRoles[i] && !isNone(summary.kings) ? `${summary.kings}` : '-')),
          },
          {
            description: translate('scoreboard_trull'),
            values: rPlayers.map((i) => (playerRoles[i] && !isNone(summary.trull) ? `${summary.trull}` : '-')),
          },
          {
            description: translate('scoreboard_pagat'),
            values: rPlayers.map((i) => (playerRoles[i] && !isNone(summary.pagat) ? `${summary.pagat}` : '-')),
          },
          {
            description: translate('scoreboard_mond'),
            values: rPlayers.map((i) => (playerRoles[i] && !isNone(summary.mond) ? `${summary.mond}` : '-')),
          },
        ],
      };
    });
    return (
      <RoundScores
        playerNames={playerNames}
        roundSummaries={roundSummaries}
        showRoundSummary={showRoundSummary}
        playerScores={players.map((p) => p.score)}
      />
    );
  }

  function renderPrevTrick() {
    const inGame = players.some((P) => P.isTaker) && prevTrick.cards.length > 0;
    if (!inGame) return;
    return (
      <PreviousTrick
        trick={prevTrick.cards}
        pattern={Pattern.Tarock}
        leaderPos={+prevTrick.leaderId}
        currPos={+playerID}
        numPlayers={players.length}
        isKitty={false}
      />
    );
  }

  function renderCalledCard() {
    if (!G.calledCard) return;
    const takerId = G.takerId || G.players.find((P) => P.bid == Contract.Normal).id;
    return (
      <DisplayCard
        description={translate('callcard_player_called', { name: playerNames[+takerId] })}
        card={G.calledCard}
        pattern={Pattern.Tarock}
      />
    );
  }

  function renderTrick() {
    const trick = G.trick.cards.length > 0 ? G.trick : prevTrick;
    return (
      <Trick
        trick={trick ? trick.cards : []}
        pattern={Pattern.Tarock}
        leaderPos={trick && trick.leaderId ? +trick.leaderId : 0}
        winnerPos={trick && trick.winnerId ? +trick.winnerId : -1}
        currPos={+playerID}
        numPlayers={players.length}
      />
    );
  }

  function renderButtonBar() {
    if (spectatorMode) return;
    const buttons = [renderButtonsBid(), renderButtonsAnnounce(), renderButtonsFinish()].filter((b) => b);
    return buttons.length > 0 ? buttons[0] : null;
  }

  function renderButtonsBid() {
    if (playerPhase != Phases.bidding || player.bid == Contract.Pass) return;
    const allowed_bids = util.allowedBids(players, playerID);
    const texts = allowed_bids.map((bid) => {
      let s = translate(util.getBidName(bid));
      if (bid == Contract.Normal) {
        const callCard = util.getCallCard(player.hand);
        s = `${s} (${util.getCalledNo(callCard)})`;
      }
      return s;
    });
    return (
      <ButtonBar
        click={allowed_bids.map((bid) => () => moves.MakeBid(bid))}
        texts={texts}
        red={allowed_bids.map((bid) => bid == Contract.Pass)}
      />
    );
  }

  function renderButtonsAnnounce() {
    if (playerPhase != Phases.announce) return;
    const allowed = util.allowedAnnouncements(G, playerID);
    const texts = allowed.map((A) => {
      if (A[0] == Announcement.Game) {
        return translate(util.getAnnounceLevelName(2 * G.announcementsRe.Game));
      }
      if (A[0] == Announcement.None) {
        return translate(util.getAnnouncementName(A[0]));
      }
      const announcements = playerIsTaker != A[1] ? G.announcementsRe : G.announcementsContra;
      const level = announcements[Announcement[A[0]]];
      let announceStr = translate(util.getAnnouncementName(A[0]));
      if (level > 0) {
        const levelStr = translate(util.getAnnounceLevelName(2 * level));
        announceStr = A[1] ? `${levelStr} ${announceStr}` : `${announceStr} (${levelStr})`;
      }
      return announceStr;
    });
    return (
      <ButtonBar
        click={allowed.map((A) => () => moves.Announce(A[0], A[1]))}
        texts={texts}
        red={allowed.map((A) => A[0] == Announcement.None)}
      />
    );
  }

  function renderButtonsFinish() {
    if (player.isReady) return;
    return (
      <ButtonBar
        click={[
          () => {
            if (declinedContra) {
              setDeclinedContra(false);
            }
            moves.Finish(false);
          },
          () => moves.Finish(true),
        ]}
        texts={[translate('roundend_next'), translate('roundend_quit')]}
        red={[false, true]}
        below={true}
        noWrap={true}
      />
    );
  }

  function renderPlayerZones() {
    const currentPlayerId = showRoundSummary ? null : ctx.currentPlayer;
    const currentLeaderId = showRoundSummary ? '' : G.trick.leaderId;
    const isActive = players.map((P) => {
      return (!currentPlayerId && !P.isReady) || P.id === currentPlayerId;
    });
    const bids = players.map((P) => (P.isTaker ? G.contract : P.bid));
    const bidStrings = bids.map((bid, i) => {
      const P = players[i];
      let s = '';
      if (bid == Contract.None || (bid == Contract.Pass && ctx.phase != Phases.bidding)) {
        const announceLevel = P.announcementsRe.Game;
        if (G.contract == null || announceLevel <= 1) return '';
        s = translate(util.getAnnounceLevelName(announceLevel));
      } else {
        s = translate(util.getBidName(bid));
        if (bid == Contract.Normal) s = `${s} (${util.getCalledNo(G.calledCard)})`;
      }
      return `«${s}»`;
    });
    const announcements = players.map((P) => {
      let allAnnouncements = [P.announcementsRe, P.announcementsContra].map((announcements, i) => {
        const contra = P.isTaker == (i == 1);
        return ['Absolut', 'Pagat', 'Valat']
          .filter((A) => announcements[A] > 0)
          .map((A) => {
            const announceStr = translate(util.getAnnouncementName(Announcement[A]));
            if (announcements[A] == 1) return announceStr;
            const levelStr = translate(util.getAnnounceLevelName(announcements[A]));
            return contra ? `${levelStr} ${announceStr}` : `${announceStr} (${levelStr})`;
          });
      });
      if (P.isTaker && P.announcementsRe.Game > 1) {
        const announceStr = translate(util.getAnnounceLevelName(P.announcementsRe.Game));
        allAnnouncements = [[announceStr], ...allAnnouncements];
      }
      return [].concat(...allAnnouncements).join(', ');
    });
    const biddingEnded = G.contract > Contract.None;
    const roundEnded = currentLeaderId == '';
    const numTakersKnown = players.filter((P) => P.isTaker).length;
    const takersKnown = G.contract > Contract.Solo || numTakersKnown == 2;
    return (
      <PlayerZones
        currentPlayerId={currentPlayerId}
        perspectivePlayerId={playerID}
        currentLeaderId={currentLeaderId}
        bids={bidStrings}
        bidPass={bids.map((bid) => ctx.phase == Phases.bidding && bid == Contract.Pass)}
        bidding={bids.map((bid) => (biddingEnded || bid < 0 ? -1 : bid == 0 ? 0 : 1))}
        announcements={announcements}
        names={playerNames}
        hands={playerHands.map((H, i) => (players[i].id == playerID && !spectatorMode ? null : H))}
        pattern={Pattern.Tarock}
        isActive={isActive}
        markActive={isActive.map((active) => biddingEnded && !roundEnded && active)}
        isDealer={players.map((P) => !roundEnded && P.isDealer)}
        isTaker={players.map((P) => biddingEnded && P.isTaker)}
        isOpponent={players.map((P) => biddingEnded && takersKnown && !P.isTaker)}
        isLeader={players.map((P) => !roundEnded && biddingEnded && P.id === currentLeaderId)}
        scores={players.map((P) => P.score.toString())}
        clockwise={true}
      />
    );
  }

  function renderGameOver() {
    const scores: IScore[] = players.map((P) => ({ playerID: P.id, score: P.score }));
    scores.sort((a, b) => b.score - a.score);
    const player = players.find((P) => P.id === playerID);
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

function isNone(value: number): boolean {
  return isNaN(value) || value === null;
}
