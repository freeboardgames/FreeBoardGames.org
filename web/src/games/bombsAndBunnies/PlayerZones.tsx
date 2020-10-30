import * as React from 'react';

import css from './PlayerZones.css';
<<<<<<< HEAD
import { IPlayerZoneProps, PlayerZone, PlayerStatus } from './PlayerZone';
import IPlayer from './player';
import { getMaxPlayerBet } from './game';
import { BetDisplay, IBetDisplayProps } from './BetDisplay';
import { DiscardPile, IDiscardPileProps } from './DiscardPile';

export interface IPlayerZonesProps {
  betDisplayProps?: IBetDisplayProps;
  discardPileProps?: IDiscardPileProps;

  currentPlayerId: string;
  perspectivePlayerId: string;
  players: IPlayer[];
  canRevealTargetStack: (playerId: string) => boolean;
  revealCard?: (playerId: string) => void;
=======
import { IPlayerZoneProps, PlayerZone } from './PlayerZone';
import IPlayer from './player';

export interface IPlayerZonesProps {
  currentPlayerIndex: number;
  perspectivePlayer: string;
  players: IPlayer[];
  revealCard?: (playerIndex: number) => void;
>>>>>>> upstream/master
}

export class PlayerZones extends React.Component<IPlayerZonesProps, {}> {
  render() {
    return (
      <div className={css.playerZonesContainer}>
        <div className={css.playerZones}>{this.renderZones()}</div>
<<<<<<< HEAD
        <div className={css.centerDisplay}>
          {this.renderBetDisplay()}
          {this.renderDiscardPile()}
        </div>
=======
>>>>>>> upstream/master
      </div>
    );
  }

<<<<<<< HEAD
  renderBetDisplay() {
    var props = this.props.betDisplayProps;
    if (props === undefined) return null;

    return <BetDisplay {...this.props.betDisplayProps}></BetDisplay>;
  }

  renderDiscardPile() {
    var props = this.props.discardPileProps;
    if (this.props.betDisplayProps !== undefined || props === undefined) return null;

    return <DiscardPile {...this.props.discardPileProps}></DiscardPile>;
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
        playerCardStyle: p.cardStyle,
        totalPlayers: this.props.players.length,
        positionIndex: i >= perspectiveIndex ? i - perspectiveIndex : perspectiveIndex + i,
        stackSize: p.stack.length,
        revealedStack: p.revealedStack,
        revealCard: this.props.canRevealTargetStack(p.id) ? this.props.revealCard : null,
=======
  renderZones() {
    var zones = this.props.players.map((p, i) => {
      var result: IPlayerZoneProps = {
        playerIndex: i,
        stackSize: p.stack.length,
        revealedStack: p.revealedStack,
        revealCard: this.props.revealCard,
>>>>>>> upstream/master
      };

      return result;
    });

    return zones.map((z, i) => this.renderZone(z, i));
  }

  renderZone(zoneProps: IPlayerZoneProps, index: number) {
<<<<<<< HEAD
    return (
      <div className={css.zone}>
        <PlayerZone {...zoneProps} key={index}></PlayerZone>
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
=======
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
>>>>>>> upstream/master
}
