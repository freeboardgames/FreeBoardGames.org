import * as React from 'react';

import css from './BetPanel.module.css';

export interface IBetPanelProps {
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

  componentDidUpdate() {
    if (this.state.value < this.props.minBet) {
      this.setState({ value: Math.max(this.state.value, this.props.minBet) });
    }
  }

  _bet = () => {
    this.props.bet(this.state.value);
  };

  render() {
    return <div className={css.betPanel}>{this.renderBettingOptions()}</div>;
  }

  renderBettingOptions() {
    if (this.props.maxBet < this.props.minBet) {
      return <button disabled={true}>No bets avaliable</button>;
    }

    return (
      <div>
        {this.renderSlider()}
        <button className={css.button} onClick={() => this._bet()}>
          Bet {this.state.value}
        </button>
      </div>
    );
  }

  renderSlider() {
    const minBet = this.props.minBet;
    const maxBet = this.props.maxBet;
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
