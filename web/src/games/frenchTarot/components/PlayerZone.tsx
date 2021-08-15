import * as React from 'react';

import css from './PlayerZone.module.css';
import { IPlayer } from '../types';
import * as util from '../util/misc';

export class PlayerZone extends React.Component<
  {
    numPlayers: number;
    contract: number;
    biddingEnded: boolean;
    roundEnded: boolean;
    player: IPlayer;
    playerName: string;
    active: boolean;
    leader: boolean;
    slam: boolean;
    positionIndex: number;
  },
  {}
> {
  render() {
    const markActive = this.props.biddingEnded && !this.props.roundEnded && this.props.active;
    return (
      <div
        className={[
          css.playerZone,
          markActive ? css.active : '',
          this.props.positionIndex == 0 ? css.thisPlayer : '',
          css[`p${Math.max(3, this.props.numPlayers)}`],
          css[`i${this.props.positionIndex + 1}`],
        ].join(' ')}
      >
        {this.renderZoneContent()}
      </div>
    );
  }

  renderZoneContent() {
    const P = this.props.player;
    const slam = P.isTaker && this.props.slam;
    const bid = P.isTaker ? this.props.contract : P.bid;
    const playerBidStr = bid >= 0 ? `«${util.getBidName(bid)}»` : '';
    return (
      <div>
        <div className={css.bidStatus}>
          {slam ? <div className={css.slam}>Announced slam!</div> : null}
          <div className={bid == 0 ? css.pass : ''}>{playerBidStr}</div>
        </div>
        <div className={css.statuses}>
          <div className={css.playerName}>{this.props.playerName}</div>
          {this.renderStatuses()}
        </div>
      </div>
    );
  }

  renderStatuses() {
    var statuses = [
      <span key="Score" className={css.score} title="Score">
        &#x1F4B0; {this.props.player.score}
      </span>,
    ];
    if (!this.props.roundEnded && this.props.player.isDealer) {
      statuses.push(
        <span key="Dealer" title="Dealer">
          &#x25B6;&#xFE0F;
        </span>,
      );
    }
    if (this.props.player.bid == 0) {
      statuses.push(
        <span key="Passing" title="Passing">
          &#x1F44E;
        </span>,
      );
    }
    if (this.props.player.bid > 0) {
      statuses.push(
        <span key="Bidding" title="Bidding">
          &#x1F44D;
        </span>,
      );
    }
    if (this.props.biddingEnded) {
      if (this.props.player.isTaker) {
        statuses.push(
          <span key="Taker" title="Taker">
            &#x2694;&#xFE0F;
          </span>,
        );
      } else if (this.props.biddingEnded && this.props.numPlayers < 5) {
        statuses.push(
          <span key="Opponent" title="Opponent">
            &#x1F6E1;&#xFE0F;
          </span>,
        );
      }
      if (!this.props.roundEnded && this.props.leader) {
        statuses.push(
          <span key="Leader" title="Leader">
            &#x1F6A9;
          </span>,
        );
      }
    }
    if (this.props.active) {
      statuses.push(
        <span key="Active" title="Active" className={css.active}>
          &#x1F552;
        </span>,
      );
    }
    return statuses;
  }
}
