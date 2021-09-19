import * as React from 'react';
import { useCurrentGameTranslation } from 'infra/i18n';

import css from './GameBoard.module.css';
import { Button } from './Button';
import { Card } from './Card';
import { PlayerHand } from './PlayerHand';
import { PlayerZones } from './PlayerZones';
import { PreviousTrick } from './PreviousTrick';
import { ScoreBoard } from './ScoreBoard';
import { Trick } from './Trick';

import { Contract, Announcement, IPlayer, ICard, CardColor, ITrick, IRoundSummary } from '../types';
import * as util from '../util/misc';

export function Board(props: {
  player: IPlayer;
  players: IPlayer[];
  playerNames: string[];
  contract: Contract;
  announcementRe: Announcement;
  announcementContra: Announcement;
  takerId: string;

  currentPlayerId: string;

  trick: ITrick;
  prevTrick: ITrick;

  trumpSuit?: CardColor;

  selectableCards: boolean[];

  roundSummaries: IRoundSummary[];
  showRoundSummary: boolean;

  selectCards?: (handIndex: number[]) => void;
  selectBid?: (contract: Contract) => void;
  selectTrump?: (suit: CardColor) => void;
  announce?: (announcement: Announcement) => void;
  endGame?: (quit: boolean) => void;
}) {
  const { translate } = useCurrentGameTranslation();
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
    if (!props.players.some((P) => P.isTaker) || props.prevTrick.cards.length == 0) return;
    return (
      <PreviousTrick trick={props.prevTrick.cards} leaderPos={+props.prevTrick.leader.id} currPos={+props.player.id} />
    );
  }

  function renderTrumpSuit() {
    if (props.trumpSuit === null || props.contract < Contract.Solo) return;
    const trumpCard: ICard = { color: props.trumpSuit, value: 10 };
    return (
      <div className={css.trumpSuit}>
        <span>{translate('trumpsuit')}</span>
        <div className={css.cardContainer}>
          <div>
            <Card type={trumpCard} />
          </div>
        </div>
      </div>
    );
  }

  function renderTrick() {
    const trick = props.trick.cards.length > 0 ? props.trick : props.prevTrick;
    return (
      <Trick
        trick={trick ? trick.cards : []}
        leaderPos={trick && trick.leader ? +trick.leader.id : 0}
        winnerPos={trick && trick.winner ? +trick.winner.id : -1}
        currPos={+props.player.id}
      />
    );
  }

  function renderButtonBar() {
    const buttons = [renderButtonsBid(), renderButtonsTrump(), renderButtonsAnnounce(), renderButtonsFinish()];
    if (!buttons.some((b) => b)) return;
    return (
      <div
        className={[
          css.buttonBar,
          props.showRoundSummary ? css.below : '',
          props.selectTrump ? css.selectTrump : '',
        ].join(' ')}
      >
        {buttons}
      </div>
    );
  }

  function renderButtonsBid() {
    if (!props.selectBid) return;
    const numBidders = props.players.filter((P) => P.bid == Contract.Some).length;
    const allowed_bids = util.allowedBids(props.player, numBidders);
    return allowed_bids.map(util.getBidName).map((name, i) => {
      const text: string = translate(name);
      return (
        <Button
          key={allowed_bids[i]}
          text={text}
          red={allowed_bids[i] == Contract.Pass}
          click={() => props.selectBid(allowed_bids[i])}
        />
      );
    });
  }

  function renderButtonsTrump() {
    if (!props.selectTrump) return;
    let question = translate('trumpsuit_select');
    return (
      <>
        <div className={css.question}>{question}:</div>
        {['Diamonds', 'Hearts', 'Spades', 'Clubs'].map((col) => {
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

  function renderButtonsAnnounce() {
    if (!props.announce) return;
    const currentAnnouncement = props.player.isTaker ? props.announcementRe : props.announcementContra;
    const newAnnouncement = [
      Announcement.Win,
      Announcement.No90,
      Announcement.No60,
      Announcement.No30,
      Announcement.Schwarz,
    ][util.announceRank(currentAnnouncement)];
    return (
      <>
        <div style={{ whiteSpace: 'nowrap' }}>
          <Button
            text={translate(util.getAnnounceName(newAnnouncement, props.player.isTaker))}
            click={() => props.announce(newAnnouncement)}
          />
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
        {renderPrevTrick()}
        <PlayerZones
          currentPlayerId={props.showRoundSummary ? null : props.currentPlayerId}
          perspectivePlayerId={props.player.id}
          currentLeaderId={props.showRoundSummary ? '' : props.trick.leader.id}
          players={props.players}
          playerNames={props.playerNames}
          contract={props.contract}
          announcementRe={props.announcementRe}
          announcementContra={props.announcementContra}
        />
        {renderTrick()}
        {renderButtonBar()}
      </div>
      <div className={css.lowerBoard}>
        <PlayerHand
          playerId={props.player.id}
          hand={props.player.hand}
          selectable={props.selectableCards}
          selection={[]}
          selectCards={props.selectCards}
        />
      </div>
    </div>
  );
}
