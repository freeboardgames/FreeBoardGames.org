import * as React from 'react';

import css from './PlayerZones.css';
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
}

export class PlayerZones extends React.Component<IPlayerZonesProps, {}> {
  render() {
    return (
      <div className={css.playerZonesContainer}>
        <div className={css.playerZones}>{this.renderZones()}</div>
        <div className={css.centerDisplay}>
          {this.renderBetDisplay()}
          {this.renderDiscardPile()}
        </div>
      </div>
    );
  }

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
        playerIsOut: p.isOut
      };

      return result;
    });

    return zones.map((z, i) => this.renderZone(z, i));
  }

  renderZone(zoneProps: IPlayerZoneProps, index: number) {
    return (
      <div className={css.zone}>
        <PlayerZone {...zoneProps} key={index}></PlayerZone>
      </div>
    );
  }

  getPlayerStatuses(player: IPlayer): PlayerStatus[] {
    var statuses: PlayerStatus[] = [];
    if (player.isOut)
      return [PlayerStatus.IsOut];

    if (player.id === this.props.currentPlayerId) 
      statuses.push(PlayerStatus.CurrentPlayer);

    if (player.wins > 0) 
      statuses.push(PlayerStatus.HasWin);

    if (player.betSkipped) 
      statuses.push(PlayerStatus.Skipped);

    if (player.bet > 0) 
      statuses.push(PlayerStatus.HasBet);

    if (getMaxPlayerBet(this.props.players) === player.bet) 
      statuses.push(PlayerStatus.HasMaxBet);

    return statuses;
  }
}
