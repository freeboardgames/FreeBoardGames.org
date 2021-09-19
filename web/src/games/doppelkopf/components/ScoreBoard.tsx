import * as React from 'react';
import { useCurrentGameTranslation } from 'infra/i18n';

import css from './ScoreBoard.module.css';

import { IRoundSummary } from '../types';

const EmptyRoundSummary: IRoundSummary = {
  takerId: '',
  rePointsRequired: 0,
  contraPointsRequired: 0,
  rePoints: 0,
  basic: 0,
  re: 0,
  contra: 0,
  charlie: 0,
  doppelkopf: 0,
  fox: 0,
  scoring: [0, 0, 0, 0, 0],
};

export function ScoreBoard(props: {
  playerNames: string[];
  playerRoles: boolean[];
  roundSummaries: IRoundSummary[];
  showRoundSummary: boolean;
  playerScores: number[];
}) {
  const { translate } = useCurrentGameTranslation();
  const numSummaries = props.roundSummaries.length;
  const [hoverSummary, setHoverSummary] = React.useState(-1);
  const showSummary = hoverSummary == -1 && numSummaries > 0 ? numSummaries - 1 : hoverSummary;

  function renderPreviousRounds() {
    return (
      <>
        <input type="checkbox" id="togglePrevRounds" checked={props.showRoundSummary ? true : null} />
        <label htmlFor="togglePrevRounds">{translate('prev_scores')}</label>
        <div>
          <div className={`${css.previousRounds} ${css.board}`}>
            <table>
              <tbody>
                <tr>
                  <td>#</td>
                  {props.playerNames.map((name) => (
                    <td key={name}>{name}</td>
                  ))}
                </tr>
                {props.roundSummaries.length > 0 ? null : (
                  <tr>
                    <td colSpan={5}>
                      <i>{translate('scoreboard_firstround')}</i>
                    </td>
                  </tr>
                )}
                {[...props.roundSummaries].reverse().map((S, i) => {
                  const iRound = props.roundSummaries.length - i;
                  return (
                    <tr
                      className={showSummary == iRound - 1 ? css.hover : ''}
                      key={iRound}
                      onMouseOver={() => setHoverSummary(iRound - 1)}
                      onMouseOut={() => setHoverSummary(-1)}
                    >
                      <td>{iRound}</td>
                      {S.scoring.map((score, iScore) => {
                        return <td key={iScore}>{score}</td>;
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {renderRoundSummary()}
        </div>
      </>
    );
  }

  function renderRoundSummary() {
    const summary = showSummary == -1 ? EmptyRoundSummary : props.roundSummaries[showSummary];
    const playerKeys = props.playerNames.map((_, i) => i);
    const orderTakersFirst = playerKeys
      .filter((i) => props.playerRoles[i])
      .concat(playerKeys.filter((i) => !props.playerRoles[i]));
    return (
      <div
        className={[css.scoreBoard, css.board].join(' ')}
        style={{
          display: showSummary == -1 ? 'none' : 'block',
        }}
      >
        <table>
          <tbody>
            <tr>
              <td>{translate('scoreboard_round_n', { n: showSummary + 1 })}</td>
              {orderTakersFirst.map((i) => (
                <td key={i}>{props.playerNames[i]}</td>
              ))}
            </tr>
            <tr>
              <td>{translate('scoreboard_points')}</td>
              {orderTakersFirst.map((i) => renderPoints(summary, i))}
            </tr>
            <tr>
              <td>{translate('scoreboard_basic')}</td>
              {orderTakersFirst.map((i) => (
                <td key={i}>{props.playerRoles[i] ? `${summary.basic}` : '-'}</td>
              ))}
            </tr>
            <tr>
              <td>{translate('scoreboard_re')}</td>
              {orderTakersFirst.map((i) => (
                <td key={i}>{props.playerRoles[i] ? `${summary.re}` : '-'}</td>
              ))}
            </tr>
            <tr>
              <td>{translate('scoreboard_contra')}</td>
              {orderTakersFirst.map((i) => (
                <td key={i}>{props.playerRoles[i] ? `${summary.contra}` : '-'}</td>
              ))}
            </tr>
            <tr>
              <td>{translate('scoreboard_charlie')}</td>
              {orderTakersFirst.map((i) => (
                <td key={i}>{props.playerRoles[i] && !isNone(summary.charlie) ? `${summary.charlie}` : '-'}</td>
              ))}
            </tr>
            <tr>
              <td>{translate('scoreboard_doppelkopf')}</td>
              {orderTakersFirst.map((i) => (
                <td key={i}>{props.playerRoles[i] && !isNone(summary.doppelkopf) ? `${summary.doppelkopf}` : '-'}</td>
              ))}
            </tr>
            <tr>
              <td>{translate('scoreboard_fox')}</td>
              {orderTakersFirst.map((i) => (
                <td key={i}>{props.playerRoles[i] && !isNone(summary.fox) ? `${summary.fox}` : '-'}</td>
              ))}
            </tr>
            <tr>
              <td>{translate('scoreboard_round_score')}</td>
              {orderTakersFirst.map((i) => (
                <td key={i}>{summary.scoring[i]}</td>
              ))}
            </tr>
            <tr>
              <td>{translate('scoreboard_total_score')}</td>
              {orderTakersFirst.map((i) => (
                <td key={i}>{props.playerScores[i]}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  function renderPoints(summary: IRoundSummary, i: number) {
    const rePoints = summary.rePoints;
    const isTaker = props.playerRoles[i];
    const requiredPoints = `(${isTaker ? summary.rePointsRequired : summary.contraPointsRequired})`;
    return (
      <td key={i}>
        {isTaker ? rePoints : 240 - rePoints}
        {requiredPoints}
      </td>
    );
  }

  return <div className={css.showPreviousRounds}>{renderPreviousRounds()}</div>;
}

function isNone(value: number): boolean {
  return isNaN(value) || value === null;
}
