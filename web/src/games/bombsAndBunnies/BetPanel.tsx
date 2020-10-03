import * as React from 'react';

import css from './BetPanel.css';

export interface IBetPanelProps {
  playerIndex: number;
  minBet: number;
  maxBet: number;
  bet: (bet: number) => void;
  skip?: () => void;
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
    return <div className={css.bidPanel}>{this.renderBettingOptionsContainer()}</div>;
  }

  renderBettingOptionsContainer() {
    var props = this.props;
    var optionsCount = props.maxBet - props.minBet + (props.skip ? 1 : 0);

    const w: number = optionsCount * 40 + 80;

    return (
      <div className={css.betting} style={{ width: w }}>
        {this.renderBettingOptions()}
      </div>
    );
  }

  renderBettingOptions() {
    if (this.props.maxBet < this.props.minBet) {
      return <div>No bets are available</div>;
    }

    return (
      <div>
        <span>{this.state.value}</span>
        {this.renderSlider()}
        <button onClick={() => this._bet()}>Confirm</button>
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
      />
    );
  }

  handleChange(event) {
    this.setState({ value: parseInt(event.target.value) });
  }
}
