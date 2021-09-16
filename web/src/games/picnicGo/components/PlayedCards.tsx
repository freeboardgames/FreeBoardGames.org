import * as React from 'react';
import { Card } from './Card';
import css from './stylesheet.module.css';
import { IG } from '../types';
import { getCardTypeFromNumber } from '../cards';

interface InnerWrapper {
  G: IG;
  playerID: string;
}

export class PlayedCards extends React.Component<InnerWrapper, {}> {
  render() {
    return (
      <div className={css.PlayedCards}>
        {this.props.G.players[this.props.playerID].playedCards.map((c) => (
          <Card key={c} id={getCardTypeFromNumber(c)} active={false} selected={false} isTurn={false} />
        ))}
      </div>
    );
  }
}
