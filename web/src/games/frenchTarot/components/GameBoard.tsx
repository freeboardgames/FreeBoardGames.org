import * as React from 'react';
import { Trans, useCurrentGameTranslation } from 'infra/i18n';
import { Pattern, CardColor, ICard, ITrick } from 'gamesShared/definitions/cards';
import { Card } from 'gamesShared/components/cards/Card';
import { Hand } from 'gamesShared/components/cards/Hand';
import { PreviousTrick } from 'gamesShared/components/cards/PreviousTrick';
import { Trick } from 'gamesShared/components/cards/Trick';

import css from './GameBoard.module.css';
import { Button } from './Button';
import { Kitty } from './Kitty';
import { PlayerZones } from './PlayerZones';
import { ScoreBoard } from './ScoreBoard';

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
    return (
      <ScoreBoard
        playerNames={props.playerNames}
        playerRoles={props.players.map((p) => p.isTaker)}
        roundSummaries={props.roundSummaries}
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
    return <Kitty kitty={props.kitty} revealed={props.kittyRevealed} descr={kitty_descr} />;
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
    ];
    if (!buttons.some((b) => b)) return;
    return (
      <div
        className={[css.buttonBar, props.showRoundSummary ? css.below : '', props.callCard ? css.callCards : ''].join(
          ' ',
        )}
      >
        {buttons}
      </div>
    );
  }

  function renderButtonsBid() {
    if (!props.selectBid) return;
    const highest_bid = Math.max(...props.players.map((p) => p.bid));
    return [0, 1, 2, 3, 4].map(util.getBidName).map((name, i) => {
      const text: string = translate(name);
      return (
        <Button
          key={i}
          text={text}
          red={i == 0}
          dirleft={i <= 2}
          click={props.selectBid && (i == 0 || highest_bid < i) ? () => props.selectBid(i) : null}
        />
      );
    });
  }

  function renderButtonsCall() {
    if (!props.callCard) return;
    let val = 14;
    for (; props.player.hand.filter((C) => util.isColorCard(C) && C.value == val).length == 4; val--);
    return (
      <>
        <div className={css.question}>{translate('callcard_select')}:</div>
        {['Clubs', 'Diamonds', 'Spades', 'Hearts'].map((col) => {
          const card: ICard = { color: CardColor[col], value: val };
          return (
            <div key={col} className={css.cardContainer} onClick={() => props.callCard(card)}>
              <div>
                <Card pattern={Pattern.Tarot} type={card} />
              </div>
            </div>
          );
        })}
      </>
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
    return <Button text={text} dirleft={true} click={clickable ? () => props.discard() : null} />;
  }

  function renderButtonsSlam() {
    if (!props.announceSlam) return;
    return (
      <>
        <div className={css.question}>{translate('slam_announce_q')}</div>
        <div style={{ whiteSpace: 'nowrap' }}>
          <Button
            text={translate('slam_announce_no')}
            red={true}
            dirleft={true}
            click={() => props.announceSlam(false)}
          />
          <Button text={translate('slam_announce_yes')} click={() => props.announceSlam(true)} />
        </div>
      </>
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
      <>
        <div className={css.question}>{translate('poignee_q')}</div>
        <div style={{ whiteSpace: 'nowrap' }}>
          <Button text={translate('poignee_no')} red={true} dirleft={true} click={() => props.declarePoignee(false)} />
          <Button
            text={
              <>
                {text}
                <br />
                <small>{smallText}</small>
              </>
            }
            click={clickable ? () => props.declarePoignee(true) : null}
          />
        </div>
      </>
    );
  }

  function renderButtonsFinish() {
    if (props.announceSlam || !props.endGame || props.player.isReady) return;
    return (
      <div style={{ whiteSpace: 'nowrap' }}>
        <Button text={translate('roundend_next')} below={true} click={() => props.endGame(false)} />
        <Button
          text={translate('roundend_quit')}
          red={true}
          dirleft={true}
          below={true}
          click={() => props.endGame(true)}
        />
      </div>
    );
  }

  return (
    <div className={css.board}>
      <div className={css.upperBoard}>
        {renderScoreBoard()}
        {renderCalledCard()}
        {renderPrevTrick()}
        {renderKitty()}
        <PlayerZones
          currentPlayerId={props.showRoundSummary ? null : props.currentPlayerId}
          perspectivePlayerId={props.player.id}
          currentLeaderId={props.showRoundSummary ? '' : props.trick.leaderId}
          players={props.players}
          playerNames={props.playerNames}
          contract={props.contract}
          slam={props.slam}
        />
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
