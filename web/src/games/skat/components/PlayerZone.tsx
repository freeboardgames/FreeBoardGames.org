import * as React from 'react';
import { useCurrentGameTranslation } from 'infra/i18n';

import css from './PlayerZone.module.css';
import { IPlayer, Contract, CardColor, Announcement } from '../types';

export function PlayerZone(props: {
  numPlayers: number;
  contract: Contract;
  trumpSuit: CardColor;
  announcement: Announcement;
  handGame: boolean;
  biddingEnded: boolean;
  roundEnded: boolean;
  player: IPlayer;
  playerName: string;
  active: boolean;
  leader: boolean;
  positionIndex: number;
}) {
  const { translate } = useCurrentGameTranslation();
  const markActive = props.biddingEnded && !props.roundEnded && props.active;

  function renderZoneContent() {
    const P = props.player;
    const bid = props.biddingEnded && !P.isTaker ? -1 : P.bid;
    let playerBidStr = '';
    if (props.announcement !== null && P.isTaker) {
      const contractStr = props.contract != Contract.Suit ? Contract[props.contract] : CardColor[props.trumpSuit];
      const announceStr = props.announcement != Announcement.None ? Announcement[props.announcement] : '';
      playerBidStr = [
        translate(`bidstr_${contractStr.toLowerCase()}`),
        announceStr != '' ? translate(`bidstr_${announceStr.toLowerCase()}`) : '',
        props.handGame ? translate('bidstr_hand') : '',
        `(${P.bid})`,
      ].join(' ');
    } else {
      playerBidStr = bid == 0 ? translate('bid_pass') : bid > 1 ? bid.toString() : '';
    }
    return (
      <div>
        <div className={css.bidStatus}>
          <div className={bid == 0 ? css.pass : ''}>{playerBidStr}</div>
        </div>
        <div className={css.statuses}>
          <div className={css.playerName}>{props.playerName}</div>
          {renderStatuses()}
        </div>
      </div>
    );
  }

  function renderStatuses() {
    let statuses = [
      <span key="score" className={css.score} title={translate('status_score')}>
        &#x1F4B0; {props.player.score}
      </span>,
    ];
    if (!props.roundEnded && props.player.isDealer) {
      statuses.push(
        <span key="dealer" title={translate('status_dealer')}>
          &#x25B6;&#xFE0F;
        </span>,
      );
    }
    if (!props.biddingEnded) {
      if (props.player.bid == 0) {
        statuses.push(
          <span key="passing" title={translate('status_passing')}>
            &#x1F44E;
          </span>,
        );
      } else if (props.player.bid > 1) {
        statuses.push(
          <span key="bidding" title={translate('status_bidding')}>
            &#x1F44D;
          </span>,
        );
      }
    }
    if (props.biddingEnded) {
      if (props.player.isTaker) {
        statuses.push(
          <span key="taker" title={translate('status_taker')}>
            &#x2694;&#xFE0F;
          </span>,
        );
      } else if (props.biddingEnded && props.numPlayers < 5) {
        statuses.push(
          <span key="opponent" title={translate('status_opponent')}>
            &#x1F6E1;&#xFE0F;
          </span>,
        );
      }
      if (!props.roundEnded && props.leader) {
        statuses.push(
          <span key="leader" title={translate('status_leader')}>
            &#x1F6A9;
          </span>,
        );
      }
    }
    if (props.active) {
      statuses.push(
        <span key="active" title={translate('status_active')} className={css.active}>
          &#x1F4A1;
        </span>,
      );
    }
    return statuses;
  }

  return (
    <div
      className={[
        css.playerZone,
        markActive ? css.active : '',
        props.positionIndex == 0 ? css.thisPlayer : '',
        css[`p${Math.max(3, props.numPlayers)}`],
        css[`i${props.positionIndex + 1}`],
      ].join(' ')}
    >
      {renderZoneContent()}
    </div>
  );
}
