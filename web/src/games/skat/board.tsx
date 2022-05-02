import * as React from 'react';
import { Ctx } from 'boardgame.io';
import { IGameArgs } from 'gamesShared/definitions/game';
import { Pattern, Suit, ICard } from 'gamesShared/definitions/cards';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { Hand } from 'gamesShared/components/cards/Hand';
import { PreviousTrick } from 'gamesShared/components/cards/PreviousTrick';
import { DisplayCard } from 'gamesShared/components/cards/DisplayCard';
import { Trick } from 'gamesShared/components/cards/Trick';
import { Kitty } from 'gamesShared/components/cards/Kitty';
import { ButtonBar } from 'gamesShared/components/cards/ButtonBar';
import { PlayerZones } from 'gamesShared/components/cards/PlayerZones';
import { RoundScores } from 'gamesShared/components/cards/RoundScores';
import { IScore, Scoreboard } from 'gamesShared/components/scores/Scoreboard';
import { isLocalGame } from 'gamesShared/helpers/gameMode';
import { useCurrentGameTranslation } from 'infra/i18n';

import css from './board.module.css';

import { Contract, Announcement, Phases, Stages, IGameMoves, IG } from './types';
import * as util from './util/misc';
import * as u_discard from './util/discard';
import * as u_placement from './util/placement';

