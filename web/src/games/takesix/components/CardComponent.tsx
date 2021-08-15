import * as React from 'react';

import CardProps from '../definitions/card';
import css from './CardComponent.module.css';
import { CardBackgroundAsset, CardValueAsset } from './CardAssets';

const BANANA_COLOR = {
  1: 'yellow',
  2: 'yellow',
  3: 'black',
  5: 'yellow',
  7: 'yellow',
};

const CARD_BG_STYLES = {
  1: {
    backgroundColor: '#484a47',
  },
  2: {
    backgroundColor: '#3d348b',
  },
  3: {
    backgroundColor: '#f7b801',
  },
  5: {
    backgroundColor: '#f18701',
  },
  7: {
    backgroundColor: '#f35b04',
  },
};

export interface ICardProps {
  card: CardProps;
  cardNumberStyle?: React.CSSProperties;
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
    const { card, cardNumberStyle } = this.props;
    const { number, value } = card;

    const cardBgStyle = CARD_BG_STYLES[value];

    return (
      <div className={css.Card}>
        <div className={css.cardBg} style={cardBgStyle} />
        <CardBackgroundAsset />
        <span className={css.cardNumber} style={cardNumberStyle}>
          {number}
        </span>
        <div className={css.cardVal}>
          {Array.apply(null, Array(value)).map((elem, idx) => (
            <CardValueAsset key={idx} bananaColor={BANANA_COLOR[value]} />
          ))}
        </div>
      </div>
    );
  }
}
