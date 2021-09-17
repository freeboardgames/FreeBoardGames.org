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

import { Announcement, Contract, IPlayer, ICard, CardColor, ITrick, IRoundSummary } from '../types';
import * as util from '../util/misc';

export function Board(props: {
  player: IPlayer;
  players: IPlayer[];
  playerNames: string[];
  holderId: string;
  contract: Contract;
  announcement: Announcement;
  handGame: boolean;

  currentPlayerId: string;

  kitty: ICard[];
  kittyRevealed: boolean;
  kittyPrev: ICard[];

  cardsOuvert: ICard[];

  trick: ITrick;
  prevTrick: ITrick;

  trumpSuit: CardColor;

  selectableCards: boolean[];

  roundSummaries: IRoundSummary[];
  showRoundSummary: boolean;

  selectCards?: (handIndex: number[]) => void;
  selectBid?: (value: number) => void;
  declareHand?: (declare: boolean) => void;
  selectContract?: (contract: Contract) => void;
  selectTrump?: (suit: CardColor) => void;
  announce?: (announcement: Announcement) => void;
  discard?: () => void;
  endGame?: (quit: boolean) => void;
}) {
  const { translate } = useCurrentGameTranslation();
  const selectedCards = props.discard ? props.player.discardSelection : [];
  const [selectedBid_i, setSelectedBid_i] = React.useState(0);

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

  function renderTrumpSuit() {
    if (props.trumpSuit === null) return;
    return (
      <div className={css.trumpSuit}>
        <span>{translate('trumpsuit')}</span>
        <div className={css.arrangeCard}>
          <div className={css.cropCard}>
            <div className={css.scaleCard}>
              <Card type={{ color: props.trumpSuit, value: 14 }} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  function renderKitty() {
    return <Kitty kitty={props.kitty} revealed={props.kittyRevealed} />;
  }

  function renderOuvert() {
    if (!props.cardsOuvert || props.cardsOuvert.length == 0) return;
    const playerPos: number = +props.player.id;
    const taker = props.players.find((P) => P.isTaker);
    const takerPosRel: number = util.mod(+taker.id - playerPos, props.players.length);
    const takerIsLeft = takerPosRel == 1;
    return (
      <div className={`${css.cardsOuvert} ${takerIsLeft ? css.left : ''}`}>
        {props.cardsOuvert.map((C, i) => {
          return (
            <div key={i} className={css.cardContainer}>
              <div>
                <Card type={C} />
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  function renderTrick() {
    const trick = props.kitty.length > 0 ? null : props.trick.cards.length > 0 ? props.trick : props.prevTrick;
    return (
      <Trick
        trick={trick ? trick.cards : []}
        leaderPos={trick ? +trick.leader.id : 0}
        winnerPos={trick && trick.winner ? +trick.winner.id : -1}
        currPos={+props.player.id}
        numPlayers={props.players.length}
      />
    );
  }

  function renderButtonBar() {
    const buttons = [
      renderButtonsBid(),
      renderButtonsHand(),
      renderButtonsContract(),
      renderButtonsTrumpSuit(),
      renderButtonsAnnounce(),
      renderButtonsDiscard(),
      renderButtonsFinish(),
    ];
    if (!buttons.some((b) => b)) return;
    return (
      <div
        className={[css.buttonBar, props.showRoundSummary ? css.below : '', props.selectTrump ? css.suits : ''].join(
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
    const possible_bids = util.all_valid_bids.filter((B) => B > highest_bid);
    const selectedBid = possible_bids[selectedBid_i];
    if (props.player.id == props.holderId) {
      return (
        <>
          <Button text={translate('bid_pass')} red={true} click={() => props.selectBid(0)} />
          <Button text={`${translate('bid_confirm')} (${highest_bid})`} click={() => props.selectBid(highest_bid)} />
        </>
      );
    } else {
      return (
        <>
          <Button text={translate('bid_pass')} red={true} click={() => props.selectBid(0)} />
          <Button text={'<'} click={selectedBid_i <= 0 ? null : () => setSelectedBid_i(selectedBid_i - 1)} />
          <Button text={selectedBid.toString()} click={() => props.selectBid(selectedBid)} />
          <Button
            text={'>'}
            click={selectedBid_i >= possible_bids.length ? null : () => setSelectedBid_i(selectedBid_i + 1)}
          />
        </>
      );
    }
  }

  function renderButtonsHand() {
    if (!props.declareHand) return;
    return (
      <>
        <Button text={translate('declare_take')} red={true} click={() => props.declareHand(false)} />
        <Button text={translate('declare_handgame')} click={() => props.declareHand(true)} />
      </>
    );
  }

  function renderButtonsContract() {
    if (!props.selectContract) return;
    return (
      <>
        <Button text={translate('select_contract_suit')} click={() => props.selectContract(Contract.Suit)} />
        <Button text={translate('select_contract_null')} click={() => props.selectContract(Contract.Null)} />
        <Button text={translate('select_contract_grand')} click={() => props.selectContract(Contract.Grand)} />
      </>
    );
  }

  function renderButtonsTrumpSuit() {
    if (!props.selectTrump) return;
    return (
      <>
        <div className={css.question}>{translate('select_trumpsuit')}:</div>
        {['Diamonds', 'Hearts', 'Spades', 'Clubs'].map((col) => {
          const card: ICard = { color: CardColor[col], value: 14 };
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

  function renderButtonsAnnounce() {
    if (!props.announce) return;
    return (
      <>
        <Button text={translate('announce_none')} red={true} click={() => props.announce(Announcement.None)} />
        {props.contract != Contract.Null ? (
          <>
            <Button text={translate('announce_schneider')} click={() => props.announce(Announcement.Schneider)} />
            <Button text={translate('announce_schwarz')} click={() => props.announce(Announcement.Schwarz)} />
          </>
        ) : null}
        <Button text={translate('announce_ouvert')} click={() => props.announce(Announcement.Ouvert)} />
      </>
    );
  }

  function renderButtonsDiscard() {
    if (!props.discard || !props.player.discardSelection) return;
    const discard_num = 2;
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
        {renderTrumpSuit()}
        {renderPrevTrick()}
        {renderOuvert()}
        {renderKitty()}
        <PlayerZones
          currentPlayerId={props.showRoundSummary ? null : props.currentPlayerId}
          perspectivePlayerId={props.player.id}
          currentLeaderId={props.showRoundSummary ? '' : props.trick.leader.id}
          players={props.players}
          playerNames={props.playerNames}
          contract={props.contract}
          announcement={props.announcement}
          handGame={props.handGame}
          trumpSuit={props.trumpSuit}
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
  return null;
}
