import * as React from 'react';

import css from './PlayerZones.css';
import { IPlayerZoneProps, PlayerZone, PlayerStatus } from './PlayerZone';
import { BetDisplay, IBetDisplayProps } from './BetDisplay';
import { DiscardPile, IDiscardPileProps } from './DiscardPile';
import { IPlayerProps } from './shared/interfaces';

export interface IPlayerZonesProps {
  betDisplayProps?: IBetDisplayProps;
  discardPileProps?: IDiscardPileProps;

  currentPlayerId: string;
  perspectivePlayerId: string;
  players: IPlayerProps[];
  currentBet: number;
  canRevealTargetStack: (playerId: string) => boolean;
  revealCard?: (playerId: string) => void;
}

export class PlayerZones extends React.Component<IPlayerZonesProps, {}> {
  render() {
    return (
      <div className={css.playerZonesContainer}>
        <div className={css.playerZones}>{this.renderZones()}</div>
        <div className={css.centerDisplay}>
          {this.renderBetDisplay(0)}
          {this.renderDiscardPile(1)}
        </div>
      </div>
    );
  }

  renderBetDisplay(key: number) {
    const props = this.props.betDisplayProps;
    if (props === undefined) return null;

    return <BetDisplay key={key} {...this.props.betDisplayProps}></BetDisplay>;
  }

  renderDiscardPile(key: number) {
    const props = this.props.discardPileProps;
    if (this.props.betDisplayProps !== undefined || props === undefined) return null;

    return <DiscardPile key={key} {...this.props.discardPileProps}></DiscardPile>;
  }

  renderZones() {
    const players = this.props.players;
    const perspectiveIndex = players.findIndex((p) => p.id === this.props.perspectivePlayerId);
    const totalPlayers = this.props.players.length;

    return this.props.players.map((player, i) => {
      const zone = this.getPlayerZoneProps(player, i, totalPlayers, perspectiveIndex);
      return this.renderZone(zone, i);
    });
  }

  renderZone(zoneProps: IPlayerZoneProps, index: number) {
    return (
      <div key={index} className={css.zone}>
        <PlayerZone {...zoneProps} key={index}></PlayerZone>
      </div>
    );
  }

  getPlayerZoneProps(
    player: IPlayerProps,
    index: number,
    totalPlayers: number,
    perspectiveIndex: number,
  ): IPlayerZoneProps {
    const playerStatuses = this.getPlayerStatuses(player);
    const bet = player.bet;
    const totalPlayerCards = player.hand.length + player.stack.length + player.revealedStack.length;
    const playerId = player.id;
    const playerName = player.name;
    const playerCardStyle = player.cardStyle;
    const positionIndex = this.getPositionIndex(index, perspectiveIndex, totalPlayers);
    const stackSize = player.stack.length;
    const revealedStack = player.revealedStack;
    const revealCard = this.props.canRevealTargetStack(player.id) ? this.props.revealCard : null;
    const playerIsOut = player.isOut;

    return {
      playerStatuses,
      bet,
      totalPlayerCards,
      playerId,
      playerName,
      playerCardStyle,
      totalPlayers,
      positionIndex,
      stackSize,
      revealedStack,
      revealCard,
      playerIsOut,
    };
  }

  getPositionIndex(index: number, perspectiveIndex: number, totalPlayers: number) {
    return index >= perspectiveIndex ? index - perspectiveIndex : totalPlayers - perspectiveIndex + index;
  }

  getPlayerStatuses(player: IPlayerProps): PlayerStatus[] {
    let statuses: PlayerStatus[] = [];
    if (player.isOut) return [PlayerStatus.IsOut];

    if (player.id === this.props.currentPlayerId) statuses.push(PlayerStatus.CurrentPlayer);

    if (player.wins > 0) statuses.push(PlayerStatus.HasWin);

    if (player.betSkipped) statuses.push(PlayerStatus.Skipped);

    if (player.isDiscarding) {
      statuses.push(PlayerStatus.Discarding);
    } else if (player.isBeingPunished) {
      statuses.push(PlayerStatus.BeingPunished);
    } else {
      if (player.bet > 0) statuses.push(PlayerStatus.HasBet);

      if (this.props.currentBet === player.bet) statuses.push(PlayerStatus.HasMaxBet);
    }

    return statuses;
  }
}
