import * as React from 'react';

import CardProps from './card';
import css from './CardComponent.css';
import { CardBackgroundAsset, CardValueAsset } from './CardAssets';

const CARD_NUMBER_STYLES = {
  1: {
    color: '#777',
  },
  2: {
    color: '#0C7489',
  },
  3: {
    color: '#2A9D8F',
  },
  5: {
    color: '#E08E45',
  },
  7: {
    color: '#5B1865',
  },
};

const CARD_BG_STYLES = {
  1: {
    backgroundColor: '#fff',
  },
  2: {
    backgroundColor: '#DCFFFD',
  },
  3: {
    backgroundColor: '#B4D2BA',
  },
  5: {
    backgroundColor: '#F8F4A6',
  },
  7: {
    backgroundColor: '#ED3C44',
  },
};

export interface ICardProps {
  card: CardProps;
  click?: () => void;
}

export class CardComponent extends React.Component<ICardProps, {}> {
  render() {
    const { card } = this.props;
    return (
      <div onClick={this.props.click} className={css.CardContainer}>
        <Card card={card} />
      </div>
    );
  }
}

export class Card extends React.Component<ICardProps, {}> {
  render() {
    const { card, cardNumberStyle:overrideCardNumberStyle } = this.props;
    const { number, value } = card;

    const cardBgStyle = CARD_BG_STYLES[card.value];
    const cardNumberStyle = Object.assign({}, CARD_NUMBER_STYLES[card.value], overrideCardNumberStyle);

    return (
      <div className={css.Card}>
        <div className={css.cardBg} style={cardBgStyle} />
        <CardBackgroundAsset className={css.cardBgImg} />
        <span className={css.cardNumber} style={cardNumberStyle}>{number}</span>
        <div className={css.cardVal}>
          {
            Array.apply(null, Array(card.value)).map(() => (
              <CardValueAsset className={css.cardValImg} />
            ))
          }
        </div>
      </div>
    );
  }
}
