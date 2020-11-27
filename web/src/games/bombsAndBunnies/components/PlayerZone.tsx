import * as React from 'react';

import css from './PlayerZone.css';
import { PlayerStack } from './PlayerStack';
import { PlayerRevealedStack } from './PlayerRevealedStack';
import { CardType, CardStyle } from './shared/interfaces';

const MAX_PLAYERS = 6;
const MIN_PLAYER_RADIUS = 25;
const MAX_PLAYER_RADIUS = 200;

export enum PlayerStatus {
  CurrentPlayer,
  HasWin,
  Skipped,
  HasBet,
  HasMaxBet,
  IsOut,
  Discarding,
  BeingPunished,
}

export interface IPlayerZoneProps {
  playerStatuses: PlayerStatus[];
  bet: number | null;
  totalPlayerCards: number;
  stackSize: number;
  revealedStack: CardType[];
  playerId: string;
  playerCardStyle: CardStyle;
  revealCard?: (playerId: string) => void;
  totalPlayers: number;
  positionIndex: number;
  playerIsOut: boolean;
}

export class PlayerZone extends React.Component<IPlayerZoneProps, {}> {
  render() {
    const radius = this.getRadiusForPlayers(this.props.totalPlayers);
    const angle = (2 * Math.PI * this.props.positionIndex) / this.props.totalPlayers;
    const top = Math.cos(angle) * radius;
    const left = -Math.sin(angle) * radius;

    return (
      <div
        className={css.playerZone}
        style={{ position: 'absolute', top: top, left: left, transform: `translate(-50%, -50%) rotate(${angle}rad)` }}
      >
        {this.renderZoneContent()}
      </div>
    );
  }

  renderZoneContent() {
    if (this.props.playerIsOut) {
      return <div className={css.playerOut}>💀</div>;
    }

    return (
      <div>
        <div className={css.statuses}>{this.renderStatuses()}</div>
        <div className={css.stack}>{this.renderStack()}</div>
        <div className={css.revealedStack}>{this.renderRevealedStack()}</div>
      </div>
    );
  }

  renderStatuses() {
    return this.props.playerStatuses.map((s, i) => this.renderStatus(s, i));
  }

  renderStatus(status: PlayerStatus, index: number) {
    switch (status) {
      case PlayerStatus.CurrentPlayer:
        return (
          <span key={index} title="Waiting for player's move">
            🕒
          </span>
        );

      case PlayerStatus.HasWin:
        return (
          <span key={index} title="Has a win">
            🔥
          </span>
        );

      case PlayerStatus.Skipped:
        return (
          <span key={index} title="Skipped bet">
            ❌
          </span>
        );

      case PlayerStatus.HasBet:
        return (
          <span key={index} title="Has bet">
            ✋
          </span>
        );

      case PlayerStatus.HasMaxBet:
        return (
          <span key={index} title="Has max bet">
            😰
          </span>
        );

      case PlayerStatus.IsOut:
        return (
          <span key={index} title="Knocked out">
            💀
          </span>
        );

      case PlayerStatus.Discarding:
        return (
          <span key={index} title="Discarding">
            🤏
          </span>
        );

      case PlayerStatus.BeingPunished:
        return (
          <span key={index} title="Being punished">
            🙏
          </span>
        );
    }

    return null;
  }

  renderStack() {
    return (
      <PlayerStack
        revealCard={this.props.revealCard}
        playerId={this.props.playerId}
        stackSize={this.props.stackSize}
        cardStyle={this.props.playerCardStyle}
      ></PlayerStack>
    );
  }

  renderRevealedStack() {
    return (
      <PlayerRevealedStack
        stack={this.props.revealedStack}
        cardStyle={this.props.playerCardStyle}
      ></PlayerRevealedStack>
    );
  }

  getRadiusForPlayers(totalPlayers: number): number {
    return MIN_PLAYER_RADIUS + ((MAX_PLAYER_RADIUS - MIN_PLAYER_RADIUS) * totalPlayers) / MAX_PLAYERS;
  }
}
