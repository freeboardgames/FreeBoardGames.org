import React from 'react';
import { IHand, ICard, IHintMask } from '../interfaces';
import { BCard } from './bcard';
import { BHint } from './bhint';
import { BPlay } from './bplay';

import style from './bhand.css';

interface InnerWrapper {
  hand: IHand;
  me: boolean;

  onPlay(id: number): any;
  onTrash(id: number): any;
  myTurn: boolean;

  keyPropagation: string;
}

export class BHand extends React.Component<InnerWrapper, {}> {
  render() {
    var hand = this.props.hand;
    return (
      <div className={style.hand}>
        {hand.cards.map((card, card_index) => {
          // If player, then 'overwrite' the card with the info from the hint
          const hint = this.props.hand.hints[card_index];

          var newCard: ICard;
          var empty: number = null;

          if (this.props.me) {
            const valueIndex = hint.value.indexOf(IHintMask.YES);
            const colorIndex = hint.color.indexOf(IHintMask.YES);
            newCard = {
              id: -1,
              value: valueIndex !== -1 ? valueIndex : null,
              color: colorIndex !== -1 ? colorIndex : -1,
            };
          } else {
            // TODO: Error here if pick up empty!
            if (card === null) {
              // This can happen if you pick up the last card.
              newCard = null;
              empty = -1;
            } else {
              newCard = { id: card.id, value: card.value, color: card.color };
            }
          }

          return (
            <div className={style.card_column} key={this.props.keyPropagation + 'BHand' + card_index.toString()}>
              <BHint hint={hint} keyPropagation={this.props.keyPropagation + 'BHand' + card_index.toString()}></BHint>
              <BCard card={newCard} empty={empty}></BCard>
              {this.props.me ? (
                <BPlay
                  onPlay={() => {
                    this.props.onPlay(card_index);
                  }}
                  onTrash={() => {
                    this.props.onTrash(card_index);
                  }}
                  myTurn={this.props.myTurn}
                ></BPlay>
              ) : null}
            </div>
          );
        })}
      </div>
    );
  }
}
