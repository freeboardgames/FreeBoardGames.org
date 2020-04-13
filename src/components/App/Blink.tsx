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
  requestID: number = null;
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
    this.requestID = requestAnimationFrame(this._animate(Date.now()));
  }
  componentWillUnmount() {
    if (this.requestID) {
      window.cancelAnimationFrame(this.requestID);
      this.requestID = null;
    }
  }
  _animate = (now: number) => () => {
    const elapsed = now - this.state.startTime;
    const done = elapsed > this.props.totalDurationMillis;
    // const blinkHidden = Math.floor((elapsed / this.props.blinkDurationMillis) % 2) === 1;  // https://github.com/babel/minify/issues/904
    const blinkHidden = (elapsed / this.props.blinkDurationMillis) % 2 << 0 === 1;
    const hidden = done ? false : blinkHidden;
    this.setState({
      ...this.state,
      hidden,
    });
    if (!done) {
      this.requestID = requestAnimationFrame(this._animate(Date.now()));
    }
  };
  render() {
    return this.state.hidden ? null : this.props.children;
  }
}
