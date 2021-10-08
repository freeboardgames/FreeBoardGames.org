import * as React from 'react';
import { Trans, useCurrentGameTranslation } from 'infra/i18n';
import { Pattern, CardColor, ICard, ITrick } from 'gamesShared/definitions/cards';
import { Card } from 'gamesShared/components/cards/Card';
import { Hand } from 'gamesShared/components/cards/Hand';
import { PreviousTrick } from 'gamesShared/components/cards/PreviousTrick';
import { Trick } from 'gamesShared/components/cards/Trick';
import { Kitty } from 'gamesShared/components/cards/Kitty';
import { ButtonBar } from 'gamesShared/components/cards/ButtonBar';
import { PlayerZones } from 'gamesShared/components/cards/PlayerZones';
import { ScoreBoard } from 'gamesShared/components/cards/ScoreBoard';

import css from './GameBoard.module.css';

import { IPlayer, IRoundSummary } from '../types';
import * as util from '../util/misc';
import * as u_poignee from '../util/poignee';

export function Board(props: {
  player: IPlayer;
  players: IPlayer[];
  playerNames: string[];
  contract: number;
  slam: boolean;

  currentPlayerId: string;

  kitty: ICard[];
  kittyRevealed: boolean;
  kittyPrev: ICard[];

  trick: ITrick;
  prevTrick: ITrick;

  calledCard?: ICard;

  selectableCards: boolean[];

  roundSummaries: IRoundSummary[];
  showRoundSummary: boolean;

  selectCards?: (handIndex: number[]) => void;
  selectBid?: (value: number) => void;
  callCard?: (card: ICard) => void;
  announceSlam?: (announce: boolean) => void;
  declarePoignee?: (declare: boolean) => void;
  discard?: () => void;
  endGame?: (quit: boolean) => void;
}) {
  const { translate } = useCurrentGameTranslation();
  const selectedCards = props.declarePoignee || props.discard ? props.player.discardSelection : [];

  function renderScoreBoard() {
    const roundSummaries = props.roundSummaries.map((summary) => {
      const playerRoles = props.players.map((P) => {
        return P.id == summary.takerId || P.id == summary.calledTakerId;
      });
      const playerKeys = props.playerNames.map((_, i) => i);
      const players = playerKeys.filter((i) => playerRoles[i]).concat(playerKeys.filter((i) => !playerRoles[i]));
      const points = players.map((i) => {
        const takerPoints = summary.takerPoints;
        const requiredPoints = playerRoles[i] ? `(${summary.takerPointsRequired})` : '';
        return `${playerRoles[i] ? takerPoints : 91 - takerPoints}${requiredPoints}`;
      });
      return {
        players: players,
        scoring: players.map((i) => summary.scoring[i]),
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
      <ScoreBoard
        playerNames={props.playerNames}
        roundSummaries={roundSummaries}
        showRoundSummary={props.showRoundSummary}
        playerScores={props.players.map((p) => p.score)}
      />
    );
  }

  function renderPrevTrick() {
    const isKitty = props.kittyPrev.length > 0;
    const inGame = props.players.some((P) => P.isTaker) && props.prevTrick.cards.length > 0;
    if (!isKitty && !inGame) return;
    return (
      <PreviousTrick
        trick={isKitty ? props.kittyPrev : props.prevTrick.cards}
        pattern={Pattern.Tarot}
        leaderPos={isKitty ? 0 : +props.prevTrick.leaderId}
        currPos={isKitty ? 0 : +props.player.id}
        numPlayers={isKitty ? props.kittyPrev.length : props.players.length}
        isKitty={isKitty}
      />
    );
  }

  function renderCalledCard() {
    if (!props.calledCard) return;
    const takerId = props.players.findIndex((P) => P.isTaker);
    return (
      <div className={css.calledCard}>
        <span>{translate('callcard_player_called', { name: props.playerNames[takerId] })}</span>
        <div className={css.cardContainer}>
          <div>
            <Card pattern={Pattern.Tarot} type={props.calledCard} />
          </div>
        </div>
      </div>
    );
  }

  function renderKitty() {
    const kitty_size = props.kitty.length;
    let kitty_descr: JSX.Element = null;
    if (props.kittyRevealed && kitty_size > 6) {
      const name = props.playerNames[+props.currentPlayerId];
      const thresh = u_poignee.getPoigneeThresholds(props.players.length);
      let lvl = 0;
      for (; lvl < thresh.length && thresh[lvl] <= kitty_size; lvl++);
      kitty_descr = (
        <Trans t={translate} i18nKey={`poignee_declares_${lvl}`} values={{ name: name }} components={{ b: <b /> }} />
      );
    }
    return <Kitty kitty={props.kitty} pattern={Pattern.Tarot} revealed={props.kittyRevealed} descr={kitty_descr} />;
  }

  function renderTrick() {
    const trick = props.kitty.length > 0 ? null : props.trick.cards.length > 0 ? props.trick : props.prevTrick;
    return (
      <Trick
        trick={trick ? trick.cards : []}
        pattern={Pattern.Tarot}
        leaderPos={trick ? +trick.leaderId : 0}
        winnerPos={trick && trick.winnerId ? +trick.winnerId : -1}
        currPos={+props.player.id}
        numPlayers={props.players.length}
      />
    );
  }

  function renderButtonBar() {
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
    if (!props.selectBid) return;
    const highest_bid = Math.max(...props.players.map((P) => P.bid));
    const all_bids = [0, 1, 2, 3, 4];
    const click = all_bids.map((bid) => {
      if (!props.selectBid || (bid != 0 && highest_bid >= bid)) return null;
      return () => props.selectBid(bid);
    });
    return (
      <ButtonBar
        click={click}
        texts={all_bids.map((bid) => translate(util.getBidName(bid)))}
        red={all_bids.map((_, i) => i == 0)}
      />
    );
  }

  function renderButtonsCall() {
    if (!props.callCard) return;
    let val = 14;
    for (; props.player.hand.filter((C) => util.isColorCard(C) && C.value == val).length == 4; val--);
    const all_cards: ICard[] = ['Clubs', 'Diamonds', 'Spades', 'Hearts'].map((col) => {
      return { color: CardColor[col], value: val };
    });
    return (
      <ButtonBar
        click={all_cards.map((C) => () => props.callCard(C))}
        question={translate('callcard_select')}
        cards={all_cards}
        pattern={Pattern.Tarot}
      />
    );
  }

  function renderButtonsDiscard() {
    if (!props.discard || !props.player.discardSelection) return;
    const discard_num = util.kittySize(props.players.length);
    const missing_num = discard_num - props.player.discardSelection.length;
    const clickable = missing_num == 0;
    const text = translate(clickable ? 'discard_confirm' : `discard_select_${missing_num == 1 ? '1' : 'n'}_more`, {
      n: missing_num,
    });
    return <ButtonBar click={[clickable ? () => props.discard() : null]} texts={[text]} />;
  }

  function renderButtonsSlam() {
    if (!props.announceSlam) return;
    return (
      <ButtonBar
        click={[() => props.announceSlam(false), () => props.announceSlam(true)]}
        question={translate('slam_announce_q')}
        texts={[translate('slam_announce_no'), translate('slam_announce_yes')]}
        red={[true, false]}
        noWrap={true}
      />
    );
  }

  function renderButtonsPoignee() {
    if (!props.declarePoignee) return;
    const numPlayers = props.players.length;
    const thresh = u_poignee.getPoigneeThresholds(numPlayers);
    const max_level = u_poignee.maxPoigneeLevel(props.player.hand, numPlayers);
    const sel_size = props.player.discardSelection.length;
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
        click={[() => props.declarePoignee(false), clickable ? () => props.declarePoignee(true) : null]}
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
    if (props.announceSlam || !props.endGame || props.player.isReady) return;
    return (
      <ButtonBar
        click={[() => props.endGame(false), () => props.endGame(true)]}
        texts={[translate('roundend_next'), translate('roundend_quit')]}
        red={[false, true]}
        below={true}
        noWrap={true}
      />
    );
  }

  function renderPlayerZones() {
    const numPlayers = props.players.length;
    const currentPlayerId = props.showRoundSummary ? null : props.currentPlayerId;
    const currentLeaderId = props.showRoundSummary ? '' : props.trick.leaderId;
    const isActive = props.players.map((P) => {
      return (!currentPlayerId && !P.isReady) || P.id === currentPlayerId;
    });
    const bids = props.players.map((P) => (P.isTaker ? props.contract : P.bid));
    const bidStrings = bids.map((bid) => (bid >= 0 ? `«${translate(util.getBidName(bid))}»` : ''));
    const biddingEnded = props.players.some((P) => P.isTaker);
    const roundEnded = props.currentLeaderId == '';
    const announcements = props.players.map((P) => {
      return P.isTaker && props.slam ? translate('slam_announced') : null;
    });
    return (
      <PlayerZones
        currentPlayerId={currentPlayerId}
        perspectivePlayerId={props.player.id}
        currentLeaderId={currentLeaderId}
        bids={bidStrings}
        bidPass={bids.map((bid) => bid == 0)}
        announcements={announcements}
        names={props.playerNames}
        isActive={isActive}
        markActive={isActive.map((active) => biddingEnded && !roundEnded && active)}
        isDealer={props.players.map((P) => !roundEnded && P.isDealer)}
        isTaker={props.players.map((P) => biddingEnded && P.isTaker)}
        isOpponent={props.players.map((P) => biddingEnded && numPlayers < 5 && !P.isTaker)}
        isLeader={props.players.map((P) => !roundEnded && biddingEnded && P.id === currentLeaderId)}
        scores={props.players.map((P) => P.score.toString())}
      />
    );
  }

  return (
    <div className={css.board}>
      <div className={css.upperBoard}>
        {renderScoreBoard()}
        {renderCalledCard()}
        {renderPrevTrick()}
        {renderKitty()}
        {renderPlayerZones()}
        {renderTrick()}
        {renderButtonBar()}
      </div>
      <div className={css.lowerBoard}>
        <Hand
          playerId={props.player.id}
          hand={props.player.hand}
          pattern={Pattern.Tarot}
          selectable={props.selectableCards}
          selection={selectedCards || []}
          selectCards={props.selectCards}
        />
      </div>
    </div>
  );
}
