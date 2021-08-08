import * as React from 'react';

import css from './GameBoard.module.css';
import { Button } from './Button';
import { Card } from './Card';
import { Kitty } from './Kitty';
import { PlayerHand } from './PlayerHand';
import { PlayerZones } from './PlayerZones';
import { PreviousTrick } from './PreviousTrick';
import { ScoreBoard } from './ScoreBoard';
import { Trick } from './Trick';

import { IPlayer, ICard, CardColor, ITrick, IRoundSummary } from '../engine/types';
import * as util from '../engine/util';
import * as poignee from '../engine/poignee';

export class Board extends React.Component<
  {
    player: IPlayer;
    players: IPlayer[];
    playerNames: string[];
    contract: number;
    slam: boolean;

    currentPlayerId: string;

    kitty: ICard[];
    kittyRevealed: boolean;

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
  },
  {}
> {
  render() {
    const selectedCards = this.props.declarePoignee || this.props.discard ? this.props.player.discardSelection : [];
    return (
      <div className={css.board}>
        {this.renderScoreBoard()}
        {this.renderCalledCard()}
        {this.renderPrevTrick()}
        {this.renderKitty()}
        <PlayerZones
          currentPlayerId={this.props.showRoundSummary ? null : this.props.currentPlayerId}
          perspectivePlayerId={this.props.player.id}
          currentLeaderId={this.props.showRoundSummary ? '' : this.props.trick.leader.id}
          players={this.props.players}
          playerNames={this.props.playerNames}
          contract={this.props.contract}
          slam={this.props.slam}
        />
        {this.renderTrick()}
        {this.renderButtonBar()}
        <PlayerHand
          playerId={this.props.player.id}
          hand={this.props.player.hand}
          selectable={this.props.selectableCards}
          selection={selectedCards || []}
          selectCards={this.props.selectCards}
        />
      </div>
    );
  }

  renderScoreBoard() {
    return (
      <ScoreBoard
        playerNames={this.props.playerNames}
        playerRoles={this.props.players.map((p) => p.isTaker)}
        roundSummaries={this.props.roundSummaries}
        showRoundSummary={this.props.showRoundSummary}
        playerScores={this.props.players.map((p) => p.score)}
      />
    );
  }

  renderPrevTrick() {
    if (!this.props.players.some((P) => P.isTaker) || this.props.prevTrick.cards.length == 0) return;
    return (
      <PreviousTrick
        trick={this.props.prevTrick.cards}
        leaderPos={parseInt(this.props.prevTrick.leader.id)}
        currPos={parseInt(this.props.player.id)}
        numPlayers={this.props.players.length}
      />
    );
  }

  renderCalledCard() {
    if (!this.props.calledCard) return;
    const takerId = this.props.players.findIndex((P) => P.isTaker);
    return (
      <div className={css.calledCard}>
        <span>{this.props.playerNames[takerId]} called</span>
        <div className={css.cardContainer}>
          <div>
            <Card type={this.props.calledCard} />
          </div>
        </div>
      </div>
    );
  }

  renderKitty() {
    const kitty_size = this.props.kitty.length;
    var kitty_descr: JSX.Element = null;
    if (this.props.kittyRevealed && kitty_size > 6) {
      const name = this.props.playerNames[parseInt(this.props.currentPlayerId)];
      const thresh = poignee.getPoigneeThresholds(this.props.players.length);
      let lvl = 0;
      for (; lvl < thresh.length && thresh[lvl] <= kitty_size; lvl++);
      kitty_descr = (
        <>
          <b>{name}</b> declares a <b>{util.getPoigneeName(lvl - 1)} Poignée</b>:
        </>
      );
    }
    return <Kitty kitty={this.props.kitty} revealed={this.props.kittyRevealed} descr={kitty_descr} />;
  }

  renderTrick() {
    const trick =
      this.props.kitty.length > 0 ? null : this.props.trick.cards.length > 0 ? this.props.trick : this.props.prevTrick;
    return (
      <Trick
        trick={trick ? trick.cards : []}
        leaderPos={trick ? parseInt(trick.leader.id) : 0}
        winnerPos={trick && trick.winner ? parseInt(trick.winner.id) : -1}
        currPos={parseInt(this.props.player.id)}
        numPlayers={this.props.players.length}
      />
    );
  }

  renderButtonBar() {
    return (
      <div
        className={[
          css.buttonBar,
          this.props.showRoundSummary ? css.below : '',
          this.props.callCard ? css.callCards : '',
        ].join(' ')}
      >
        {this.renderButtonsBid()}
        {this.renderButtonsCall()}
        {this.renderButtonsDiscard()}
        {this.renderButtonsSlam()}
        {this.renderButtonsPoignee()}
        {this.renderButtonsFinish()}
      </div>
    );
  }

  renderButtonsBid() {
    if (!this.props.selectBid) return;
    const highest_bid = Math.max(...this.props.players.map((p) => p.bid));
    return [0, 1, 2, 3, 4]
      .map(util.getBidName)
      .map((name, i) => (
        <Button
          key={i}
          text={name}
          red={i == 0}
          dirleft={i <= 2}
          click={this.props.selectBid && (i == 0 || highest_bid < i) ? () => this.props.selectBid(i) : null}
        />
      ));
  }

  renderButtonsCall() {
    if (!this.props.callCard) return;
    let val = 14;
    for (; this.props.player.hand.filter((C) => util.isColorCard(C) && C.value == val).length == 4; val--);
    return (
      <>
        <div className={css.question}>Select a card to call:</div>
        {['Clubs', 'Diamonds', 'Spades', 'Hearts'].map((col) => {
          const card: ICard = { color: CardColor[col], value: val };
          return (
            <div key={col} className={css.cardContainer} onClick={() => this.props.callCard(card)}>
              <div>
                <Card type={card} />
              </div>
            </div>
          );
        })}
      </>
    );
  }

  renderButtonsDiscard() {
    if (!this.props.discard || !this.props.player.discardSelection) return;
    const discard_num = util.kittySize(this.props.players.length);
    const missing_num = discard_num - this.props.player.discardSelection.length;
    const clickable = missing_num == 0;
    const card_s = missing_num == 1 ? 'card' : 'cards';
    const text = clickable ? 'Discard selection' : `Select ${missing_num} more ${card_s}`;
    return <Button text={text} dirleft={true} click={clickable ? () => this.props.discard() : null} />;
  }

  renderButtonsSlam() {
    if (!this.props.announceSlam || this.props.player.isReady) return;
    return (
      <>
        <div className={css.question}>Would you like to announce a slam?</div>
        <Button text={'No, thanks.'} red={true} dirleft={true} click={() => this.props.announceSlam(false)} />
        <Button text={'Yes!'} click={() => this.props.announceSlam(true)} />
      </>
    );
  }

  renderButtonsPoignee() {
    if (!this.props.declarePoignee) return;
    const numPlayers = this.props.players.length;
    const thresh = poignee.getPoigneeThresholds(numPlayers);
    const max_level = poignee.maxPoigneeLevel(this.props.player.hand, numPlayers);
    const sel_size = this.props.player.discardSelection.length;
    let curr_level = 0;
    for (; curr_level < thresh.length && thresh[curr_level] <= sel_size; curr_level++);
    const clickable = curr_level > 0 && sel_size == thresh[curr_level - 1];
    let missing_num = thresh[0] - sel_size;
    let text = '';
    let smallText = '';
    if (curr_level == 0) {
      text =
        `Select ${missing_num}${sel_size == 0 ? '' : ' more'}` +
        ` card${missing_num == 1 ? '' : 's'}` +
        ` for a ${util.getPoigneeName(0)} Poignée`;
    } else if (curr_level == max_level) {
      text = `${util.getPoigneeName(curr_level - 1)} Poignée`;
      if (curr_level > 1) {
        missing_num = sel_size - thresh[curr_level - 2];
        smallText =
          `(deselect ${missing_num}` +
          ` card${missing_num == 1 ? '' : 's'}` +
          ` for a ${util.getPoigneeName(curr_level - 2)} Poignée)`;
      }
    } else if (curr_level < max_level) {
      missing_num = thresh[curr_level] - sel_size;
      text =
        `${missing_num} more card${missing_num == 1 ? '' : 's'}` + ` for a ${util.getPoigneeName(curr_level)} Poignée`;
      if (thresh[curr_level - 1] == sel_size) {
        smallText = `(select ${text})`;
        text = `${util.getPoigneeName(curr_level - 1)} Poignée`;
      } else {
        text = `Select ${text}`;
      }
    }
    return (
      <>
        <div className={css.question}>Would you like to declare a Poigneé?</div>
        <Button text={'No, thanks.'} red={true} dirleft={true} click={() => this.props.declarePoignee(false)} />
        <Button
          text={
            <>
              {text}
              <br />
              <small>{smallText}</small>
            </>
          }
          click={clickable ? () => this.props.declarePoignee(true) : null}
        />
      </>
    );
  }

  renderButtonsFinish() {
    if (this.props.announceSlam || !this.props.endGame || this.props.player.isReady) return;
    return (
      <>
        <Button text={'Next round!'} below={true} click={() => this.props.endGame(false)} />
        <Button text={'Quit game.'} red={true} dirleft={true} below={true} click={() => this.props.endGame(true)} />
      </>
    );
  }
}
