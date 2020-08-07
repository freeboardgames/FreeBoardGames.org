import React from 'react';
import { BCard } from './bcard';
import css from './bdeck.css';

interface InnerWrapper {
  cardsLeft: number;
}

export class BDeck extends React.Component<InnerWrapper, {}> {
  render() {
    return (
      <div className={css.wrapper}>
        <BCard card={null} empty={-2}></BCard>
        <h2 className={css.counter}>x{this.props.cardsLeft + 1}</h2>
      </div>
    );
  }
}
