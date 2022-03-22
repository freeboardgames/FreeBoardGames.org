import * as React from 'react';
import { withCurrentGameTranslation, WithCurrentGameTranslation } from 'infra/i18n';
import { compose } from 'recompose';

import css from './BetPanel.module.css';

interface IBetPanelInnerProps extends WithCurrentGameTranslation {}

export interface IBetPanelProps {
  minBet: number;
  maxBet: number;
  bet: (bet: number) => void;
}

export class BetPanelInternal extends React.Component<IBetPanelProps & IBetPanelInnerProps, { value: number }> {
  constructor(props: IBetPanelProps & IBetPanelInnerProps) {
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
      return <button disabled={true}>{this.props.translate('bet_panel.no_bets_avaliable')}</button>;
    }

    return (
      <div>
        {this.renderSlider()}
        <button className={css.button} onClick={() => this._bet()}>
          {this.props.translate('bet_panel.bet', { value: this.state.value })}
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

const enhance = compose<IBetPanelInnerProps, IBetPanelProps>(withCurrentGameTranslation);
export const BetPanel = enhance(BetPanelInternal);
