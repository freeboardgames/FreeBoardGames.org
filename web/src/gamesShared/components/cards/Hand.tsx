import * as React from 'react';
import { Pattern, ICard } from 'gamesShared/definitions/cards';
import { Card } from 'gamesShared/components/cards/Card';

import css from './Hand.module.css';

export function Hand(props: {
  hand: ICard[];
  pattern: Pattern;
  selection: number[];
  selectable: boolean[];
  selectCards?: (handIndex: number[]) => void;
  placement?: 'top' | 'bottom';
}) {
  if (props.hand.length == 0) return null;

  const nCards = props.hand.length;

  function renderCard(card: ICard, i: number) {
    const scale = Math.min(20, Math.max(0, nCards - 10)) / 20;
    let width_min = 35;
    let width_max = 75;
    let visible_ratio = 0.33;
    if (props.pattern == Pattern.Tarock) {
      width_min = 60;
      width_max = 90;
      visible_ratio = 0.6;
    }
    let width = scale * width_min + (1 - scale) * width_max;
    if (i == (props.placement == 'top' ? 0 : props.hand.length - 1)) {
      width = width / visible_ratio;
    }
    const style = {
      width: `${width}px`,
    };
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
          width={(scale * width_min) / visible_ratio + (((1 - scale) * width_max) / visible_ratio) * 0.9}
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

  return (
    <div className={[css.hand, props.placement == 'top' ? css.top : ''].join(' ')}>{props.hand.map(renderCard)}</div>
  );
}
