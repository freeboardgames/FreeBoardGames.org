import * as React from 'react';

import css from './BetDisplay.css';

export interface IBetDisplayProps {
  currentBet: number;
  revealedCount?: number;
  isRevealing: boolean;
}

export class BetDisplay extends React.Component<IBetDisplayProps> {
  text: string = '';
  activeText: string = '';
  flip: boolean = false;

  render() {
    var text;
    if (this.props.isRevealing) {
      text = `${this.props.revealedCount} / ${this.props.currentBet}`;
    } else {
      text = this.props.currentBet;
    }

    var animationStyle = this.getAnimationStyle();

    return (
      <svg className={css.BetDisplay} version="1.0" width="100" height="100" viewBox="0 0 100 100">
        <defs id="defs8" />
        <g style={{ animation: animationStyle }}>
          <text x="50%" y="50%" textAnchor="middle" fontSize="50">
            {text}
          </text>
        </g>
      </svg>
    );
  }

  getAnimationStyle() {
    if (!this.props.isRevealing) return `${css.heartbeat} 1s infinite`;

    const maxDuration = 1;
    const minDuration = 0.4;

    var duration =
      minDuration + (maxDuration - minDuration) * (1 - this.props.revealedCount / (this.props.currentBet - 1));
    var animationStyle = `${css.heartbeat} ${duration}s infinite`;

    return animationStyle;
  }
}
