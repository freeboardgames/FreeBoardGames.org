import * as React from 'react';

import css from './BetButtonComponent.css';

export interface IBetButtonProps {
  click: () => void;
  bet: number;
}

export class BetButtonComponent extends React.Component<IBetButtonProps, {}> {
  render() {
    return (
      <button className={css.betButton} onClick={this.props.click}>
        BET {this.props.bet}
      </button>
    );
  }
}
