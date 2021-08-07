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

    const nCards = this.props.hand.length;
    const card_scale = Math.min(20, Math.max(0, nCards - 10)) / 20;
    const w = card_scale * (nCards * 24 + 80) + (1 - card_scale) * (nCards * 42 + 140);

    return (
      <div className={css.cards} style={{ width: w }}>
        {this.props.hand.map((C, i) => this.renderCard(C, i, card_scale))}
      </div>
    );
  }

  renderCard(card: ICard, i: number, scale: number) {
    const style = {
      width: `${scale * 24 + (1 - scale) * 42}px`,
      transform: `scale(${scale * 0.24 + (1 - scale) * 0.42})`,
    };
    return (
      <div className={css.cardContainer} style={style} key={i}>
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
