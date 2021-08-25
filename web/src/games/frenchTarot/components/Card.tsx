import * as React from 'react';
import css from './Card.module.css';

import { ICard, CardColor } from '../types';

const ColorBgRow = {
  Clubs: 0,
  Diamonds: 1,
  Spades: 2,
  Hearts: 3,
  Trumps: 4,
};

export function Card(props: { type?: ICard; selected?: boolean; inactive?: boolean; click?: () => void }) {
  const [col, row] = getCardBgPos();

  function getCardBgPos(): number[] {
    const C = props.type;
    if (!C) return [8, 5];
    if (C.color == CardColor.Excuse) return [7, 5];
    const color_name = CardColor[C.color];
    const x_pos = C.value - 1;
    return [x_pos % 14, ColorBgRow[color_name] + Math.floor(x_pos / 14)];
  }

  return (
    <div
      className={[
        css.card,
        props.inactive ? css.inactive : '',
        props.click ? css.selectable : '',
        props.selected ? css.selected : '',
      ].join(' ')}
      style={{ backgroundPosition: `-${col * 320}px -${row * 596}px` }}
      onClick={props.click}
    ></div>
  );
}
