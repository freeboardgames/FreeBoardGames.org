import * as React from 'react';
import { ICard, Pattern } from 'gamesShared/definitions/cards';
import { Card } from 'gamesShared/components/cards/Card';

import css from './DisplayCard.module.css';

export function DisplayCard(props: { description: JSX.Element | string; card: ICard; pattern: Pattern }) {
  return (
    <div className={css.displayCard}>
      <span>{props.description}</span>
      <div className={css.arrangeCard}>
        <Card pattern={props.pattern} type={props.card} width={84} />
      </div>
    </div>
  );
}
