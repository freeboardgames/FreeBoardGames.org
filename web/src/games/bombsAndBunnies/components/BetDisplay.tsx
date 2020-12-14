import * as React from 'react';

import css from './BetDisplay.module.css';

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
    const animationStyle = this.getAnimationStyle();
    let text;
    if (this.props.isRevealing) {
      text = `${this.props.revealedCount} / ${this.props.currentBet}`;
    } else {
      text = this.props.currentBet;
    }

    return (
      <svg className={css.BetDisplay} version="1.0" width="100" height="100" viewBox="0 0 100 100">
        <defs id="defs8" />
        <g style={{ animation: animationStyle }}>
          <text x="50%" y="75" textAnchor="middle" fontSize="50">
            {text}
          </text>
        </g>
      </svg>
    );
  }

  getAnimationStyle() {
    if (!this.props.isRevealing) return `${css.heartbeat} 1s infinite`;

    const maxDuration = 1.2;
    const minDuration = 0.6;

    const duration =
      minDuration + (maxDuration - minDuration) * (1 - this.props.revealedCount / (this.props.currentBet - 1));

    return `${css.heartbeat} ${duration}s infinite`;
  }
}
