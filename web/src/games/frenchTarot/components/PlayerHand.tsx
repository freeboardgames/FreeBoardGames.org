import * as React from 'react';

import css from './PlayerHand.module.css';
import { Card } from './Card';

import { ICard } from '../engine/types';

export class PlayerHand extends React.Component<
  {
    playerId: string;
    hand: ICard[];
    selection: number[];
    selectable: boolean[];
    selectCards?: (handIndex: number[]) => void;
  },
  {}
> {
  render() {
    return <div className={css.playerHand}>{this.renderCards()}</div>;
  }

  renderCards() {
    if (this.props.hand.length == 0) return;

    const w: number = this.props.hand.length * 25 + 80;

    return (
      <div className={css.cards} style={{ width: w }}>
        {this.props.hand.map((C, i) => this.renderCard(C, i))}
      </div>
    );
  }

  renderCard(card: ICard, i: number) {
    return (
      <div className={css.cardContainer} key={i}>
        <Card
          type={card}
          selected={this.props.selection.indexOf(i) != -1}
          inactive={!this.props.selectable[i]}
          click={this.props.selectable[i] ? () => this.toggleSelectCard(i) : null}
        />
      </div>
    );
  }

  toggleSelectCard(index: number) {
    const selectId = this.props.selection.indexOf(index);
    const new_selection = [...this.props.selection];
    if (selectId != -1) {
      new_selection.splice(selectId, 1);
    } else {
      new_selection.push(index);
    }
    this.props.selectCards(new_selection);
  }
}
