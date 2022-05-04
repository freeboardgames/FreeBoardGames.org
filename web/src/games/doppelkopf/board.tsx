import * as React from 'react';
import { Ctx } from 'boardgame.io';
import { IGameArgs } from 'gamesShared/definitions/game';
import { Pattern, Suit, ICard } from 'gamesShared/definitions/cards';
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

import { Contract, Phases, Stages, IGameMoves, Announcement, IG } from './types';
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
  const playerStage = ctx.activePlayers && ctx.activePlayers[playerIndex()];
  const players = G.players.map((P) => (P.id == player.id ? player : P));
  const playerNames = G.players.map((P) => playerName(P.id));
  const showRoundSummary = ctx.phase == Phases.round_end && G.roundSummaries.length > 0;

  let prevTrick = G.trick;
  if (G.resolvedTricks.length > 0) {
    prevTrick = G.resolvedTricks[G.resolvedTricks.length - 1];
  }

  const handSize = 12;
  const cmpCards = util.get_cmpCards(G.contract, G.trumpSuit);
  const playerHands = G.players.map((P, i) => {
    if (ctx.phase == Phases.round_end) {
      return G.deck.slice(i * handSize, (i + 1) * handSize).sort(cmpCards);
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
            {renderTrumpSuit()}
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
        hand={ctx.phase == Phases.round_end ? playerHands[+player.id] : player.hand}
        pattern={Pattern.Skat}
        selectable={selectableCards}
        selection={[]}
        selectCards={playerPhase == Phases.placement ? moves.SelectCards : null}
      />
    );
  }

  function renderRoundScores() {
    const roundSummaries = G.roundSummaries.map((summary) => {
      const playerRoles = G.players.map((P) => {
        return P.id == summary.takerId || P.id == summary.partnerId;
      });
      const playerKeys = playerNames.map((_, i) => i);
      const players = playerKeys.filter((i) => playerRoles[i]).concat(playerKeys.filter((i) => !playerRoles[i]));
      const points = players.map((i) => {
        const rePoints = summary.rePoints;
        const isTaker = playerRoles[i];
        const requiredPoints = `(${isTaker ? summary.rePointsRequired : summary.contraPointsRequired})`;
        return `${isTaker ? rePoints : 240 - rePoints}${requiredPoints}`;
      });
      return {
        players: players,
        scoring: players.map((i) => summary.scoring[i].toString()),
        details: [
          {
            description: translate('scoreboard_points'),
            values: points,
          },
          {
            description: translate('scoreboard_basic'),
            values: players.map((i) => (playerRoles[i] ? `${summary.basic}` : '-')),
          },
          {
            description: translate('scoreboard_re'),
            values: players.map((i) => (playerRoles[i] ? `${summary.re}` : '-')),
          },
          {
            description: translate('scoreboard_contra'),
            values: players.map((i) => (playerRoles[i] ? `${summary.contra}` : '-')),
          },
          {
            description: translate('scoreboard_charlie'),
            values: players.map((i) => (playerRoles[i] && !isNone(summary.charlie) ? `${summary.charlie}` : '-')),
          },
          {
            description: translate('scoreboard_doppelkopf'),
            values: players.map((i) => (playerRoles[i] && !isNone(summary.doppelkopf) ? `${summary.doppelkopf}` : '-')),
          },
          {
            description: translate('scoreboard_fox'),
            values: players.map((i) => (playerRoles[i] && !isNone(summary.fox) ? `${summary.fox}` : '-')),
          },
        ],
      };
    });
    return (
      <RoundScores
        playerNames={playerNames}
        roundSummaries={roundSummaries}
        showRoundSummary={showRoundSummary}
        playerScores={G.players.map((p) => p.score)}
      />
    );
  }

  function renderPrevTrick() {
    const inGame = G.players.some((P) => P.isTaker) && prevTrick.cards.length > 0;
    if (!inGame) return;
    return (
      <PreviousTrick
        trick={prevTrick.cards}
        pattern={Pattern.Skat}
        leaderPos={+prevTrick.leaderId}
        currPos={+player.id}
        numPlayers={players.length}
        isKitty={false}
      />
    );
  }

  function renderTrumpSuit() {
    if (G.trumpSuit === null || G.contract < Contract.Solo) return;
    const trumpCard: ICard = { suit: G.trumpSuit, value: 10 };
    return <DisplayCard description={translate('trumpsuit')} card={trumpCard} pattern={Pattern.Skat} />;
  }

  function renderTrick() {
    const trick = G.trick.cards.length > 0 ? G.trick : prevTrick;
    return (
      <Trick
        trick={trick ? trick.cards : []}
        pattern={Pattern.Skat}
        leaderPos={trick && trick.leaderId ? +trick.leaderId : 0}
        winnerPos={trick && trick.winnerId ? +trick.winnerId : -1}
        currPos={+player.id}
        numPlayers={players.length}
      />
    );
  }

  function renderButtonBar() {
    if (spectatorMode) return;
    const buttons = [renderButtonsBid(), renderButtonsTrump(), renderButtonsAnnounce(), renderButtonsFinish()].filter(
      (b) => b,
    );
    return buttons.length > 0 ? buttons[0] : null;
  }

  function renderButtonsBid() {
    if (playerPhase != Phases.bidding || player.bid == Contract.Pass || player.bid > Contract.Some) return;
    const numBidders = players.filter((P) => P.bid == Contract.Some).length;
    const allowed_bids = util.allowedBids(player, numBidders);
    return (
      <ButtonBar
        click={allowed_bids.map((bid) => () => moves.MakeBid(bid))}
        texts={allowed_bids.map((bid) => translate(util.getBidName(bid)))}
        red={allowed_bids.map((bid) => bid == Contract.Pass)}
      />
    );
  }

  function renderButtonsTrump() {
    if (playerStage != Stages.select_trump) return;
    const all_cards: ICard[] = ['Diamonds', 'Hearts', 'Spades', 'Clubs']
      .filter((suit) => {
        const suitInHand = player.hand.filter((C) => C.suit == Suit[suit]);
        return !suitInHand.every((C) => [11, 12].includes(C.value));
      })
      .map((suit) => {
        return { suit: Suit[suit], value: 10 };
      });
    return (
      <ButtonBar
        click={all_cards.map((C) => () => moves.SelectTrumpSuit(C.suit))}
        question={translate('trumpsuit_select')}
        cards={all_cards}
        pattern={Pattern.Skat}
      />
    );
  }

  function renderButtonsAnnounce() {
    let canAnnounce = false;
    if (ctx.phase == Phases.placement && G.contract != Contract.Marriage) {
      const announcement = player.isTaker ? G.announcementRe : G.announcementContra;
      if (announcement < Announcement.Schwarz) {
        const otherAnnouncement = player.isTaker ? G.announcementContra : G.announcementRe;
        let announceRank = util.announceRank(announcement);
        if (announcement == Announcement.None && otherAnnouncement > Announcement.None) {
          announceRank = util.announceRank(otherAnnouncement) + 1;
        }
        canAnnounce = player.hand.length >= 11 - announceRank - G.marriageShift;
      }
    }
    if (!canAnnounce) return;
    const currentAnnouncement = player.isTaker ? G.announcementRe : G.announcementContra;
    if (currentAnnouncement == Announcement.Schwarz) return;
    const newAnnouncement = [
      Announcement.Win,
      Announcement.No90,
      Announcement.No60,
      Announcement.No30,
      Announcement.Schwarz,
    ][util.announceRank(currentAnnouncement)];
    return (
      <ButtonBar
        click={[() => moves.Announce(newAnnouncement)]}
        texts={[translate(util.getAnnounceName(newAnnouncement, player.isTaker))]}
        noWrap={true}
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
    const isActive = G.players.map((P) => {
      return (!currentPlayerId && !P.isReady) || P.id === currentPlayerId;
    });
    const bids = G.players.map((P) => (P.isTaker ? G.contract : P.bid));
    const bidStrings = bids.map((bid) => (bid >= Contract.Pass ? `«${translate(util.getBidName(bid))}»` : ''));
    const biddingEnded = G.contract > Contract.None;
    const roundEnded = currentLeaderId == '';
    const announcements = G.players.map((P) => {
      const announce = P.isTaker ? G.announcementRe : G.announcementContra;
      let announceStr: string = null;
      if (announce !== null && announce >= Announcement.Win) {
        announceStr = translate(util.getAnnounceName(announce, P.isTaker));
      }
      return announceStr;
    });
    const numTakersKnown = players.filter((P) => P.isTaker).length;
    const takersKnown = G.contract > Contract.Solo || numTakersKnown == 2;
    return (
      <PlayerZones
        currentPlayerId={currentPlayerId}
        perspectivePlayerId={player.id}
        currentLeaderId={currentLeaderId}
        bids={bidStrings}
        bidPass={bids.map((bid) => bid == 0)}
        bidding={bids.map((bid) => (biddingEnded || bid < 0 ? -1 : bid == 0 ? 0 : 1))}
        announcements={announcements}
        names={playerNames}
        hands={playerHands.map((H, i) => (G.players[i].id == playerID && !spectatorMode ? null : H))}
        pattern={Pattern.Skat}
        isActive={isActive}
        markActive={isActive.map((active) => biddingEnded && !roundEnded && active)}
        isDealer={G.players.map((P) => !roundEnded && P.isDealer)}
        isTaker={G.players.map((P) => biddingEnded && P.isTaker)}
        isOpponent={G.players.map((P) => biddingEnded && takersKnown && !P.isTaker)}
        isLeader={G.players.map((P) => !roundEnded && biddingEnded && P.id === currentLeaderId)}
        scores={G.players.map((P) => P.score.toString())}
        clockwise={true}
      />
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

function isNone(value: number): boolean {
  return isNaN(value) || value === null;
}
