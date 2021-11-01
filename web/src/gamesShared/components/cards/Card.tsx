import * as React from 'react';
import { ICard, Suit, Pattern } from 'gamesShared/definitions/cards';

import css from './Card.module.css';

const supportedPatterns = [Pattern.Skat, Pattern.Tarot, Pattern.Tarock, Pattern.Franconian];

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
  let cardBlank: number[];
  let suits: Suit[];
  let numCols: number;
  let colOffset: number;
  let cardSize: number[];
  let backgroundSize: number[];
  let borderRadius: number;
  let bgClass = css.tarot;
  switch (props.pattern) {
    case Pattern.Tarot:
      cardBack = [8, 5];
      cardBlank = [9, 5];
      suits = [Suit.Clubs, Suit.Diamonds, Suit.Spades, Suit.Hearts, Suit.Trumps, Suit.Excuse];
      numCols = 14;
      colOffset = 1;
      cardSize = [320, 596];
      backgroundSize = [4480, 3576];
      bgClass = css.tarot;
      borderRadius = 55;
      break;
    case Pattern.Tarock:
      cardBack = [6, 6];
      cardBlank = [6, 7];
      suits = [Suit.Clubs, Suit.Spades, Suit.Diamonds, Suit.Hearts, Suit.Trumps, Suit.Excuse];
      numCols = 8;
      colOffset = C && C.suit == Suit.Trumps ? 1 : 7;
      cardSize = [236, 424];
      backgroundSize = [1888, 2968];
      bgClass = css.tarock;
      borderRadius = 25;
      break;
    case Pattern.Franconian:
      cardBack = [9, 3];
      cardBlank = [9, 2];
      suits = [Suit.Schell, Suit.Herz, Suit.Gras, Suit.Eichel];
      numCols = 10;
      colOffset = 6;
      cardSize = [320, 596];
      backgroundSize = [3200, 2384];
      bgClass = css.franconian;
      borderRadius = 45;
      break;
    case Pattern.Skat:
    // Skat is the default (fallback) pattern
    default:
      cardBack = [8, 3];
      cardBlank = [8, 2];
      suits = [Suit.Diamonds, Suit.Hearts, Suit.Spades, Suit.Clubs];
      numCols = 9;
      colOffset = 7;
      cardSize = [314, 483];
      backgroundSize = [2826, 1932];
      bgClass = css.skat;
      borderRadius = 25;
      break;
  }

  let [col, row] = cardBack;
  let text = '';

  if (C) {
    if (props.pattern == Pattern.Tarot && C.suit == Suit.Excuse) {
      col = 7;
      row = 5;
    } else if (props.pattern == Pattern.Tarock && C.suit == Suit.Excuse) {
      col = 5;
      row = 6;
    } else if (suits.includes(C.suit)) {
      col = C.value - colOffset;
      row = suits.indexOf(C.suit) + Math.floor(col / numCols);
      col = col % numCols;
    } else {
      [col, row] = cardBlank;
      text = `Suit.${Suit[C.suit]} is not available with the ${props.pattern} pattern.`;
      text += ` Supported suits are: ${suits.map((c) => Suit[c]).join(', ')}.`;
    }
  }

  if (!supportedPatterns.includes(props.pattern)) {
    [col, row] = cardBlank;
    text = `Unknown card pattern: ${props.pattern}.`;
  }

  const scale = props.width ? props.width / cardSize[0] : props.height ? props.height / cardSize[1] : 1.0;
  const scaledSize = [(cardSize[0] - 2) * scale, (cardSize[1] - 2) * scale];
  const scaledPos = [-(col * cardSize[0] + 1) * scale, -(row * cardSize[1] + 1) * scale];

  return (
    <div
      className={[css.card, props.inactive ? css.inactive : '', bgClass, props.click ? css.selectable : ''].join(' ')}
      style={{
        backgroundSize: `${scale * backgroundSize[0]}px ${scale * backgroundSize[1]}px`,
        backgroundPosition: `${scaledPos[0]}px ${scaledPos[1]}px`,
        width: `${scaledSize[0]}px`,
        height: `${scaledSize[1]}px`,
        lineHeight: `${scaledSize[1]}px`,
        fontSize: `${scaledSize[0] / 30}px`,
        borderRadius: `${scale * borderRadius}px`,
      }}
      onClick={props.click}
    >
      <div>{text}</div>
    </div>
  );
}
