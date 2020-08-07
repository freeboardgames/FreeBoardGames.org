import React from 'react';

interface State {
  hidden: boolean;
  startTime: number;
}

interface Props {
  children: React.ReactNode;
  totalDurationMillis?: number;
}

export class AutoHide extends React.Component<Props, State> {
  requestID: number = null;

  static defaultProps = {
    totalDurationMillis: 2000,
  };

  constructor(props: Props) {
    super(props);
    this.state = { hidden: false, startTime: Date.now() };
  }

  componentDidMount() {
    this.show();
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.children !== this.props.children && this.state.hidden) {
      this.show();
    }
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
