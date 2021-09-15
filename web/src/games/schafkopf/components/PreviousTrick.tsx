import * as React from 'react';
import { useCurrentGameTranslation } from 'infra/i18n';

import css from './PreviousTrick.module.css';

import { ICard, CardColor } from '../types';
import * as util from '../util/misc';

const ColorSymbols = {
  Schell: <span className={`${css.suit} ${css.schell}`}></span>,
  Herz: <span className={`${css.suit} ${css.herz}`}></span>,
  Gras: <span className={`${css.suit} ${css.gras}`}></span>,
  Eichel: <span className={`${css.suit} ${css.eichel}`}></span>,
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
      if (card.value > 10) {
        text = ['U', 'O', 'K', 'A'][card.value - 11];
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
