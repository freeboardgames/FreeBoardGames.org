import * as React from 'react';
import { Pattern, ICard } from 'gamesShared/definitions/cards';
import { Card } from 'gamesShared/components/cards/Card';

import css from './Trick.module.css';

function mod(n: number, m: number): number {
  return ((n % m) + m) % m;
}

const CardPositions = [
  [
    [0, 20],
    [40, -20],
    [-40, -30],
  ],
  [
    [0, 20],
    [40, -20],
    [8, -40],
    [-20, -12],
  ],
  [
    [0, 20],
    [50, -20],
    [20, -40],
    [-20, -50],
    [-50, -12],
  ],
];

const VanishPositions = [
  [
    [0, 130],
    [300, 20],
    [-300, 20],
  ],
  [
    [0, 130],
    [300, 20],
    [0, -200],
    [-300, 20],
  ],
  [
    [0, 130],
    [300, 20],
    [150, -200],
    [-150, -200],
    [-300, 20],
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
  pattern: Pattern;
  leaderPos: number;
  winnerPos: number;
  currPos: number;
  numPlayers: number;
}) {
  const clockwise = props.pattern != Pattern.Tarot;
  let inumPlayers = Math.max(0, props.numPlayers - 3);
  if (props.winnerPos != -1) {
    const [x, y] = VanishPositions[inumPlayers][relativePos(props.winnerPos)];
    const rule = getKeyframeRule('vanish', '100%');
    if (rule !== null) {
      rule.style.setProperty('transform', `translate(${x}px, ${y}px) scale(0.1)`);
    }
  }

  function arrangeTrickCard(i: number, card: ICard) {
    const index = relativePos(props.leaderPos + i);
    const [x, y] = CardPositions[inumPlayers][index];
    return (
      <div key={index} className={css.arrangeCard}>
        <div style={{ transform: `translate(${x}px, ${y}px)` }}>
          <Card pattern={props.pattern} type={card} width={105} />
        </div>
      </div>
    );
  }

  function relativePos(pos: number): number {
    pos = mod(pos - props.currPos, props.numPlayers);
    return clockwise ? mod(props.numPlayers - pos, props.numPlayers) : pos;
  }

  return (
    <div className={[css.trick, props.trick.length == props.numPlayers ? css.full : ''].join(' ')}>
      {props.trick.map((C, i) => arrangeTrickCard(i, C))}
    </div>
  );
}
