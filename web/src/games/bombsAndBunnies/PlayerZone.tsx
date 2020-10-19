import * as React from 'react';

import css from './PlayerZone.css';
import { PlayerStack } from './PlayerStack';
import { PlayerRevealedStack } from './PlayerRevealedStack';
import { CardType } from './cardType';

export interface IPlayerZoneProps {
  stackSize: number;
  revealedStack: CardType[];
  playerIndex: number;
  revealCard?: (playerIndex: number) => void;
}

export class PlayerZone extends React.Component<IPlayerZoneProps, {}> {
  render() {
    return (
      <div className={css.playerZone}>
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
}
