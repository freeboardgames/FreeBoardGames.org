import * as React from 'react';

import css from './BetButton.module.css';

interface IBetButtonProps {
  click?: () => void;
  active?: boolean;
}

class BaseButton extends React.Component<IBetButtonProps> {
  text: string = '';
  activeText: string = '';
  left: boolean = false;

  render() {
    const availableClass = !!this.props.click ? css.available : '';
    const activeClass = !!this.props.active ? css.active : '';
    const direction = this.left ? css.left : css.right;
    const classNames = `${css.speechBubble} ${availableClass} ${activeClass} ${direction}`;

    let text = this.text;
    if (this.props.active && this.activeText) {
      text = this.activeText;
    }

    return (
      <div className={classNames} onClick={this.props.click}>
        {text}
      </div>
    );
  }
}

export class BetButton extends BaseButton {
  text = 'Bet!';
  activeText = 'Cancel';
  left = true;
}

export class SkipButton extends BaseButton {
  text = 'Skip';
}
