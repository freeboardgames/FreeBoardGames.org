import * as React from 'react';

import css from './Trick.module.css';
import { Card } from './Card';

import { ICard } from '../engine/types';
import * as util from '../engine/util';

const CardPositions = [
  [
    [0, 50],
    [100, -50],
    [-100, -80],
  ],
  [
    [0, 50],
    [100, -50],
    [20, -100],
    [-100, -30],
  ],
  [
    [0, 50],
    [120, -50],
    [50, -100],
    [-50, -120],
    [-120, -30],
  ],
];

const VanishPositions = [
  [
    [0, 130],
    [300, -20],
    [-300, -20],
  ],
  [
    [0, 130],
    [300, -20],
    [0, -200],
    [-300, -20],
  ],
  [
    [0, 130],
    [300, -20],
    [150, -200],
    [-150, -200],
    [-300, -20],
  ],
];

function getKeyframeRule(ruleName: string, key: string): CSSKeyframeRule {
  const ss = document.styleSheets;
  for (let i = 0; i < ss.length; ++i) {
    if (ss[i].href !== null || !ss[i].cssRules) continue;
    // loop through all the rules, last ones are the used ones
    for (let x = ss[i].cssRules.length - 1; x >= 0; x--) {
      const rule = ss[i].cssRules[x];
      if (rule instanceof CSSKeyframesRule && rule.name.indexOf(`Trick_${ruleName}_`) == 0) {
        return rule.findRule(key);
      }
    }
  }
  return null;
}

export class Trick extends React.Component<
  {
    trick: ICard[];
    leaderPos: number;
    winnerPos: number;
    currPos: number;
    numPlayers: number;
  },
  {}
> {
  render() {
    if (this.props.winnerPos != -1) {
      const [x, y] = VanishPositions[Math.max(0, this.props.numPlayers - 3)][this.relativePos(this.props.winnerPos)];
      getKeyframeRule('vanish', '100%').setProperty(
        'transform',
        `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(0.0)`,
      );
    }
    return (
      <div className={[css.trick, this.props.trick.length == this.props.numPlayers ? css.full : ''].join(' ')}>
        {this.props.trick.map((C, i) => this.arrangeTrickCard(i, C))}
      </div>
    );
  }

  arrangeTrickCard(i: number, card: ICard) {
    const index = this.relativePos(this.props.leaderPos + i);
    const [x, y] = CardPositions[Math.max(0, this.props.numPlayers - 3)][index];
    return (
      <div key={index} className={css.cardContainer}>
        <div style={{ transform: `translate(${x}px, ${y}px)` }}>
          <Card type={card} />
        </div>
      </div>
    );
  }

  relativePos(pos: number): number {
    return util.mod(pos - this.props.currPos, this.props.numPlayers);
  }
}
