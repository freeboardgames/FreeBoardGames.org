import * as React from 'react';

import css from './PlayerHand.module.css';
import { Card } from './Card';

import { ICard } from '../types';

const CARD_WIDTH_MIN = 35;
const CARD_WIDTH_MAX = 75;

export function PlayerHand(props: {
  playerId: string;
  hand: ICard[];
  selection: number[];
  selectable: boolean[];
  selectCards?: (handIndex: number[]) => void;
}) {
  if (props.hand.length == 0) return null;

  const nCards = props.hand.length;
  const card_scale = Math.min(20, Math.max(0, nCards - 10)) / 20;

  function renderCard(card: ICard, i: number, scale: number) {
    const style = {
      width: `${scale * CARD_WIDTH_MIN + (1 - scale) * CARD_WIDTH_MAX}px`,
      transform: `scale(${(scale * CARD_WIDTH_MIN) / 120 + ((1 - scale) * CARD_WIDTH_MAX) / 140})`,
    };
    if (i == props.hand.length - 1) {
      style.width = `${2.3 * (scale * CARD_WIDTH_MIN + (1 - scale) * CARD_WIDTH_MAX)}px`;
    }
    return (
      <div className={css.cardContainer} style={style} key={i}>
        <Card
          type={card}
          selected={props.selection.indexOf(i) != -1}
          inactive={!props.selectable[i]}
          click={props.selectable[i] ? () => toggleSelectCard(i) : null}
        />
      </div>
    );
  }

  function toggleSelectCard(index: number) {
    const selectId = props.selection.indexOf(index);
    const new_selection = [...props.selection];
    if (selectId != -1) {
      new_selection.splice(selectId, 1);
    } else {
      new_selection.push(index);
    }
    props.selectCards(new_selection);
  }

  return <div className={css.playerHand}>{props.hand.map((C, i) => renderCard(C, i, card_scale))}</div>;
}
