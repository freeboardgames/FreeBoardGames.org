import * as React from 'react';

import css from './PlayerZones.css';
import { IPlayerZoneProps, PlayerZone, PlayerStatus } from './PlayerZone';
import IPlayer from './player';
import { getMaxPlayerBet } from './game';

export interface IPlayerZonesProps {
  currentPlayerId: string;
  perspectivePlayerId: string;
  players: IPlayer[];
  canRevealTargetStack: (playerId: string) => boolean;
  revealCard?: (playerId: string) => void;
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
    var perspectiveIndex = players.findIndex((p) => p.id === this.props.perspectivePlayerId);
    var zones = this.props.players.map((p: IPlayer, i) => {
      var result: IPlayerZoneProps = {
        playerStatuses: this.getPlayerStatuses(p),
        bet: p.bet,
        totalPlayerCards: p.hand.length + p.stack.length + p.revealedStack.length,
        playerId: p.id,
        totalPlayers: this.props.players.length,
        positionIndex: i >= perspectiveIndex ? i - perspectiveIndex : perspectiveIndex + i,
        stackSize: p.stack.length,
        revealedStack: p.revealedStack,
        revealCard: this.props.canRevealTargetStack(p.id) ? this.props.revealCard : null,
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

  getPlayerStatuses(player: IPlayer): PlayerStatus[] {
    var statuses: PlayerStatus[] = [];
    if (player.id === this.props.currentPlayerId) statuses.push(PlayerStatus.CurrentPlayer);

    if (player.wins > 0) statuses.push(PlayerStatus.HasWin);

    if (player.betSkipped) statuses.push(PlayerStatus.Skipped);

    if (player.bet > 0) statuses.push(PlayerStatus.HasBet);

    if (getMaxPlayerBet(this.props.players) === player.bet) statuses.push(PlayerStatus.HasMaxBet);

    return statuses;
  }
}
