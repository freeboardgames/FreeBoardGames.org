import * as React from 'react';
import { useCurrentGameTranslation } from 'infra/i18n';

import css from './PreviousTrick.module.css';

import { ICard, CardColor } from '../types';
import * as util from '../util/misc';

const ColorSymbols = {
  Diamonds: <>&#x2666;&#xFE0F;</>,
  Hearts: <>&#x2665;&#xFE0F;</>,
  Spades: <>&#x2660;&#xFE0F;</>,
  Clubs: <>&#x2663;&#xFE0F;</>,
};

export function PreviousTrick(props: { trick: ICard[]; leaderPos: number; currPos: number }) {
  const { translate } = useCurrentGameTranslation();

  function renderPrevTrickCard(i: number) {
    const card = props.trick[i];
    const index = util.mod(props.leaderPos + i - props.currPos, 4);
    let text = '';
    let symbol = <></>;
    if (card) {
      text = card.value.toString();
      if (card.value > 10) {
        text = ['B', 'D', 'K', 'A'][card.value - 11];
      }
      symbol = ColorSymbols[CardColor[card.color]];
    }
    return (
      <span className={[css.prevCard, card ? '' : css.emptyCard, css.p4, css[`i${index + 1}`]].join(' ')} key={index}>
        {symbol} {text}
      </span>
    );
  }

  return (
    <div className={css.prevTrick}>
      <span>{translate('prev_trick')}</span>
      {new Array(4).fill(0).map((_, i) => renderPrevTrickCard(i))}
    </div>
  );
}
