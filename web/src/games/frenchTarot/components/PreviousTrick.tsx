import * as React from 'react';

import css from './PreviousTrick.module.css';

import { ICard, CardColor } from '../engine/types';
import * as util from '../engine/util';

const CardPositions = [
  ['translate(0, 20px)', 'translate(55%, -10px)', 'translate(-55%, -10px)'],
  ['translate(0, 30px)', 'translate(102%, 6px)', 'translate(0, -16px)', 'translate(-102%, 6px)'],
  [
    'translate(0, 30px)',
    'translate(104%, 13px)',
    'translate(55%, -12px)',
    'translate(-55%, -12px)',
    'translate(-104%, 13px)',
  ],
];

const ColorSymbols = {
  Spades: <>&#x2660;&#xFE0F;</>,
  Hearts: <>&#x2665;&#xFE0F;</>,
  Diamonds: <>&#x2666;&#xFE0F;</>,
  Clubs: <>&#x2663;&#xFE0F;</>,
  Excuse: <>&#x1F0CF;</>,
  Trumps: <>&#x1F482;</>,
};

export class PreviousTrick extends React.Component<
  {
    trick: ICard[];
    leaderPos: number;
    currPos: number;
    numPlayers: number;
  },
  {}
> {
  render() {
    return (
      <div className={css.prevTrick}>
        <span>Previous trick</span>
        {new Array(this.props.numPlayers).fill(0).map((_, i) => this.renderPrevTrickCard(i))}
      </div>
    );
  }

  renderPrevTrickCard(i: number) {
    const card = this.props.trick[i];
    const index = util.mod(this.props.leaderPos + i - this.props.currPos, this.props.numPlayers);
    var text = '';
    var symbol = <></>;
    if (card) {
      text = card.value.toString();
      if (card.color == CardColor.Excuse) {
        text = '★';
      } else if (card.color != CardColor.Trumps && card.value > 10) {
        text = ['V', 'C', 'D', 'R'][card.value - 11];
      }
      symbol = ColorSymbols[CardColor[card.color]];
    }
    const position_id = Math.max(0, this.props.numPlayers - 3);
    const position = CardPositions[position_id][index];
    return (
      <span
        className={[css.prevCard, card ? '' : css.emptyCard].join(' ')}
        style={{ transform: `translate(-50%, -50%) ${position}` }}
        key={index}
      >
        {symbol} {text}
      </span>
    );
  }
}
