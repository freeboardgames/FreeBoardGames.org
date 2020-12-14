import * as React from 'react';

import css from './ButtonComponent.module.css';

interface IButtonProps {
  disabled?: boolean;
  click?: () => void;
}

export class ButtonComponent extends React.Component<IButtonProps> {
  render() {
    if (this.props.disabled) {
      return <button className={`${css.btn} ${css.disabled}`}>{this.props.children}</button>;
    }

    return (
      <button onClick={this.props.click} className={css.btn}>
        {this.props.children}
      </button>
    );
  }
}
