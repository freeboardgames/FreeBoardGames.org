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
  discard?: () => void;
  endGame?: (quit: boolean) => void;
}) {
  const { translate } = useCurrentGameTranslation();
  const selectedCards = props.discard ? props.player.discardSelection : [];

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
    const heading = props.contract == Contract.Ace ? 'callcard_player_called' : 'callcard_is_trumpsuit';
    return (
      <div className={css.calledCard}>
        <span>{translate(heading)}</span>
        <div className={css.cardContainer}>
          <div>
            <Card type={props.calledCard} />
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
    const buttons = [renderButtonsBid(), renderButtonsCall(), renderButtonsDiscard(), renderButtonsFinish()];
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
    const allowed_bids = props.players.length == 4 ? [0, 1, 2, 3, 4] : [0, 2, 3, 4];
    return allowed_bids.map(util.getBidName).map((name, i) => {
      const text: string = translate(name);
      let selectable = false;
      if (props.selectBid) {
        let num_aces = props.player.hand.filter((C) => C.color != CardColor.Herz && C.value == 14).length;
        if (allowed_bids[i] == 1 && num_aces == 3) {
          selectable = false;
        } else {
          selectable = allowed_bids[i] == 0 || highest_bid < allowed_bids[i];
        }
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

  function renderButtonsCall() {
    if (!props.callCard) return;
    let question =
      props.contract == Contract.Ace ? translate('callcard_select_ace') : translate('callcard_select_trumpsuit');
    return (
      <>
        <div className={css.question}>{question}:</div>
        {['Schell', 'Herz', 'Gras', 'Eichel'].map((col) => {
          if (props.contract == Contract.Ace) {
            if (col == 'Herz') {
              return null;
            }
            if (props.player.hand.find((C) => C.color == CardColor[col] && C.value == 14)) {
              return null;
            }
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

  function renderButtonsFinish() {
    if (!props.endGame || props.player.isReady) return;
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
          currentLeaderId={props.showRoundSummary ? '' : props.trick.leader.id}
          players={props.players}
          playerNames={props.playerNames}
          contract={props.contract}
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
