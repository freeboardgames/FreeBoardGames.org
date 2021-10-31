import * as React from 'react';
import { useCurrentGameTranslation } from 'infra/i18n';
import { CardColor, ICard, Pattern } from 'gamesShared/definitions/cards';

import css from './PreviousTrick.module.css';

function mod(n: number, m: number): number {
  return ((n % m) + m) % m;
}

const ColorSymbols = {
  Spades: <>&#x2660;&#xFE0F;</>,
  Hearts: <>&#x2665;&#xFE0F;</>,
  Diamonds: <>&#x2666;&#xFE0F;</>,
  Clubs: <>&#x2663;&#xFE0F;</>,
  Excuse: <>&#x1F0CF;</>,
  Trumps: <>&#x1F482;</>,
  Schell: <span className={`${css.suit} ${css.schell}`}></span>,
  Herz: <span className={`${css.suit} ${css.herz}`}></span>,
  Gras: <span className={`${css.suit} ${css.gras}`}></span>,
  Eichel: <span className={`${css.suit} ${css.eichel}`}></span>,
};

export function PreviousTrick(props: {
  trick: ICard[];
  pattern: Pattern;
  leaderPos: number;
  currPos: number;
  numPlayers: number;
  isKitty?: boolean;
}) {
  const { translate } = useCurrentGameTranslation();

  function renderPrevTrickCard(i: number) {
    const card = props.trick[i];
    const clockwise = props.pattern != Pattern.Tarot;
    let index = mod(props.leaderPos + i - props.currPos, props.numPlayers);
    if (clockwise) {
      index = mod(props.numPlayers - index, props.numPlayers);
    }
    let text = '';
    let symbol = <></>;
    if (card) {
      text = card.value.toString();
      if (card.color == CardColor.Excuse) {
        text = '★';
      } else if (card.color != CardColor.Trumps && card.value > 10) {
        if (props.pattern == Pattern.Franconian) {
          text = ['U', 'O', 'K', 'A'][card.value - 11];
        } else if (props.pattern == Pattern.Tarot) {
          text = ['V', 'C', 'D', 'R'][card.value - 11];
        } else if (props.pattern == Pattern.Skat) {
          text = ['J', 'Q', 'K', 'A'][card.value - 11];
        } else if (props.pattern == Pattern.Tarock) {
          text = ['J', 'C', 'Q', 'K'][card.value - 11];
        }
      }
      symbol = ColorSymbols[CardColor[card.color]];
    }
    return (
      <span
        className={[
          css.prevCard,
          card ? '' : css.emptyCard,
          props.isKitty ? css.kitty : css[`p${Math.max(3, props.numPlayers)}`],
          css[`i${index + 1}`],
        ].join(' ')}
        key={index}
      >
        {symbol} {text}
      </span>
    );
  }

  return (
    <div className={[css.prevTrick, css[`p${Math.max(3, props.numPlayers)}`]].join(' ')}>
      <span>{props.isKitty ? translate('prev_kitty') : translate('prev_trick')}</span>
      {new Array(props.numPlayers).fill(0).map((_, i) => renderPrevTrickCard(i))}
    </div>
  );
}
