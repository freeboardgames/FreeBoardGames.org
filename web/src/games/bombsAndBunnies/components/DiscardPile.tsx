import * as React from 'react';

import css from './DiscardPile.module.css';
import { FaceDownCardComponent } from './CardComponent';
import { CardStyle } from './shared/interfaces';

export interface IDiscardPileProps {
  cards: CardStyle[];
}

export class DiscardPile extends React.Component<IDiscardPileProps, {}> {
  render() {
    return <div className={css.pile}>{this.renderCards()}</div>;
  }

  renderCards() {
    return this.props.cards.map((card, i) => this.renderCard(card, i));
  }

  renderCard(cardStyle: CardStyle, index: number) {
    const rotateStyle = this._getCardTransformStyle(index);

    return (
      <div className={css.cardContainer} key={index} style={{ transform: rotateStyle }}>
        <FaceDownCardComponent key={index} style={cardStyle}></FaceDownCardComponent>
      </div>
    );
  }

  // The idea is to make the card placement seem more natural, but consistent.
  _getCardTransformStyle(index: number) {
    const seed = [-2, 3, -3, 2];
    const seedValue = seed[index % seed.length];
    const rotate = seedValue;
    const translateX = (index % 3 === 0 ? -1 : 0) * seedValue * 30;
    const translateY = (index % 2 === 0 ? -1 : 0) * seedValue * 20;

    return `scale(0.12) rotate(${rotate}deg) translate(${translateX}px, ${translateY}px)`;
  }
}
