import * as React from 'react';
import { ICard, Pattern } from 'gamesShared/definitions/cards';
import { Card } from 'gamesShared/components/cards/Card';

import css from './CalledCard.module.css';

export function CalledCard(props: { description: JSX.Element | string; card: ICard; pattern: Pattern }) {
  return (
    <div className={css.calledCard}>
      <span>{props.description}</span>
      <div className={css.cardContainer}>
        <div>
          <Card pattern={props.pattern} type={props.card} />
        </div>
      </div>
    </div>
  );
}
