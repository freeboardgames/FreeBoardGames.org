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
import { Trans, useCurrentGameTranslation } from 'infra/i18n';

import css from './board.module.css';

import { Phases, Stages, Contract, IGameMoves, IG } from './types';
import * as util from './util/misc';
import * as u_poignee from './util/poignee';
import * as u_discard from './util/discard';
import * as u_placement from './util/placement';

export function BgioBoard(props: { G: IG; ctx: Ctx; moves: IGameMoves; playerID: string; gameArgs?: IGameArgs }) {
  const { translate } = useCurrentGameTranslation();
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
  const prevTrick = G.resolvedTricks.length > 1 ? G.resolvedTricks[G.resolvedTricks.length - 1] : G.trick;
  const canDiscard = player.isTaker && playerPhase == Phases.discard;

  const handSize = util.handSize(G.players.length);
  const playerHands = G.players.map((P, i) => {
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
    let selectableCards = player.hand.map(() => false);
    let canSelectCards = false;
    if (ctx.currentPlayer == playerID) {
      if (playerStage == Stages.declare_poignee) {
        selectableCards = u_poignee.selectableCards(G, playerID);
      } else if (ctx.phase == Phases.discard) {
        selectableCards = u_discard.selectableCards(G, playerID);
      } else if (ctx.phase == Phases.placement) {
        selectableCards = u_placement.selectableCards(G, playerID);
      }
      canSelectCards = ctx.phase == Phases.discard ? player.isTaker : ctx.phase == Phases.placement;
    }
    const canDeclarePoignee = playerStage == Stages.declare_poignee;
    const selectedCards = canDeclarePoignee || canDiscard ? player.discardSelection : [];
    return (
      <Hand
        hand={ctx.phase == Phases.round_end ? playerHands[+player.id] : player.hand}
        pattern={Pattern.Tarot}
        selectable={selectableCards}
        selection={selectedCards || []}
        selectCards={canSelectCards ? moves.SelectCards : null}
      />
    );
  }

  function renderRoundScores() {
    const roundSummaries = G.roundSummaries.map((summary) => {
      const playerRoles = G.players.map((P) => {
        return P.id == summary.takerId || P.id == summary.calledTakerId;
      });
      const playerKeys = playerNames.map((_, i) => i);
      const players = playerKeys.filter((i) => playerRoles[i]).concat(playerKeys.filter((i) => !playerRoles[i]));
      const points = players.map((i) => {
        const takerPoints = summary.takerPoints;
        const requiredPoints = playerRoles[i] ? `(${summary.takerPointsRequired})` : '';
        return `${playerRoles[i] ? takerPoints : 91 - takerPoints}${requiredPoints}`;
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
            description: translate('scoreboard_petit_au_bout'),
            values: players.map((i) => (playerRoles[i] ? `${summary.petitAuBout}` : '-')),
          },
          {
            description: translate('scoreboard_multiplier'),
            values: players.map((i) => (playerRoles[i] ? `×${summary.multiplier}` : '-')),
          },
          {
            description: translate('scoreboard_poignee'),
            values: players.map((i) => (playerRoles[i] ? `${summary.poignee}` : '-')),
          },
          {
            description: translate('scoreboard_slam'),
            values: players.map((i) => (playerRoles[i] ? `${summary.slam}` : '-')),
          },
        ],
      };
    });
    return (
      <RoundScores
        playerNames={playerNames}
        roundSummaries={roundSummaries}
        showRoundSummary={showRoundSummary}
        playerScores={G.players.map((P) => P.score)}
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
        pattern={Pattern.Tarot}
        leaderPos={isKitty ? 0 : +prevTrick.leaderId}
        currPos={isKitty ? 0 : +player.id}
        numPlayers={isKitty ? G.kittyPrev.length : G.players.length}
        isKitty={isKitty}
      />
    );
  }

  function renderCalledCard() {
    if (!G.calledCard) return;
    const takerId = G.players.findIndex((P) => P.isTaker);
    return (
      <DisplayCard
        description={translate('callcard_player_called', { name: playerNames[takerId] })}
        card={G.calledCard}
        pattern={Pattern.Tarot}
      />
    );
  }

  function renderKitty() {
    const kitty_size = G.kitty.length;
    let kitty_descr: JSX.Element = null;
    if (G.kittyRevealed && kitty_size > 6) {
      const name = playerNames[+ctx.currentPlayer];
      const thresh = u_poignee.getPoigneeThresholds(G.players.length);
      let lvl = 0;
      for (; lvl < thresh.length && thresh[lvl] <= kitty_size; lvl++);
      kitty_descr = (
        <Trans t={translate} i18nKey={`poignee_declares_${lvl}`} values={{ name: name }} components={{ b: <b /> }} />
      );
    }
    return <Kitty kitty={G.kitty} pattern={Pattern.Tarot} revealed={G.kittyRevealed} descr={kitty_descr} />;
  }

  function renderTrick() {
    const trick = G.kitty.length > 0 ? null : G.trick.cards.length > 0 ? G.trick : prevTrick;
    return (
      <Trick
        trick={trick ? trick.cards : []}
        pattern={Pattern.Tarot}
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
      renderButtonsCall(),
      renderButtonsDiscard(),
      renderButtonsSlam(),
      renderButtonsPoignee(),
      renderButtonsFinish(),
    ].filter((b) => b);
    return buttons.length > 0 ? buttons[0] : null;
  }

  function renderButtonsBid() {
    if (playerPhase != Phases.bidding || player.bid == Contract.Pass) return;
    const highest_bid = Math.max(...G.players.map((P) => P.bid));
    const all_bids = [Contract.Pass, Contract.Small, Contract.Guard, Contract.GuardWithout, Contract.GuardAgainst];
    const click = all_bids.map((bid) => {
      return bid == Contract.Pass || highest_bid < bid ? () => moves.MakeBid(bid) : null;
    });
    return (
      <ButtonBar
        click={click}
        texts={all_bids.map((bid) => translate(util.getBidName(bid)))}
        red={all_bids.map((bid) => bid == Contract.Pass)}
      />
    );
  }

  function renderButtonsCall() {
    if (playerStage != Stages.call_card) return;
    let val = 14;
    for (; player.hand.filter((C) => util.isSuitCard(C) && C.value == val).length == 4; val--);
    const all_cards: ICard[] = ['Clubs', 'Diamonds', 'Spades', 'Hearts'].map((suit) => {
      return { suit: Suit[suit], value: val };
    });
    return (
      <ButtonBar
        click={all_cards.map((C) => () => moves.Call(C))}
        question={translate('callcard_select')}
        cards={all_cards}
        pattern={Pattern.Tarot}
      />
    );
  }

  function renderButtonsDiscard() {
    if (!canDiscard || !player.discardSelection) return;
    const discard_num = util.kittySize(G.players.length);
    const missing_num = discard_num - player.discardSelection.length;
    const clickable = missing_num == 0;
    const text = translate(clickable ? 'discard_confirm' : `discard_select_${missing_num == 1 ? '1' : 'n'}_more`, {
      n: missing_num,
    });
    return <ButtonBar click={[clickable ? () => moves.Discard() : null]} texts={[text]} />;
  }

  function renderButtonsSlam() {
    if (playerStage != Stages.announce_slam) return;
    return (
      <ButtonBar
        click={[() => moves.AnnounceSlam(false), () => moves.AnnounceSlam(true)]}
        question={translate('slam_announce_q')}
        texts={[translate('slam_announce_no'), translate('slam_announce_yes')]}
        red={[true, false]}
        noWrap={true}
      />
    );
  }

  function renderButtonsPoignee() {
    if (playerStage != Stages.declare_poignee) return;
    const numPlayers = G.players.length;
    const thresh = u_poignee.getPoigneeThresholds(numPlayers);
    const max_level = u_poignee.maxPoigneeLevel(player.hand, numPlayers);
    const sel_size = player.discardSelection.length;
    let curr_level = 0;
    for (; curr_level < thresh.length && thresh[curr_level] <= sel_size; curr_level++);
    const clickable = curr_level > 0 && sel_size == thresh[curr_level - 1];
    let missing_num = thresh[0] - sel_size;
    let text = '';
    let smallText = '';
    if (curr_level == 0) {
      if (sel_size > 1) {
        if (missing_num == 1) {
          text = translate('poignee_0_sel_1_more');
        } else {
          text = translate('poignee_0_sel_n_more', { n: missing_num });
        }
      } else {
        text = translate('poignee_0_sel_n', { n: missing_num });
      }
    } else if (curr_level == max_level) {
      text = translate(`poignee_${curr_level}`);
      if (curr_level > 1) {
        missing_num = sel_size - thresh[curr_level - 2];
        smallText = translate(`poignee_${curr_level}_desel_n`, { n: missing_num });
      }
    } else if (curr_level < max_level) {
      missing_num = thresh[curr_level] - sel_size;
      if (thresh[curr_level - 1] == sel_size) {
        smallText = translate(`poignee_${curr_level}_sel_n_more`, { n: missing_num });
        text = translate(`poignee_${curr_level}`);
      } else if (missing_num == 1) {
        text = translate(`poignee_${curr_level}_sel_1_more`);
      } else {
        text = translate(`poignee_${curr_level}_sel_n_more`, { n: missing_num });
      }
    }
    return (
      <ButtonBar
        click={[() => moves.DeclarePoignee(false), clickable ? () => moves.DeclarePoignee(true) : null]}
        question={translate('poignee_q')}
        texts={[
          translate('poignee_no'),
          <>
            {text}
            <br />
            <small>{smallText}</small>
          </>,
        ]}
        red={[true, false]}
        noWrap={true}
      />
    );
  }

  function renderButtonsFinish() {
    if (playerStage == Stages.announce_slam || player.isReady) return;
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
    const numPlayers = G.players.length;
    const currentPlayerId = showRoundSummary ? null : ctx.currentPlayer;
    const currentLeaderId = showRoundSummary ? '' : G.trick.leaderId;
    const isActive = G.players.map((P) => {
      return (!currentPlayerId && !P.isReady) || P.id === currentPlayerId;
    });
    const bids = G.players.map((P) => (P.isTaker ? G.contract : P.bid));
    const bidStrings = bids.map((bid) => (bid >= Contract.Pass ? `«${translate(util.getBidName(bid))}»` : ''));
    const biddingEnded = G.players.some((P) => P.isTaker);
    const roundEnded = currentLeaderId == '';
    const announcements = G.players.map((P) => {
      return P.isTaker && G.announcedSlam ? translate('slam_announced') : null;
    });
    return (
      <PlayerZones
        currentPlayerId={currentPlayerId}
        perspectivePlayerId={player.id}
        currentLeaderId={currentLeaderId}
        bids={bidStrings}
        bidPass={bids.map((bid) => bid == Contract.Pass)}
        bidding={bids.map((bid) => (biddingEnded || bid == Contract.None ? -1 : bid == Contract.Pass ? 0 : 1))}
        announcements={announcements}
        names={playerNames}
        hands={playerHands.map((H, i) => (G.players[i].id == playerID && !spectatorMode ? null : H))}
        pattern={Pattern.Tarot}
        isActive={isActive}
        markActive={isActive.map((active) => biddingEnded && !roundEnded && active)}
        isDealer={G.players.map((P) => !roundEnded && P.isDealer)}
        isTaker={G.players.map((P) => biddingEnded && P.isTaker)}
        isOpponent={G.players.map((P) => biddingEnded && numPlayers < 5 && !P.isTaker)}
        isLeader={G.players.map((P) => !roundEnded && biddingEnded && P.id === currentLeaderId)}
        scores={G.players.map((P) => P.score.toString())}
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
