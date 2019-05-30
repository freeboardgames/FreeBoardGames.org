import React from 'react';

interface IBlinkState {
  hidden: boolean;
  startTime: number;
}

interface IBlinkProps {
  totalDurationMillis?: number;
  blinkDurationMillis?: number;
}

export class Blink extends React.Component<IBlinkProps, IBlinkState> {
  static defaultProps = {
    totalDurationMillis: 2000,
    blinkDurationMillis: 300,
  };
  constructor(props: IBlinkProps) {
    super(props);
    this.state = {
      hidden: false,
      startTime: Date.now(),
    };
    requestAnimationFrame(this._animate(Date.now()));
  }
  _animate = (now: number) => () => {
    const elapsed = now - this.state.startTime;
    const done = elapsed > this.props.totalDurationMillis;
    const blinkHidden = Math.floor((elapsed / this.props.blinkDurationMillis) % 2) === 1;
    const hidden = done ? false : blinkHidden;
    this.setState({
      ...this.state,
      hidden,
    });
    if (!done) {
      requestAnimationFrame(this._animate(Date.now()));
    }
  };
  render() {
    return this.state.hidden ? null : this.props.children;
  }
}
