import * as React from 'react';

import css from './BetPanel.css';

const _height: number = 100;

export interface IBetPanelProps {
  playerIndex: number;
  minBet: number;
  maxBet: number;
  bet: (bet: number) => void;
}

export class BetPanel extends React.Component<IBetPanelProps, { value: number }> {
  constructor(props: IBetPanelProps) {
    super(props);
    this.state = { value: props.minBet };

    this.handleChange = this.handleChange.bind(this);
  }

  _bet = () => {
    this.props.bet(this.state.value);
  };

  render() {
    return <div className={css.bidPanel}>{this.renderBettingOptions()}</div>;
  }

  renderBettingOptions() {
    if (this.props.maxBet < this.props.minBet) {
      return <button disabled={true}>No bets avaliable</button>;
    }

    var stepSize = (_height - 10) / (this.props.maxBet - this.props.minBet);
    var buttonOffsetBottom = (this.state.value - this.props.minBet) * stepSize;

    return (
      <div>
        {this.renderSlider()}
        <button className={css.button} onClick={() => this._bet()} style={{ bottom: buttonOffsetBottom }}>
          Bet {this.state.value}
        </button>
      </div>
    );
  }

  renderSlider() {
    var minBet = this.props.minBet;
    var maxBet = this.props.maxBet;
    if (minBet === maxBet) return;

    return (
      <input
        className={css.slider}
        type={'range'}
        min={minBet}
        max={maxBet}
        step={1}
        value={this.state.value}
        onChange={this.handleChange}
        style={{ height: _height }}
      />
    );
  }

  handleChange(event) {
    this.setState({ value: parseInt(event.target.value) });
  }
}
