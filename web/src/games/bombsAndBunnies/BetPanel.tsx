import * as React from 'react';
<<<<<<< HEAD

import css from './BetPanel.css';

const _height: number = 100;

=======
import { BetButtonComponent } from './BetButtonComponent';

import css from './BetPanel.css';

>>>>>>> upstream/master
export interface IBetPanelProps {
  playerIndex: number;
  minBet: number;
  maxBet: number;
  bet: (bet: number) => void;
<<<<<<< HEAD
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
=======
  skip?: () => void;
}

export class BetPanel extends React.Component<IBetPanelProps, {}> {
  _bet = (bet: number) => {
    this.props.bet(bet);
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
>>>>>>> upstream/master
      </div>
    );
  }

<<<<<<< HEAD
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
=======
  renderBettingOptions() {
    var bets = [];
    for (var bet = this.props.minBet; bet <= this.props.maxBet; bet++) {
      bets.push(bet);
    }

    return bets.map((bet: number, index: number) => this.renderBetOption(bet, index));
  }

  renderBetOption(bet: number, index: number) {
    return (
      <div key={index}>
        <BetButtonComponent click={() => this._bet(bet)} bet={bet} />
      </div>
    );
>>>>>>> upstream/master
  }
}
