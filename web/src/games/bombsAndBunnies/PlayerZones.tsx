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
    var players = this.props.players;
    var perspectiveIndex = players.findIndex((p) => p.id === this.props.perspectivePlayer);
    var zones = this.props.players.map((p, i) => {
      var result: IPlayerZoneProps = {
        playerIndex: i,
        totalPlayers: this.props.players.length,
        positionIndex: i >= perspectiveIndex ? i - perspectiveIndex : perspectiveIndex + i,
        stackSize: p.stack.length,
        revealedStack: p.revealedStack,
        revealCard: this.props.revealCard,
      };

      return result;
    });

    return zones.map((z, i) => this.renderZone(z, i));
  }

  renderZone(zoneProps: IPlayerZoneProps, index: number) {
    return (
      <div className={css.zone} key={index}>
        <PlayerZone {...zoneProps}></PlayerZone>
      </div>
    );
  }
}
