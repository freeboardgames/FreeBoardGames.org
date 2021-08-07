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
    const kitty_size = this.props.kitty.length;
    let kitty_width: number = 80 + kitty_size * 24;
    if (this.props.revealed) {
      kitty_width = kitty_size * (kitty_size > 6 ? 36 : 100);
    }
    return (
      <div className={css.kitty} style={{ width: kitty_width + 'px' }}>
        {!this.props.descr ? null : <div className={css.kittyDescr}>{this.props.descr}</div>}
        {this.props.kitty.map((card, i) => this.arrangeKittyCard(i, card))}
      </div>
    );
  }

  arrangeKittyCard(index: number, card: ICard) {
    const count = this.props.kitty.length;
    const rot = -((count * 3) / 2) + (index * (count * 3)) / (count - 1);
    const y = -Math.cos(((index - (count - 1) / 2) * 2 * Math.PI) / count) * (count * 3);
    var outerStyles = { width: '100px' };
    var innerStyles = {};
    if (!this.props.revealed) {
      innerStyles = {
        transform: `rotate(${rot}deg) translateY(${y}px)`,
        transformOrigin: `bottom center`,
        width: '407px',
      };
      outerStyles.width = '20px';
    } else if (this.props.kitty.length > 6) {
      outerStyles.width = '30px';
    }
    return (
      <div key={index} className={css.cardContainer} style={outerStyles}>
        <div style={innerStyles}>
          <Card type={this.props.revealed ? card : null} />
        </div>
      </div>
    );
  }
}
