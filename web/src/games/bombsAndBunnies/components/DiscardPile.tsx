import * as React from 'react';

import css from './DiscardPile.css';
import { FaceDownCardComponent, CardStyle } from './CardComponent';

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
    var rotateStyle = this._getCardTransformStyle(index);

    return (
      <div className={css.cardContainer} key={index} style={{ transform: rotateStyle }}>
        <FaceDownCardComponent key={index} style={cardStyle}></FaceDownCardComponent>
      </div>
    );
  }

  // The idea is to make the card placement seem more natural, but consistent.
  _getCardTransformStyle(index: number) {
    const seed = [-2, 3, -3, 2];
    var seedValue = seed[index % seed.length];
    var rotate = seedValue;
    var translateX = (index % 3 === 0 ? -1 : 0) * seedValue * 30;
    var translateY = (index % 2 === 0 ? -1 : 0) * seedValue * 20;

    return `scale(0.12) rotate(${rotate}deg) translate(${translateX}px, ${translateY}px)`;
  }
}
