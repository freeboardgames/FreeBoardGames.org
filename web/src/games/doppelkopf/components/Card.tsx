import * as React from 'react';
import css from './Card.module.css';

import { ICard, CardColor } from '../types';

const ColorBgRow = {
  Diamonds: 0,
  Hearts: 1,
  Spades: 2,
  Clubs: 3,
};

export function Card(props: { type?: ICard; selected?: boolean; inactive?: boolean; click?: () => void }) {
  const [col, row] = getCardBgPos();

  function getCardBgPos(): number[] {
    const C = props.type;
    if (!C) return [8, 3];
    const color_name = CardColor[C.color];
    const x_pos = C.value - 7;
    return [x_pos % 9, ColorBgRow[color_name] + Math.floor(x_pos / 9)];
  }

  return (
    <div
      className={[
        css.card,
        props.inactive ? css.inactive : '',
        props.click ? css.selectable : '',
        props.selected ? css.selected : '',
      ].join(' ')}
      style={{ backgroundPosition: `-${col * 314}px -${row * 483}px` }}
      onClick={props.click}
    ></div>
  );
}
