import * as React from 'react';

import { TIME_BUFF, GRID_SIZE, CALL_BOX_SIZE } from '../constants';
import commonCSS from './biComponent.css';

interface ICountdownProps {
  callRef: number;
  timeRef: number;
  backOff: number;
  duration: number;
  callOnTimeout: (callRef: number) => void;
}

interface ICountdownState {
  timeLeft: number;
}

export default class Countdown extends React.Component<ICountdownProps, ICountdownState> {
  timer: any = null;
  constructor(props: ICountdownProps) {
    super(props);
    this.state = { timeLeft: this._getTimeLeft() };
  }

  _getTimeLeft = () => {
    let timeLeft = this.props.duration + TIME_BUFF - (Date.now() - this.props.timeRef);
    timeLeft = timeLeft >= this.props.duration ? this.props.duration : timeLeft;
    return timeLeft;
  };

  clearTimer = () => {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  };

  componentDidMount() {
    this.clearTimer();
    this.timer = setInterval(() => {
      const timeLeft = this._getTimeLeft();
      if (timeLeft + this.props.backOff > 0) {
        this.setState({ timeLeft });
      } else {
        this.props.callOnTimeout(this.props.callRef);
      }
    }, 350);
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  render() {
    return [1, GRID_SIZE - 1].map((xPos, idx) => (
      <text
        key={`bi_count_down_${idx}`}
        className={commonCSS.noselect}
        x={xPos}
        y={0.25 + CALL_BOX_SIZE / 2}
        fontSize={0.45}
        textAnchor="middle"
        fill="white"
      >
        {Math.floor((this.state.timeLeft >= 0 ? this.state.timeLeft : 0) / 1000)}
      </text>
    ));
  }
}
