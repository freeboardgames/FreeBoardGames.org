import * as React from 'react';

import css from './Kitty.module.css';
import { Card } from './Card';

import { ICard } from '../types';

export function Kitty(props: { kitty: ICard[]; revealed: boolean; descr?: JSX.Element | string }) {
  function arrangeKittyCard(index: number, card: ICard) {
    return (
      <div key={index} className={css.arrangeCard}>
        <div className={css.cropCard}>
          <div className={css.scaleCard}>
            <Card type={props.revealed ? card : null} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={css.kitty}>
      <div>
        <div>
          {!props.descr ? null : <div className={css.kittyDescr}>{props.descr}</div>}
          {props.kitty.map((card, i) => arrangeKittyCard(i, card))}
        </div>
      </div>
    </div>
  );
}
