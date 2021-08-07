import * as React from 'react';
import css from './Card.module.css';

import { ICard, CardColor } from '../engine/types';

export class Card extends React.Component<
  {
    type?: ICard;
    selected?: boolean;
    inactive?: boolean;
    click?: () => void;
  },
  {}
> {
  render() {
    return (
      <div
        className={[
          css.card,
          this.props.inactive ? css.inactive : '',
          this.props.click ? css.selectable : '',
          this.props.selected ? css.selected : '',
          css[this.getCardClassName()],
        ].join(' ')}
        onClick={this.props.click}
      ></div>
    );
  }

  getCardClassName(): string {
    if (!this.props.type) return 'faceDownCard';
    return CardColor[this.props.type.color] + this.props.type.value;
  }
}