export function BgioBoard(props: { G: IG; ctx: Ctx; moves: IGameMoves; playerID: string; gameArgs?: IGameArgs }) {
  const { translate } = useCurrentGameTranslation();
  const [selectedBid_i, setSelectedBid_i] = React.useState(0);
  const spectatorMode = !props.playerID && !isLocalGame(props.gameArgs);

  const G = props.G;
  const ctx = props.ctx;
  const moves = props.moves;
  const playerID = isLocalGame(props.gameArgs) ? ctx.currentPlayer : props.playerID || G.players[0].id;
  const player = util.getPlayerById(G, playerID);
  const playerPhase = ctx.currentPlayer === playerID && ctx.phase;
  const playerStage = ctx.activePlayers && ctx.activePlayers[playerIndex()];
  const playerNames = G.players.map((P) => playerName(P.id));
  const showRoundSummary = ctx.phase == Phases.round_end && G.roundSummaries.length > 0;

  const canDiscard = player.isTaker && playerPhase == Phases.discard;

  const prevTrick = G.resolvedTricks.length > 1 ? G.resolvedTricks[G.resolvedTricks.length - 1] : G.trick;

  const handSize = 10;
  const cmpCards = util.get_cmpCards(G.contract, G.trumpSuit);
  const playerHands = G.players.map((P, i) => {
    if (ctx.phase == Phases.round_end) {
      return G.deck.slice(i * handSize, (i + 1) * handSize).sort(cmpCards);
    } else if (P.isTaker && G.announcement == Announcement.Ouvert) {
      return P.hand;
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
            {renderKitty()}
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
    let canSelectCards = false;
    if (playerPhase == Phases.discard) {
      selectableCards = u_discard.selectableCards(G, playerID);
      canSelectCards = player.isTaker;
    } else if (playerPhase == Phases.placement) {
      selectableCards = u_placement.selectableCards(G, playerID);
      canSelectCards = true;
    }
    const selectedCards = canDiscard ? player.discardSelection : [];
    return (
      <Hand
        hand={ctx.phase == Phases.round_end ? playerHands[+player.id] : player.hand}
        pattern={Pattern.Skat}
        selectable={selectableCards}
        selection={selectedCards || []}
        selectCards={canSelectCards ? moves.SelectCards : null}
      />
    );
  }

  function renderRoundScores() {
    const roundSummaries = G.roundSummaries.map((summary) => {
      const playerRoles = G.players.map((P) => P.id == summary.takerId);
      const playerKeys = playerNames.map((_, i) => i);
      const players = playerKeys.filter((i) => playerRoles[i]).concat(playerKeys.filter((i) => !playerRoles[i]));
      const points = players.map((i) => {
        const takerPoints = summary.takerPoints;
        const takerPointsReq = summary.takerPointsRequired;
        const isTaker = playerRoles[i];
        const reqPointsStr = !isTaker ? '' : `(${isNone(takerPointsReq) ? '-' : takerPointsReq})`;
        return `${isNone(takerPoints) ? '-' : isTaker ? takerPoints : 120 - takerPoints}${reqPointsStr}`;
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
            description: translate('scoreboard_bid'),
            values: players.map((i) => (playerRoles[i] ? `${summary.takerBid}` : '-')),
          },
          {
            description: translate('scoreboard_tops'),
            values: players.map((i) => (playerRoles[i] && !isNone(summary.tops) ? `${summary.tops}` : '-')),
          },
          {
            description: translate('scoreboard_winlevel'),
            values: players.map((i) => (playerRoles[i] && !isNone(summary.winLevel) ? `${summary.winLevel}` : '-')),
          },
          {
            description: translate('scoreboard_basicvalue'),
            values: players.map((i) => (playerRoles[i] ? `${summary.basicValue}` : '-')),
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
    const isKitty = G.kittyPrev.length > 0;
    const inGame = G.players.some((P) => P.isTaker) && prevTrick.cards.length > 0;
    if (!isKitty && !inGame) return;
    return (
      <PreviousTrick
        trick={isKitty ? G.kittyPrev : prevTrick.cards}
        pattern={Pattern.Skat}
        leaderPos={isKitty ? 0 : +prevTrick.leaderId}
        currPos={isKitty ? 0 : +player.id}
        numPlayers={isKitty ? G.kittyPrev.length : G.players.length}
        isKitty={isKitty}
      />
    );
  }

  function renderTrumpSuit() {
    if (G.trumpSuit === null) return;
    const trumpCard: ICard = { suit: G.trumpSuit, value: 14 };
    return <DisplayCard description={translate('trumpsuit')} card={trumpCard} pattern={Pattern.Skat} />;
  }

  function renderKitty() {
    return (
      <Kitty
        kitty={G.kitty}
        pattern={Pattern.Skat}
        revealed={G.kittyRevealed || (player.isTaker && G.hand === false)}
      />
    );
  }

  function renderTrick() {
    const trick = G.kitty.length > 0 ? null : G.trick.cards.length > 0 ? G.trick : prevTrick;
    return (
      <Trick
        trick={trick ? trick.cards : []}
        pattern={Pattern.Skat}
        leaderPos={trick && trick.leaderId ? +trick.leaderId : 0}
        winnerPos={trick && trick.winnerId ? +trick.winnerId : -1}
        currPos={+player.id}
        numPlayers={G.players.length}
      />
    );
  }

  function renderButtonBar() {
    if (spectatorMode) return;
    const buttons = [
      renderButtonsBid(),
      renderButtonsHand(),
      renderButtonsContract(),
      renderButtonsTrumpSuit(),
      renderButtonsAnnounce(),
      renderButtonsDiscard(),
      renderButtonsFinish(),
    ].filter((b) => b);
    return buttons.length > 0 ? buttons[0] : null;
  }

  function renderButtonsBid() {
    if (playerPhase != Phases.bidding || player.bid == 0) return;
    const highest_bid = Math.max(...G.players.map((P) => P.bid));
    const possible_bids = util.all_valid_bids.filter((bid) => bid > highest_bid);
    const selectedBid = possible_bids[selectedBid_i];
    let click = [() => moves.MakeBid(0), () => moves.MakeBid(highest_bid)];
    let texts = [translate('bid_pass'), `${translate('bid_confirm')} (${highest_bid})`];
    let red = [true, false];
    if (player.id != G.holderId) {
      click = [
        () => {
          moves.MakeBid(0);
          setSelectedBid_i(0);
        },
        selectedBid_i <= 0 ? null : () => setSelectedBid_i(selectedBid_i - 1),
        () => {
          moves.MakeBid(selectedBid);
          setSelectedBid_i(0);
        },
        selectedBid_i >= possible_bids.length ? null : () => setSelectedBid_i(selectedBid_i + 1),
      ];
      texts = [translate('bid_pass'), '<', selectedBid.toString(), '>'];
      red = [true, false, false, false];
    }
    return <ButtonBar click={click} texts={texts} red={red} />;
  }

  function renderButtonsHand() {
    if (playerStage != Stages.declare_hand) return;
    return (
      <ButtonBar
        click={[() => moves.DeclareHand(false), () => moves.DeclareHand(true)]}
        texts={[translate('declare_take'), translate('declare_handgame')]}
        red={[true, false]}
      />
    );
  }

  function renderButtonsContract() {
    if (playerStage != Stages.select_contract) return;
    return (
      <ButtonBar
        click={[
          () => moves.SelectContract(Contract.Suit),
          () => moves.SelectContract(Contract.Null),
          () => moves.SelectContract(Contract.Grand),
        ]}
        texts={[
          translate('select_contract_suit'),
          translate('select_contract_null'),
          translate('select_contract_grand'),
        ]}
      />
    );
  }

  function renderButtonsTrumpSuit() {
    if (playerStage != Stages.select_trump) return;
    const all_cards: ICard[] = ['Diamonds', 'Hearts', 'Spades', 'Clubs'].map((suit) => {
      return { suit: Suit[suit], value: 14 };
    });
    return (
      <ButtonBar
        click={all_cards.map((C) => () => moves.SelectTrumpSuit(C.suit))}
        question={translate('select_trumpsuit')}
        cards={all_cards}
        pattern={Pattern.Skat}
      />
    );
  }

  function renderButtonsAnnounce() {
    if (playerStage != Stages.announce) return;
    let click = [() => moves.Announce(Announcement.None), () => moves.Announce(Announcement.Ouvert)];
    let texts = [translate('announce_none'), translate('announce_ouvert')];
    let red = [true, false];
    if (G.contract != Contract.Null) {
      click.splice(
        1,
        0,
        () => moves.Announce(Announcement.Schneider),
        () => moves.Announce(Announcement.Schwarz),
      );
      texts.splice(1, 0, translate('announce_schneider'), translate('announce_schwarz'));
      red.splice(1, 0, false, false);
    }
    return <ButtonBar click={click} texts={texts} red={red} />;
  }

  function renderButtonsDiscard() {
    if (!canDiscard || !player.discardSelection) return;
    const discard_num = 2;
    const missing_num = discard_num - player.discardSelection.length;
    const clickable = missing_num == 0;
    const text = translate(clickable ? 'discard_confirm' : `discard_select_${missing_num == 1 ? '1' : 'n'}_more`, {
      n: missing_num,
    });
    return <ButtonBar click={[clickable ? () => moves.Discard() : null]} texts={[text]} />;
  }

  function renderButtonsFinish() {
    if (player.isReady) return;
    return (
      <ButtonBar
        click={[() => moves.Finish(false), () => moves.Finish(true)]}
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
    const biddingEnded = G.players.some((P) => P.isTaker);
    const bids = G.players.map((P) => (biddingEnded && !P.isTaker ? -1 : P.bid));
    const bidStrings = bids.map((bid, i) => {
      const P = G.players[i];
      let playerBidStr = '';
      if (G.announcement !== null && P.isTaker) {
        const contractStr = G.contract != Contract.Suit ? Contract[G.contract] : Suit[G.trumpSuit];
        const announceStr = G.announcement != Announcement.None ? Announcement[G.announcement] : '';
        playerBidStr = [
          translate(`bidstr_${contractStr.toLowerCase()}`),
          announceStr != '' ? translate(`bidstr_${announceStr.toLowerCase()}`) : '',
          G.hand ? translate('bidstr_hand') : '',
          `(${P.bid})`,
        ].join(' ');
      } else {
        playerBidStr = bid == 0 ? translate('bid_pass') : bid > 1 ? bid.toString() : '';
      }
      return playerBidStr;
    });
    const roundEnded = currentLeaderId == '';
    return (
      <PlayerZones
        currentPlayerId={currentPlayerId}
        perspectivePlayerId={player.id}
        currentLeaderId={currentLeaderId}
        bids={bidStrings}
        bidPass={bids.map((bid) => bid == 0)}
        bidding={bids.map((bid) => (biddingEnded || bid == 1 ? -1 : bid == 0 ? 0 : 1))}
        announcements={G.players.map(() => null)}
        names={playerNames}
        hands={playerHands.map((H, i) => (G.players[i].id == playerID && !spectatorMode ? null : H))}
        pattern={Pattern.Skat}
        isActive={isActive}
        markActive={isActive.map((active) => biddingEnded && !roundEnded && active)}
        isDealer={G.players.map((P) => !roundEnded && P.isDealer)}
        isTaker={G.players.map((P) => biddingEnded && P.isTaker)}
        isOpponent={G.players.map((P) => biddingEnded && !P.isTaker)}
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
