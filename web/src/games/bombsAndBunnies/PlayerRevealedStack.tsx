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
<<<<<<< HEAD
    const offsetSize = 20;
=======
    const offsetSize = 40;
>>>>>>> upstream/master
    var rotateStyle = this._getCardRotationStyle(index);

    if (card === CardType.Bunny) {
      return (
        <div
          className={css.cardContainer}
          key={index}
          style={{ marginLeft: index * offsetSize, transform: rotateStyle }}
        >
<<<<<<< HEAD
          <BunnyCardComponent></BunnyCardComponent>
=======
          <BunnyCardComponent card={card}></BunnyCardComponent>
>>>>>>> upstream/master
        </div>
      );
    }

    return (
      <div className={css.cardContainer} key={index} style={{ marginLeft: index * offsetSize, transform: rotateStyle }}>
<<<<<<< HEAD
        <BombCardComponent key={index}></BombCardComponent>
=======
        <BombCardComponent key={index} card={card}></BombCardComponent>
>>>>>>> upstream/master
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
