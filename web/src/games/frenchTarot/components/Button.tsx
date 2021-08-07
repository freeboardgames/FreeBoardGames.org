import * as React from 'react';

import css from './Button.module.css';

export class Button extends React.Component<
  {
    text: JSX.Element | string;
    red?: boolean;
    dirleft?: boolean;
    below?: boolean;
    click?: () => void;
  },
  {}
> {
  render() {
    return (
      <div
        className={[
          css.speechBubble,
          this.props.red ? css.red : '',
          this.props.dirleft ? css.left : css.right,
          this.props.below ? css.below : '',
          this.props.click ? '' : css.inactive,
        ].join(' ')}
        onClick={this.props.click ? () => this.props.click() : null}
      >
        {this.props.text}
      </div>
    );
  }
}
