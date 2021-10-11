import * as React from 'react';
import { Pattern, ICard } from 'gamesShared/definitions/cards';
import { Card } from 'gamesShared/components/cards/Card';

import css from './Hand.module.css';

const CARD_WIDTH_MIN = 35;
const CARD_WIDTH_MAX = 75;

export function Hand(props: {
  playerId: string;
  hand: ICard[];
  pattern: Pattern;
  selection: number[];
  selectable: boolean[];
  selectCards?: (handIndex: number[]) => void;
}) {
  if (props.hand.length == 0) return null;

  const nCards = props.hand.length;

  function renderCard(card: ICard, i: number) {
    const scale = Math.min(20, Math.max(0, nCards - 10)) / 20;
    const style = {
      width: `${scale * CARD_WIDTH_MIN + (1 - scale) * CARD_WIDTH_MAX}px`,
    };
    if (i == props.hand.length - 1) {
      style.width = `${2.3 * (scale * CARD_WIDTH_MIN + (1 - scale) * CARD_WIDTH_MAX)}px`;
    }
    return (
      <div
        className={[css.arrangeCard, props.selection.includes(i) ? css.selected : ''].join(' ')}
        style={style}
        key={i}
      >
        <Card
          pattern={props.pattern}
          type={card}
          inactive={!props.selectable[i]}
          click={props.selectable[i] ? () => toggleSelectCard(i) : null}
          width={scale * CARD_WIDTH_MIN * 3 + (1 - scale) * CARD_WIDTH_MAX * 2.5}
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

  return <div className={css.hand}>{props.hand.map(renderCard)}</div>;
}
