import * as React from 'react';

import css from './ScoreBoard.module.css';

import { IRoundSummary } from '../engine/types';

export class ScoreBoard extends React.Component<
  {
    playerNames: string[];
    playerRoles: boolean[];
    roundSummary: IRoundSummary;
    playerScores: number[];
  },
  {}
> {
  render() {
    const playerKeys = this.props.playerNames.map((_, i) => i);
    const orderTakersFirst = playerKeys
      .filter((i) => this.props.playerRoles[i])
      .concat(playerKeys.filter((i) => !this.props.playerRoles[i]));
    return (
      <div className={css.scoreBoard}>
        <table>
          <tbody>
            <tr>
              <td></td>
              {orderTakersFirst.map((i) => (
                <td key={i}>{this.props.playerNames[i]}</td>
              ))}
            </tr>
            <tr>
              <td>Points(required)</td>
              {orderTakersFirst.map((i) => this.renderPoints(i))}
            </tr>
            <tr>
              <td>Petit au bout</td>
              {orderTakersFirst.map((i) => (
                <td key={i}>{this.props.playerRoles[i] ? `${this.props.roundSummary.petitAuBout}` : '-'}</td>
              ))}
            </tr>
            <tr>
              <td>Multiplier</td>
              {orderTakersFirst.map((i) => (
                <td key={i}>{this.props.playerRoles[i] ? `×${this.props.roundSummary.multiplier}` : '-'}</td>
              ))}
            </tr>
            <tr>
              <td>Poignée</td>
              {orderTakersFirst.map((i) => (
                <td key={i}>{this.props.playerRoles[i] ? `${this.props.roundSummary.poignee}` : '-'}</td>
              ))}
            </tr>
            <tr>
              <td>Slam</td>
              {orderTakersFirst.map((i) => (
                <td key={i}>{this.props.playerRoles[i] ? `${this.props.roundSummary.slam}` : '-'}</td>
              ))}
            </tr>
            <tr>
              <td>Round score</td>
              {orderTakersFirst.map((i) => (
                <td key={i}>{this.props.roundSummary.scoring[i]}</td>
              ))}
            </tr>
            <tr>
              <td>Total score</td>
              {orderTakersFirst.map((i) => (
                <td key={i}>{this.props.playerScores[i]}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  renderPoints(i: number) {
    const takerPoints = this.props.roundSummary.takerPoints;
    const isTaker = this.props.playerRoles[i];
    const requiredPoints = isTaker ? `(${this.props.roundSummary.takerPointsRequired})` : '';
    return (
      <td key={i}>
        {isTaker ? takerPoints : 91 - takerPoints}
        {requiredPoints}
      </td>
    );
  }
}
