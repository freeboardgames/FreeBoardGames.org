import * as React from 'react';

import css from './Trick.module.css';
import { Card } from './Card';

import { ICard } from '../engine/types';
import * as util from '../engine/util';

const CardPositions = [
  ['translate(0, 50px)', 'translate(100px, -50px)', 'translate(-100px, -80px)'],
  ['translate(0, 50px)', 'translate(100px, -50px)', 'translate(20px, -100px)', 'translate(-100px, -30px)'],
  [
    'translate(0, 50px)',
    'translate(120px, -50px)',
    'translate(50px, -100px)',
    'translate(-50px, -120px)',
    'translate(-120px, -30px)',
  ],
];

export class Trick extends React.Component<
  {
    trick: ICard[];
    leaderPos: number;
    currPos: number;
    numPlayers: number;
  },
  {}
> {
  render() {
    return <div className={css.trick}>{this.props.trick.map((C, i) => this.arrangeTrickCard(i, C))}</div>;
  }

  arrangeTrickCard(i: number, card: ICard) {
    const index = util.mod(this.props.leaderPos + i - this.props.currPos, this.props.numPlayers);
    const styles = {
      transform: CardPositions[Math.max(0, this.props.numPlayers - 3)][index],
    };
    return (
      <div key={index} className={css.cardContainer}>
        <div style={styles}>
          <Card type={card} />
        </div>
      </div>
    );
  }
}
