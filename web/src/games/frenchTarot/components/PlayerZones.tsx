import * as React from 'react';

import css from './PlayerZones.module.css';
import { PlayerZone } from './PlayerZone';

import { IPlayer } from '../engine/types';
import * as util from '../engine/util';

export class PlayerZones extends React.Component<
  {
    currentPlayerId: string;
    perspectivePlayerId: string;
    currentLeaderId: string;
    players: IPlayer[];
    playerNames: string[];
    contract: number;
    slam: boolean;
  },
  {}
> {
  render() {
    return (
      <div className={css.playerZonesContainer}>
        <div className={css.playerZones}>{this.props.players.map((_, i) => this.renderZone(i))}</div>
        <div className={css.centerDisplay}></div>
      </div>
    );
  }

  renderZone(index: number) {
    const perspectiveIndex = +this.props.perspectivePlayerId;
    const numPlayers = this.props.players.length;
    const player = this.props.players[index];
    const active = (!this.props.currentPlayerId && !player.isReady) || player.id === this.props.currentPlayerId;
    return (
      <div key={index} className={css.zone}>
        <PlayerZone
          numPlayers={numPlayers}
          contract={this.props.contract}
          biddingEnded={this.props.players.some((p) => p.isTaker)}
          roundEnded={this.props.currentLeaderId == ''}
          player={player}
          playerName={this.props.playerNames[index]}
          active={active}
          leader={player.id === this.props.currentLeaderId}
          slam={this.props.slam}
          positionIndex={util.mod(index - perspectiveIndex, numPlayers)}
        />
      </div>
    );
  }
}
