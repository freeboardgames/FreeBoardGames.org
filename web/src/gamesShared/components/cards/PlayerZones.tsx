import * as React from 'react';
import { useCurrentGameTranslation } from 'infra/i18n';
import { ICard, Pattern } from 'gamesShared/definitions/cards';
import { Card } from 'gamesShared/components/cards/Card';

import css from './PlayerZones.module.css';

function mod(n: number, m: number): number {
  return ((n % m) + m) % m;
}

export function PlayerZones(props: {
  currentPlayerId: string;
  perspectivePlayerId: string;
  currentLeaderId: string;
  bids: (JSX.Element | string)[];
  bidPass: boolean[];
  bidding: number[];
  announcements: (JSX.Element | string)[];
  announcementStyles?: React.CSSProperties[];
  names: string[];
  hands: ICard[][];
  handExposed?: boolean[];
  pattern: Pattern;
  isActive: boolean[];
  markActive: boolean[];
  isDealer: boolean[];
  isTaker: boolean[];
  isOpponent: boolean[];
  isLeader: boolean[];
  scores: string[];
  clockwise?: boolean;
}) {
  const { translate } = useCurrentGameTranslation();
  const numPlayers = props.names.length;
  const handExposed = props.handExposed || props.names.map(() => false);

  function renderZone(index: number) {
    const perspectiveIndex = +props.perspectivePlayerId;
    let positionIndex = mod(index - perspectiveIndex, numPlayers);
    if (props.clockwise) {
      positionIndex = mod(numPlayers - positionIndex, numPlayers);
    }
    let announceStyle = null;
    if (props.announcementStyles && props.announcementStyles[index]) {
      announceStyle = props.announcementStyles[index];
    }
    return (
      <div key={index} className={css.zone}>
        <div
          className={[
            css.playerZone,
            props.markActive[index] ? css.active : '',
            positionIndex == 0 ? css.thisPlayer : '',
            css[`p${Math.max(2, numPlayers)}`],
            css[`i${positionIndex + 1}`],
          ].join(' ')}
        >
          <div>
            <div className={css.bidStatus}>
              <div className={css.announcement} style={announceStyle}>
                {props.announcements[index]}
              </div>
              <div className={props.bidPass[index] ? css.pass : ''}>{props.bids[index]}</div>
            </div>
            {!props.hands[index] ? null : renderHand(index)}
            <div className={css.statuses}>
              <div className={css.name}>{props.names[index]}</div>
              {renderStatuses(index)}
            </div>
          </div>
        </div>
      </div>
    );
  }

  function renderHand(index: number) {
    const width = handExposed[index] ? 80 : 70;
    return (
      <div className={[css.hand, handExposed[index] ? css.exposed : ''].join(' ')}>
        {props.hands[index].map((C, i) => {
          return (
            <div key={i} className={css.arrangeCard}>
              <Card pattern={props.pattern} type={C} width={width} />
            </div>
          );
        })}
      </div>
    );
  }

  function renderStatuses(index: number) {
    let statuses = [
      <span key="score" className={css.score} title={translate('status_score')}>
        &#x1F4B0; {props.scores[index]}
      </span>,
    ];
    if (props.isDealer[index]) {
      statuses.push(
        <span key="dealer" title={translate('status_dealer')}>
          &#x25B6;&#xFE0F;
        </span>,
      );
    }
    if (props.bidding[index] == 0) {
      statuses.push(
        <span key="passing" title={translate('status_passing')}>
          &#x1F44E;
        </span>,
      );
    } else if (props.bidding[index] == 1) {
      statuses.push(
        <span key="bidding" title={translate('status_bidding')}>
          &#x1F44D;
        </span>,
      );
    }
    if (props.isTaker[index]) {
      statuses.push(
        <span key="taker" title={translate('status_taker')}>
          &#x2694;&#xFE0F;
        </span>,
      );
    } else if (props.isOpponent[index]) {
      statuses.push(
        <span key="opponent" title={translate('status_opponent')}>
          &#x1F6E1;&#xFE0F;
        </span>,
      );
    }
    if (props.isLeader[index]) {
      statuses.push(
        <span key="leader" title={translate('status_leader')}>
          &#x1F6A9;
        </span>,
      );
    }
    if (props.isActive[index]) {
      statuses.push(
        <span key="active" title={translate('status_active')} className={css.active}>
          &#x1F4A1;
        </span>,
      );
    }
    return statuses;
  }

  return (
    <div className={css.playerZonesContainer}>
      <div className={css.playerZones}>{props.names.map((_, i) => renderZone(i))}</div>
    </div>
  );
}
