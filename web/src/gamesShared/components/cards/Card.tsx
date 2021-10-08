import * as React from 'react';
import { ICard, CardColor, Pattern } from 'gamesShared/definitions/cards';

import css from './Card.module.css';

export function Card(props: {
  pattern: Pattern;
  type?: ICard;
  selected?: boolean;
  inactive?: boolean;
  click?: () => void;
}) {
  let cardBack: number[];
  let colors: CardColor[];
  let numCols: number;
  let colOffset: number;
  let cardSize: number[];
  let bgClass = css.tarot;
  switch (props.pattern) {
    case Pattern.Skat:
      cardBack = [8, 3];
      colors = [CardColor.Diamonds, CardColor.Hearts, CardColor.Spades, CardColor.Clubs];
      numCols = 9;
      colOffset = 7;
      cardSize = [314, 483];
      bgClass = css.skat;
      break;
    case Pattern.Tarot:
      cardBack = [8, 5];
      colors = [
        CardColor.Clubs,
        CardColor.Diamonds,
        CardColor.Spades,
        CardColor.Hearts,
        CardColor.Trumps,
        CardColor.Excuse,
      ];
      numCols = 14;
      colOffset = 1;
      cardSize = [320, 596];
      bgClass = css.tarot;
      break;
    case Pattern.Franconian:
      cardBack = [9, 3];
      colors = [CardColor.Schell, CardColor.Herz, CardColor.Gras, CardColor.Eichel];
      numCols = 10;
      colOffset = 6;
      cardSize = [320, 596];
      bgClass = css.franconian;
      break;
    default:
      throw `Card component not implemented for pattern: ${Pattern[props.pattern]}`;
  }
  let [col, row] = cardBack;
  const C = props.type;
  if (C) {
    if (props.pattern == Pattern.Tarot && C.color == CardColor.Excuse) {
      col = 7;
      row = 5;
    } else {
      col = C.value - colOffset;
      row = colors.indexOf(C.color) + Math.floor(col / numCols);
      col = col % numCols;
    }
  }

  return (
    <div
      className={[
        css.card,
        props.inactive ? css.inactive : '',
        props.click ? css.selectable : '',
        props.selected ? css.selected : '',
        bgClass,
      ].join(' ')}
      style={{
        backgroundPosition: `-${col * cardSize[0]}px -${row * cardSize[1]}px`,
      }}
      onClick={props.click}
    ></div>
  );
}
