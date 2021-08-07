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
    const perspectiveIndex = parseInt(this.props.perspectivePlayerId);
    const numPlayers = this.props.players.length;
    const player = this.props.players[index];
    return (
      <div key={index} className={css.zone}>
        <PlayerZone
          numPlayers={numPlayers}
          biddingEnded={this.props.players.some((p) => p.isTaker)}
          roundEnded={this.props.currentLeaderId == ''}
          player={player}
          playerName={this.props.playerNames[index]}
          active={(!this.props.currentPlayerId && !player.isReady) || player.id === this.props.currentPlayerId}
          leader={player.id === this.props.currentLeaderId}
          slam={this.props.slam}
          positionIndex={util.mod(index - perspectiveIndex, numPlayers)}
        />
      </div>
    );
  }
}
