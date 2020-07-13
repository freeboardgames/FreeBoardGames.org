import React from 'react';
import { ICard, IHint, IHintMask } from '../interfaces';
import { BCard } from './bcard';
import { BHintIcon } from './bhinticon';

import css from './CardWithHint.css';

interface CardWithHintProps {
  card: ICard; // if null, show back of card.
  empty: number; // If -1, then 'empty', if 0-4 base color
  // 'empty' should take precidence, if not null
  // if -2 then 'backside'
  hint: IHint;
  keyPropagation: string;
}

export class CardWithHint extends React.Component<CardWithHintProps, {}> {
  render() {
    const colors = this.props.hint.color.map((value: number, index: number) => {
      const key = this.props.keyPropagation + 'BHint' + index.toString();
      return (
        <BHintIcon
          key={key}
          hintIcon={{ color: value !== IHintMask.NO ? index : -1, value: -1 }}
          keyPropagation={key}
        ></BHintIcon>
      );
    });
    const values = this.props.hint.value.map((value: number, index: number) => {
      const key = this.props.keyPropagation + 'BHint' + index.toString();
      return (
        <BHintIcon
          key={key}
          hintIcon={{ color: -1, value: value !== IHintMask.NO ? index : -1 }}
          keyPropagation={key}
        ></BHintIcon>
      );
    });

    return (
      <div className={css.wrapper}>
        <BCard card={this.props.card} empty={this.props.empty}></BCard>
        <div className={css.hints} style={{ top: '8px', left: '8px' }}>
          {colors}
        </div>
        <div className={css.hints} style={{ right: '5px', bottom: '8px' }}>
          {values}
        </div>
      </div>
    );
  }
}
