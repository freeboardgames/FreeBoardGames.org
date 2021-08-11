import * as React from 'react';

import css from './Kitty.module.css';
import { Card } from './Card';

import { ICard } from '../engine/types';

export class Kitty extends React.Component<
  {
    kitty: ICard[];
    revealed: boolean;
    descr: JSX.Element | string;
  },
  {}
> {
  render() {
    return (
      <div className={css.kitty}>
        <div>
          <div>
            {!this.props.descr ? null : <div className={css.kittyDescr}>{this.props.descr}</div>}
            {this.props.kitty.map((card, i) => this.arrangeKittyCard(i, card))}
          </div>
        </div>
      </div>
    );
  }

  arrangeKittyCard(index: number, card: ICard) {
    return (
      <div className={css.arrangeCard}>
        <div key={index} className={css.cropCard}>
          <div className={css.scaleCard}>
            <Card type={this.props.revealed ? card : null} />
          </div>
        </div>
      </div>
    );
  }
}
