import * as React from 'react';

import css from './PlayerRevealedStack.css';
import { BunnyCardComponent, BombCardComponent } from './CardComponent';
import { CardType } from './cardType';

export interface IPlayerRevealedStackProps {
  stack: CardType[];
}

export class PlayerRevealedStack extends React.Component<IPlayerRevealedStackProps, {}> {
  render() {
    return <div className={css.playerRevealedStack}>{this.renderCards()}</div>;
  }

  renderCards() {
    return this.props.stack.map((card, i) => this.renderCard(card, i));
  }

  renderCard(card: CardType, index: number) {
    const offsetSize = 20;
    var rotateStyle = this._getCardRotationStyle(index);

    if (card === CardType.Bunny) {
      return (
        <div
          className={css.cardContainer}
          key={index}
          style={{ marginLeft: index * offsetSize, transform: rotateStyle }}
        >
          <BunnyCardComponent></BunnyCardComponent>
        </div>
      );
    }

    return (
      <div className={css.cardContainer} key={index} style={{ marginLeft: index * offsetSize, transform: rotateStyle }}>
        <BombCardComponent key={index}></BombCardComponent>
      </div>
    );
  }

  // The idea is to make the card placement seem more natural, but consistent.
  _getCardRotationStyle(index: number) {
    const fixedRotations = [-2, 3, -3, 2];
    var rotate = fixedRotations[index % fixedRotations.length];
    return `scale(0.2) rotate(${rotate}deg)`;
  }
}
