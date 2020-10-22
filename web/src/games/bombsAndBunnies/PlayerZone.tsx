import * as React from 'react';

import css from './PlayerZone.css';
import { PlayerStack } from './PlayerStack';
import { PlayerRevealedStack } from './PlayerRevealedStack';
import { CardType } from './cardType';
import { MaxPlayers } from './game';

export interface IPlayerZoneProps {
  stackSize: number;
  revealedStack: CardType[];
  playerIndex: number;
  revealCard?: (playerIndex: number) => void;
  totalPlayers: number;
  positionIndex: number;
}

export class PlayerZone extends React.Component<IPlayerZoneProps, {}> {
  render() {
    var radius = this.getRadiusForPlayers(this.props.totalPlayers);

    var angle = (2 * Math.PI * this.props.positionIndex) / this.props.totalPlayers;
    var top = Math.cos(angle) * radius;
    var left = -Math.sin(angle) * radius;

    return (
      <div
        className={css.playerZone}
        style={{ position: 'absolute', top: top, left: left, transform: `rotate(${angle}rad) translateX(-50%)` }}
      >
        <div className={css.stack}>{this.renderStack()}</div>
        <div className={css.revealedStack}>{this.renderRevealedStack()}</div>
      </div>
    );
  }

  renderStack() {
    return (
      <PlayerStack
        revealCard={this.props.revealCard}
        playerIndex={this.props.playerIndex}
        stackSize={this.props.stackSize}
      ></PlayerStack>
    );
  }

  renderRevealedStack() {
    return <PlayerRevealedStack stack={this.props.revealedStack}></PlayerRevealedStack>;
  }

  getRadiusForPlayers(totalPlayers: number): number {
    var minRadius = 50;
    var maxRadius = 200;

    return minRadius + ((maxRadius - minRadius) * totalPlayers) / MaxPlayers;
  }
}
