import * as React from 'react';

import css from './PlayerZones.css';
import { IPlayerZoneProps, PlayerZone } from './PlayerZone';
import IPlayer from './player';

export interface IPlayerZonesProps {
  currentPlayerIndex: number;
  perspectivePlayer: string;
  players: IPlayer[];
  revealCard?: (playerIndex: number) => void;
}

export class PlayerZones extends React.Component<IPlayerZonesProps, {}> {
  render() {
    return (
      <div className={css.playerZonesContainer}>
        <div className={css.playerZones}>{this.renderZones()}</div>
      </div>
    );
  }

  renderZones() {
    var zones = this.props.players.map((p, i) => {
      var result: IPlayerZoneProps = {
        playerIndex: i,
        stackSize: p.stack.length,
        revealedStack: p.revealedStack,
        revealCard: this.props.revealCard,
      };

      return result;
    });

    return zones.map((z, i) => this.renderZone(z, i));
  }

  renderZone(zoneProps: IPlayerZoneProps, index: number) {
    var totalPlayers = this.props.players.length;
    var tableRotation = 360 * (index / totalPlayers);
    var maxSpacing = 200;
    var minSpacing = 50;
    var playerSpacing = minSpacing + (maxSpacing - minSpacing) * (totalPlayers / 6);
    var transformOriginStyle = `50% -${playerSpacing}px`;
    var transformStyle = `rotate(${tableRotation}deg)`;

    return (
      <div
        className={css.zone}
        key={index}
        style={{ transformOrigin: transformOriginStyle, transform: transformStyle }}
      >
        <PlayerZone {...zoneProps}></PlayerZone>
      </div>
    );
  }
}
