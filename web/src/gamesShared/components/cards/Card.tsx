import * as React from 'react';
import { ICard, CardColor, Pattern } from 'gamesShared/definitions/cards';

import css from './Card.module.css';

export function Card(props: {
  pattern: Pattern;
  type?: ICard;
  inactive?: boolean;
  click?: () => void;
  width?: number;
  height?: number;
}) {
  const C = props.type;
  let cardBack: number[];
  let colors: CardColor[];
  let numCols: number;
  let colOffset: number;
  let cardSize: number[];
  let borderRadius: number;
  let bgClass = css.tarot;
  switch (props.pattern) {
    case Pattern.Skat:
      cardBack = [8, 3];
      colors = [CardColor.Diamonds, CardColor.Hearts, CardColor.Spades, CardColor.Clubs];
      numCols = 9;
      colOffset = 7;
      cardSize = [314, 483];
      bgClass = css.skat;
      borderRadius = 25;
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
      borderRadius = 55;
      break;
    case Pattern.Tarock:
      cardBack = [6, 6];
      colors = [
        CardColor.Clubs,
        CardColor.Spades,
        CardColor.Diamonds,
        CardColor.Hearts,
        CardColor.Trumps,
        CardColor.Excuse,
      ];
      numCols = 8;
      colOffset = C && C.color == CardColor.Trumps ? 1 : 7;
      cardSize = [236, 424];
      bgClass = css.tarock;
      borderRadius = 35;
      break;
    case Pattern.Franconian:
      cardBack = [9, 3];
      colors = [CardColor.Schell, CardColor.Herz, CardColor.Gras, CardColor.Eichel];
      numCols = 10;
      colOffset = 6;
      cardSize = [320, 596];
      bgClass = css.franconian;
      borderRadius = 45;
      break;
    default:
      throw `Card component not implemented for pattern: ${Pattern[props.pattern]}`;
  }
  let [col, row] = cardBack;
  if (C) {
    if (props.pattern == Pattern.Tarot && C.color == CardColor.Excuse) {
      col = 7;
      row = 5;
    } else if (props.pattern == Pattern.Tarock && C.color == CardColor.Excuse) {
      col = 5;
      row = 6;
    } else {
      col = C.value - colOffset;
      row = colors.indexOf(C.color) + Math.floor(col / numCols);
      col = col % numCols;
    }
  }

  const scale = props.width ? props.width / cardSize[0] : props.height ? props.height / cardSize[1] : 1.0;
  const scaledSize = [(cardSize[0] - 2) * scale, (cardSize[1] - 2) * scale];

  return (
    <div
      className={[css.cropCard, props.click ? css.selectable : ''].join(' ')}
      style={{
        fontSize: `${scale * 10}px`,
        width: `${scaledSize[0]}px`,
        height: `${scaledSize[1]}px`,
        borderRadius: `${scale * borderRadius}px`,
      }}
    >
      <div className={css.scaleCard} style={{ transform: `scale(${scale})` }}>
        <div
          className={[css.card, props.inactive ? css.inactive : '', bgClass].join(' ')}
          style={{
            backgroundPosition: `-${col * cardSize[0] + 1}px -${row * cardSize[1] + 1}px`,
            width: `${cardSize[0] - 2}px`,
            height: `${cardSize[1] - 2}px`,
          }}
          onClick={props.click}
        ></div>
      </div>
    </div>
  );
}
