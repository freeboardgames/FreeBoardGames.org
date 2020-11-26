import React from 'react';
import css from './bhumanpolicy.css';

interface InnerWrapper {
  playerCount: number;

  playedPolicies: number;
}

export class BHumanPolicies extends React.Component<InnerWrapper, {}> {
  render() {
    return (
      <div className={css.human}>
        {this.props.playedPolicies > 0 ? this._played() : this._empty()}
        {this.props.playedPolicies > 1 ? this._played() : this._empty()}
        {this.props.playedPolicies > 2 ? this._played() : this._empty()}
        {this.props.playedPolicies > 3 ? this._played() : this._empty()}
        {this.props.playedPolicies > 4 ? this._played() : this._empty()}
      </div>
    );
  }

  _played = () => {
    return (
      <div className={css.tooltip}>
        {' '}
        💧
        <span className={css.tooltiptext}>Already played.</span>
      </div>
    );
  };

  _empty = () => {
    return (
      <div className={css.tooltip}>
        {' '}
        ⬜<span className={css.tooltiptext}>No special action is performed when a 💧 or 🩸 is played here.</span>
      </div>
    );
  };
}
