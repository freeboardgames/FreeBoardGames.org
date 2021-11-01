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

  function arrangeTrickCard(i: number, card: ICard) {
    const index = relativePos(props.leaderPos + i);
    let [x, y] = CardPositions[inumPlayers][index];
    if (props.pattern == Pattern.Tarock) {
      x *= 1.5;
      y *= 1.5;
      y += 20;
    }
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
    <div
      className={[
        css.trick,
        props.trick.length == props.numPlayers ? css.full : '',
        css[`p${Math.max(3, props.numPlayers)}`],
        css[`w${relativePos(props.winnerPos) + 1}`],
      ].join(' ')}
    >
      {props.trick.map((C, i) => arrangeTrickCard(i, C))}
    </div>
  );
}
