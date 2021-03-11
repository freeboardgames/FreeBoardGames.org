import React from 'react';
import { BCard } from './bcard';
import css from './bdeck.module.css';

interface InnerWrapper {
  cardsLeft: number;
}

export class BDeck extends React.Component<InnerWrapper, {}> {
  render() {
    if (this.props.cardsLeft + 1 <= 0) {
      return (
        <div className={css.wrapper}>
          <BCard card={null} empty={-1}></BCard>
        </div>
      );
    }
    return (
      <div className={css.wrapper}>
        <BCard card={null} empty={-2}></BCard>
        <h2 className={css.counter}>x{this.props.cardsLeft + 1}</h2>
      </div>
    );
  }
}
