import * as React from 'react';
import { Pattern, ICard } from 'gamesShared/definitions/cards';
import { Card } from 'gamesShared/components/cards/Card';

import css from './Kitty.module.css';

export function Kitty(props: { kitty: ICard[]; pattern: Pattern; revealed: boolean; descr?: JSX.Element | string }) {
  function arrangeKittyCard(index: number, card: ICard) {
    return (
      <div key={index} className={css.arrangeCard}>
        <div className={css.cropCard}>
          <div className={css.scaleCard}>
            <Card pattern={props.pattern} type={props.revealed ? card : null} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${css.kitty} ${props.kitty.length < 6 ? css.small : ''}`}>
      <div>
        <div>
          {!props.descr ? null : <div className={css.kittyDescr}>{props.descr}</div>}
          {props.kitty.map((card, i) => arrangeKittyCard(i, card))}
        </div>
      </div>
    </div>
  );
}
