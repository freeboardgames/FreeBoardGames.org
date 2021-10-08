import * as React from 'react';
import { useCurrentGameTranslation } from 'infra/i18n';

import css from './PlayerZone.module.css';

export function PlayerZone(props: {
  numPlayers: number;
  contract: number;
  biddingEnded: boolean;
  roundEnded: boolean;
  bid: string;
  bidPass: boolean;
  announcement?: string;
  name: string;
  active: boolean;
  dealer: boolean;
  taker: boolean;
  leader: boolean;
  score: string;
  positionIndex: number;
}) {
  const { translate } = useCurrentGameTranslation();
  const markActive = props.biddingEnded && !props.roundEnded && props.active;

  function renderZoneContent() {
    return (
      <div>
        <div className={css.bidStatus}>
          {props.announcement ? <div className={css.announcement}>{props.announcement}</div> : null}
          <div className={props.bidPass ? css.pass : ''}>{props.bid}</div>
        </div>
        <div className={css.statuses}>
          <div className={css.name}>{props.name}</div>
          {renderStatuses()}
        </div>
      </div>
    );
  }

  function renderStatuses() {
    let statuses = [
      <span key="score" className={css.score} title={translate('status_score')}>
        &#x1F4B0; {props.score}
      </span>,
    ];
    if (!props.roundEnded && props.dealer) {
      statuses.push(
        <span key="dealer" title={translate('status_dealer')}>
          &#x25B6;&#xFE0F;
        </span>,
      );
    }
    if (props.bidPass) {
      statuses.push(
        <span key="passing" title={translate('status_passing')}>
          &#x1F44E;
        </span>,
      );
    } else if (props.bid) {
      statuses.push(
        <span key="bidding" title={translate('status_bidding')}>
          &#x1F44D;
        </span>,
      );
    }
    if (props.biddingEnded) {
      if (props.taker) {
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
