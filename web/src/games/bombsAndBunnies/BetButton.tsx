import * as React from 'react';

import css from './BetButton.css';

interface IBetButtonProps {
  click?: () => void;
}

export class BetButton extends React.Component<IBetButtonProps> {
  render() {
    if (!this.props.click) {
      return <button disabled={true}>Can not bet</button>;
    }

    return (
      <button onClick={this.props.click} className={css.btn}>
        Bet!
      </button>
    );
  }
}
