import * as React from 'react';
import css from './Card.module.css';

import { ICard, CardColor } from '../engine/types';

const ColorBgRow = {
  Clubs: 0,
  Diamonds: 1,
  Spades: 2,
  Hearts: 3,
  Trumps: 4,
};

export class Card extends React.Component<
  {
    type?: ICard;
    selected?: boolean;
    inactive?: boolean;
    click?: () => void;
  },
  {}
> {
  render() {
    const [col, row] = this.getCardBgPos();
    return (
      <div
        className={[
          css.card,
          this.props.inactive ? css.inactive : '',
          this.props.click ? css.selectable : '',
          this.props.selected ? css.selected : '',
        ].join(' ')}
        style={{ 'background-position': `-${col * 320}px -${row * 596}px` }}
        onClick={this.props.click}
      ></div>
    );
  }

  getCardBgPos(): number[2] {
    const C = this.props.type;
    if (!C) return [8, 5];
    if (C.color == CardColor.Excuse) return [7, 5];
    const color_name = CardColor[C.color];
    const x_pos = C.value - 1;
    return [x_pos % 14, ColorBgRow[color_name] + Math.floor(x_pos / 14)];
  }
}
