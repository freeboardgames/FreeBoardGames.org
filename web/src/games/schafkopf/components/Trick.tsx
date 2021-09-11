import * as React from 'react';

import css from './Trick.module.css';
import { Card } from './Card';

import { ICard } from '../types';
import * as util from '../util/misc';

const CardPositions = [
  [
    [0, 50],
    [-100, -80],
    [100, -50],
  ],
  [
    [0, 50],
    [-100, -30],
    [20, -100],
    [100, -50],
  ],
];

const VanishPositions = [
  [
    [0, 130],
    [-300, -20],
    [300, -20],
  ],
  [
    [0, 130],
    [-300, -20],
    [0, -200],
    [300, -20],
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

export function Trick(props: {
  trick: ICard[];
  leaderPos: number;
  winnerPos: number;
  currPos: number;
  numPlayers: number;
}) {
  if (props.winnerPos != -1) {
    const [x, y] = VanishPositions[Math.max(0, props.numPlayers - 3)][relativePos(props.winnerPos)];
    getKeyframeRule('vanish', '100%').style.setProperty('transform', `translate(${x}px, ${y}px) scale(0.1)`);
  }

  function arrangeTrickCard(i: number, card: ICard) {
    const index = relativePos(props.leaderPos + i);
    const [x, y] = CardPositions[Math.max(0, props.numPlayers - 3)][index];
    return (
      <div key={index} className={css.cardContainer}>
        <div style={{ transform: `translate(${x}px, ${y}px)` }}>
          <Card type={card} />
        </div>
      </div>
    );
  }

  function relativePos(pos: number): number {
    return util.mod(pos - props.currPos, props.numPlayers);
  }

  return (
    <div className={[css.trick, props.trick.length == props.numPlayers ? css.full : ''].join(' ')}>
      {props.trick.map((C, i) => arrangeTrickCard(i, C))}
    </div>
  );
}
