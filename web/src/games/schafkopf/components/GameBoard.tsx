import * as React from 'react';
import { useCurrentGameTranslation } from 'infra/i18n';

import css from './GameBoard.module.css';
import { Button } from './Button';
import { Card } from './Card';
import { Kitty } from './Kitty';
import { PlayerHand } from './PlayerHand';
import { PlayerZones } from './PlayerZones';
import { PreviousTrick } from './PreviousTrick';
import { ScoreBoard } from './ScoreBoard';
import { Trick } from './Trick';

import { Contract, IPlayer, ICard, CardColor, ITrick, IRoundSummary } from '../types';
import * as util from '../util/misc';

export function Board(props: {
  player: IPlayer;
  players: IPlayer[];
  playerNames: string[];
  contract: Contract;
  tout: boolean;
  contra: number;
  calledTakerId: string;

  currentPlayerId: string;

  kitty: ICard[];
  kittyRevealed: boolean;
  kittyPrev: ICard[];

  trick: ITrick;
  prevTrick: ITrick;

  calledCard?: ICard;
  trumpSuit?: CardColor;

  selectableCards: boolean[];

  roundSummaries: IRoundSummary[];
  showRoundSummary: boolean;

  selectCards?: (handIndex: number[]) => void;
  selectBid?: (value: number) => void;
  callCard?: (card: ICard) => void;
  selectTrump?: (suit: CardColor) => void;
  announceTout?: (announce: boolean) => void;
  giveContra?: () => void;
  discard?: () => void;
  endGame?: (quit: boolean) => void;
}) {
  const { translate } = useCurrentGameTranslation();
  const selectedCards = props.discard ? props.player.discardSelection : [];
  const [declinedContra, setDeclinedContra] = React.useState(false);

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
    if (props.kittyPrev.length > 0) {
      return (
        <PreviousTrick
          trick={props.kittyPrev}
          leaderPos={0}
          currPos={0}
          numPlayers={props.kittyPrev.length}
          isKitty={true}
        />
      );
    }
    if (!props.players.some((P) => P.isTaker) || props.prevTrick.cards.length == 0) return;
    return (
      <PreviousTrick
        trick={props.prevTrick.cards}
        leaderPos={+props.prevTrick.leader.id}
        currPos={+props.player.id}
        numPlayers={props.players.length}
      />
    );
  }

  function renderCalledCard() {
    if (!props.calledCard) return;
    return (
      <div className={css.calledCard}>
        <span>{translate('callcard_player_called')}</span>
        <div className={css.cardContainer}>
          <div>
            <Card type={props.calledCard} />
          </div>
        </div>
      </div>
    );
  }

  function renderTrumpSuit() {
    if (props.trumpSuit === null || props.contract != Contract.Solo) return;
    const trumpCard: ICard = { color: props.trumpSuit, value: 10 };
    return (
      <div className={css.calledCard}>
        <span>{translate('callcard_is_trumpsuit')}</span>
        <div className={css.cardContainer}>
          <div>
            <Card type={trumpCard} />
          </div>
        </div>
      </div>
    );
  }

  function renderKitty() {
    return <Kitty kitty={props.kitty} revealed={props.kittyRevealed} />;
  }

  function renderTrick() {
    const trick = props.kitty.length > 0 ? null : props.trick.cards.length > 0 ? props.trick : props.prevTrick;
    return (
      <Trick
        trick={trick ? trick.cards : []}
        leaderPos={trick && trick.leader ? +trick.leader.id : 0}
        winnerPos={trick && trick.winner ? +trick.winner.id : -1}
        currPos={+props.player.id}
        numPlayers={props.players.length}
      />
    );
  }

  function renderButtonBar() {
    const buttons = [
      renderButtonsBid(),
      renderButtonsDiscard(),
      renderButtonsCall(),
      renderButtonsTrump(),
      renderButtonsTout(),
      renderButtonsContra(),
      renderButtonsFinish(),
    ];
    if (!buttons.some((b) => b)) return;
    return (
      <div
        className={[
          css.buttonBar,
          props.showRoundSummary ? css.below : '',
          props.callCard || props.selectTrump ? css.callCards : '',
        ].join(' ')}
      >
        {buttons}
      </div>
    );
  }

  function renderButtonsBid() {
    if (!props.selectBid) return;
    const highest_bid = Math.max(...props.players.map((p) => p.bid));
    const is_first_bidround = props.player.bid == Contract.None;
    const allowed_bids = util.allowedBids(props.players.length, is_first_bidround);
    const canCallAce = ['Schell', 'Gras', 'Eichel'].some((colName) => {
      const colorInHand = props.player.hand.filter((C) => C.color == CardColor[colName]);
      if (colorInHand.some((C) => C.value == 14)) {
        return false;
      }
      return !colorInHand.every((C) => [11, 12].indexOf(C.value) >= 0);
    });
    return allowed_bids.map(util.getBidName).map((name, i) => {
      const text: string = translate(name);
      let selectable = allowed_bids[i] <= Contract.Some || highest_bid < allowed_bids[i];
      if (allowed_bids[i] == Contract.Ace && !canCallAce) {
        selectable = false;
      }
      return (
        <Button
          key={allowed_bids[i]}
          text={text}
          red={allowed_bids[i] == 0}
          dirleft={allowed_bids[i] <= 2}
          click={selectable ? () => props.selectBid(allowed_bids[i]) : null}
        />
      );
    });
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

  function renderButtonsTrump() {
    if (!props.selectTrump) return;
    let question = translate('callcard_select_trumpsuit');
    return (
      <>
        <div className={css.question}>{question}:</div>
        {['Schell', 'Herz', 'Gras', 'Eichel'].map((col) => {
          const card: ICard = { color: CardColor[col], value: 10 };
          const colorInHand = props.player.hand.filter((C) => C.color == card.color);
          if (colorInHand.every((C) => [11, 12].indexOf(C.value) >= 0)) return null;
          return (
            <div key={col} className={css.cardContainer} onClick={() => props.selectTrump(card.color)}>
              <div>
                <Card type={card} />
              </div>
            </div>
          );
        })}
      </>
    );
  }

  function renderButtonsCall() {
    if (!props.callCard) return;
    let question = translate('callcard_select_ace');
    return (
      <>
        <div className={css.question}>{question}:</div>
        {['Schell', 'Gras', 'Eichel'].map((col) => {
          const colorInHand = props.player.hand.filter((C) => C.color == CardColor[col]);
          if (colorInHand.some((C) => C.value == 14)) {
            return null;
          }
          if (colorInHand.every((C) => [11, 12].indexOf(C.value) >= 0)) {
            return null;
          }
          const card: ICard = { color: CardColor[col], value: 14 };
          return (
            <div key={col} className={css.cardContainer} onClick={() => props.callCard(card)}>
              <div>
                <Card type={card} />
              </div>
            </div>
          );
        })}
      </>
    );
  }

  function renderButtonsTout() {
    if (!props.announceTout) return;
    return (
      <>
        <div className={css.question}>{translate('tout_announce_q')}</div>
        <div style={{ whiteSpace: 'nowrap' }}>
          <Button
            text={translate('tout_announce_no')}
            red={true}
            dirleft={true}
            click={() => props.announceTout(false)}
          />
          <Button text={translate('tout_announce_yes')} click={() => props.announceTout(true)} />
        </div>
      </>
    );
  }

  function renderButtonsContra() {
    if (!props.giveContra || declinedContra) return;
    const contraType = props.player.isTaker || props.player.id == props.calledTakerId ? 'retour' : 'contra';
    return (
      <>
        <div className={css.question}>{translate(`contra_announce_${contraType}_q`)}</div>
        <div style={{ whiteSpace: 'nowrap' }}>
          <Button
            text={translate('contra_announce_no')}
            red={true}
            dirleft={true}
            click={() => setDeclinedContra(true)}
          />
          <Button text={translate('contra_announce_yes')} click={() => props.giveContra()} />
        </div>
      </>
    );
  }

  function renderButtonsFinish() {
    if (!props.endGame || props.player.isReady) return;
    return (
      <div style={{ whiteSpace: 'nowrap' }}>
        <Button
          text={translate('roundend_next')}
          below={true}
          click={() => {
            if (declinedContra) {
              setDeclinedContra(false);
            }
            props.endGame(false);
          }}
        />
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
        {renderTrumpSuit()}
        {renderCalledCard()}
        {renderPrevTrick()}
        {renderKitty()}
        <PlayerZones
          currentPlayerId={props.showRoundSummary ? null : props.currentPlayerId}
          perspectivePlayerId={props.player.id}
          currentLeaderId={props.showRoundSummary ? '' : props.trick.leader.id}
          players={props.players}
          playerNames={props.playerNames}
          contract={props.contract}
          tout={props.tout}
          contra={props.contra}
        />
        {renderTrick()}
        {renderButtonBar()}
      </div>
      <div className={css.lowerBoard}>
        <PlayerHand
          playerId={props.player.id}
          hand={props.player.hand}
          selectable={props.selectableCards}
          selection={selectedCards || []}
          selectCards={props.selectCards}
        />
      </div>
    </div>
  );
}
