import * as React from 'react';

import css from './ButtonComponent.css';

interface IButtonProps {
  disabled?: boolean;
  click?: () => void;
  text: string;
}

export class ButtonComponent extends React.Component<IButtonProps> {
  render() {
    if (this.props.disabled) {
      return <button className={`${css.btn} ${css.disabled}`}>{this.props.text}</button>;
    }

    return (
      <button onClick={this.props.click} className={css.btn}>
        {this.props.children}
      </button>
    );
  }
}
