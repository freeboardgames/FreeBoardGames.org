import * as React from 'react';

interface IBlinkState {
  hidden: boolean;
  startTime: number;
}

interface IBlinkProps {
  blinks: number;
}

export class Blink extends React.Component<IBlinkProps, IBlinkState> {
  constructor(props: IBlinkProps) {
    super(props);
    this.state = {
      hidden: false,
      startTime: Date.now(),
    };
    requestAnimationFrame(this._animate(Date.now(), 0));
  }
  _animate = (now: number, blinks: number) => {
    const elapsed = now - this.state.startTime;
    const length = 2e3;
    const done = elapsed > length || blinks > this.props.blinks;
    return (() => {
      const hidden = done ? false : ((Math.floor(elapsed / 400 % 2)) === 1);
      if (this.state.hidden !== hidden) {
        blinks++;
      }
      this.setState({
        ... this.state,
        hidden,
      });
      requestAnimationFrame(this._animate(Date.now(), blinks));
    }).bind(this);
  }
  render() {
    return (this.state.hidden) ? null : this.props.children;
  }
}
