import React from 'react';
import { ICard } from '../interfaces';

import green from './media/green.png';
import green_with from './media/green_with.png';
import gray from './media/gray.png';
import gray_with from './media/gray_with.png';
import brown from './media/brown.png';
import brown_with from './media/brown_with.png';
import yellow from './media/yellow.png';
import yellow_with from './media/yellow_with.png';
import blue from './media/blue.png';
import blue_with from './media/blue_with.png';
import empty from './media/empty.png';
import white from './media/white.png';
import deck from './media/deck.png';

import style from './bcard.css';

interface InnerWrapper {
  card: ICard; // if null, show back of card.
  empty: number; // If -1, then 'empty', if 0-4 base color
  // 'empty' should take precidence, if not null
  // if -2 then 'backside'
}

export class BCard extends React.Component<InnerWrapper, {}> {
  render() {
    var cardDisplayValue: string;
    var image: any;
    if (this.props.empty !== null) {
      // No Real Card Face
      cardDisplayValue = '';
      switch (this.props.empty) {
        case 0:
          image = green;
          break;
        case 1:
          image = gray;
          break;
        case 2:
          image = brown;
          break;
        case 3:
          image = yellow;
          break;
        case 4:
          image = blue;
          break;
        case -1:
          image = empty;
          break;
        case -2:
          image = deck;
          break;
      }
    } else if (!this.props.card) {
      // Card is null, so its hidden
      cardDisplayValue = '';
      image = white;
    } else {
      let cardValue = this.props.card.value;
      cardDisplayValue = String(cardValue !== null ? cardValue + 1 : '');
      switch (this.props.card.color) {
        case 0:
          image = green_with;
          break;
        case 1:
          image = gray_with;
          break;
        case 2:
          image = brown_with;
          break;
        case 3:
          image = yellow_with;
          break;
        case 4:
          image = blue_with;
          break;
        case -1:
          image = deck;
          break;
      }
    }

    return (
      <div className={style.card}>
        <img src={image} />
        <span>{cardDisplayValue}</span>
      </div>
    );
  }
}
