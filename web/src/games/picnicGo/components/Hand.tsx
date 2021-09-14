import * as React from 'react';
import { Card } from './Card';
import css from './stylesheet.module.css';

import { IG } from '../types';
import { getCardTypeFromNumber } from '../cards';

interface InnerWrapper {
  playerID: string;
  G: IG;
}

export class Hand extends React.Component<InnerWrapper, {}> {
  render() {
    const h = this.props.G.hands.find((e) => e.currentOwner === this.props.playerID);

    return (
      <div className={css.Hand}>
        {h.hand.map((c) => (
          <Card key={c} id={getCardTypeFromNumber(c)} />
        ))}
      </div>
    );
  }
}
