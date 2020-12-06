import * as React from 'react';

import { TIME_OUT, TIME_BUFF, GRID_SIZE, CALL_BOX_SIZE } from '../constants';
import commonCSS from './biComponent.css';

interface ICountdownProps {
  timeRef: number;
  callOnTimeout: () => void;
}

interface ICountdownState {
  timeLeft: number;
}

export default class Countdown extends React.Component<ICountdownProps, ICountdownState> {
  timer: any = null;
  constructor(props: ICountdownProps) {
    super(props);
    this.state = { timeLeft: this._getTimeLeft() };
    this.timer = 1;
  }

  _getTimeLeft = () => {
    let timeLeft = (TIME_OUT + TIME_BUFF) * 1000 - (Date.now() - this.props.timeRef);
    timeLeft = Math.floor((timeLeft >= 0 ? timeLeft : 0) / 1000);
    return timeLeft;
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      const timeLeft = this._getTimeLeft();
      if (timeLeft > 0) {
        this.setState({ timeLeft });
      } else {
        this.props.callOnTimeout();
      }
    }, 200);
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
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
        {this.state.timeLeft}
      </text>
    ));
  }
}
