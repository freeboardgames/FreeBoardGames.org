import React from 'react';

interface IAutoHideState {
  hidden: boolean;
  startTime: number;
}

interface IAutoHideProps {
  totalDurationMillis?: number;
}

export class AutoHide extends React.Component<IAutoHideProps, IAutoHideState> {
  requestID: number = null;
  state = { hidden: false, startTime: Date.now() };

  static defaultProps = {
    totalDurationMillis: 2000,
  };

  constructor(props: IAutoHideProps) {
    super(props);
    this.show();
  }

  UNSAFE_componentWillReceiveProps() {
    this.show();
  }

  show() {
    this.setState({
      hidden: false,
      startTime: Date.now(),
    });
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
    const hidden = elapsed > this.props.totalDurationMillis;
    this.setState({
      ...this.state,
      hidden,
    });
    if (!hidden) {
      this.requestID = requestAnimationFrame(this._animate(Date.now()));
    }
  };
  render() {
    return this.state.hidden ? null : this.props.children;
  }
}
