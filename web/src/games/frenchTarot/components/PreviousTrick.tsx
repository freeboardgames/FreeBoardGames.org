import * as React from 'react';
import { useCurrentGameTranslation } from 'infra/i18n';

import css from './PreviousTrick.module.css';

import { ICard, CardColor } from '../types';
import * as util from '../util/misc';

const ColorSymbols = {
  Spades: <>&#x2660;&#xFE0F;</>,
  Hearts: <>&#x2665;&#xFE0F;</>,
  Diamonds: <>&#x2666;&#xFE0F;</>,
  Clubs: <>&#x2663;&#xFE0F;</>,
  Excuse: <>&#x1F0CF;</>,
  Trumps: <>&#x1F482;</>,
};

export function PreviousTrick(props: {
  trick: ICard[];
  leaderPos: number;
  currPos: number;
  numPlayers: number;
  isKitty?: boolean;
}) {
  const { translate } = useCurrentGameTranslation();

  function renderPrevTrickCard(i: number) {
    const card = props.trick[i];
    const index = util.mod(props.leaderPos + i - props.currPos, props.numPlayers);
    let text = '';
    let symbol = <></>;
    if (card) {
      text = card.value.toString();
      if (card.color == CardColor.Excuse) {
        text = '★';
      } else if (card.color != CardColor.Trumps && card.value > 10) {
        text = ['V', 'C', 'D', 'R'][card.value - 11];
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
    <div className={css.prevTrick}>
      <span>{props.isKitty ? translate('prev_kitty') : translate('prev_trick')}</span>
      {new Array(props.numPlayers).fill(0).map((_, i) => renderPrevTrickCard(i))}
    </div>
  );
}
