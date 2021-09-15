import * as React from 'react';
import css from './Card.module.css';

import { ICard, CardColor } from '../types';

const ColorBgRow = {
  Schell: 0,
  Herz: 1,
  Gras: 2,
  Eichel: 3,
};

export function Card(props: { type?: ICard; selected?: boolean; inactive?: boolean; click?: () => void }) {
  const [col, row] = getCardBgPos();

  function getCardBgPos(): number[] {
    const C = props.type;
    if (!C) return [9, 3];
    const color_name = CardColor[C.color];
    const x_pos = C.value - 6;
    return [x_pos % 10, ColorBgRow[color_name] + Math.floor(x_pos / 10)];
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
