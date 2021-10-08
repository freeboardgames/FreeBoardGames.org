import * as React from 'react';
import { useCurrentGameTranslation } from 'infra/i18n';

import css from './ScoreBoard.module.css';

export interface IRoundDetail {
  description: string;
  values: string[];
}

export interface IRoundSummary {
  players: number[];
  scoring: string[];
  details: IRoundDetail[];
}

const EmptyRoundSummary: IRoundSummary = {
  players: [0, 0, 0],
  scoring: ['', '', ''],
  details: [{ description: '', values: ['', '', ''] }],
};

export function ScoreBoard(props: {
  playerNames: string[];
  roundSummaries: IRoundSummary[];
  showRoundSummary: boolean;
  playerScores: number[];
}) {
  const { translate } = useCurrentGameTranslation();
  const numSummaries = props.roundSummaries.length;
  const [hoverSummary, setHoverSummary] = React.useState(-1);
  const showSummary = hoverSummary == -1 && numSummaries > 0 ? numSummaries - 1 : hoverSummary;

  function renderPreviousRounds() {
    const numPlayers = props.playerNames.length;
    return (
      <>
        <input type="checkbox" id="togglePrevRounds" checked={props.showRoundSummary ? true : null} />
        <label htmlFor="togglePrevRounds">{translate('prev_scores')}</label>
        <div>
          <div className={`${css.previousRounds} ${css.board}`} style={{ maxWidth: `${23 + numPlayers * 53}px` }}>
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
                    <td colSpan={numPlayers + 1}>
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
    return (
      <div
        className={[css.scoreBoard, css.board].join(' ')}
        style={{
          width: `${150 + summary.players.length * 76}px`,
          display: showSummary == -1 ? 'none' : 'block',
        }}
      >
        <table>
          <tbody>
            <tr>
              <td>{translate('scoreboard_round_n', { n: showSummary + 1 })}</td>
              {summary.players.map((i) => (
                <td key={i}>{props.playerNames[i]}</td>
              ))}
            </tr>
            {summary.details.map((detail, iDetail) => {
              <tr key={iDetail}>
                <td>{detail.description}</td>
                {detail.values.map((value, iValue) => (
                  <td key={iValue}>{value}</td>
                ))}
              </tr>;
            })}
            <tr>
              <td>{translate('scoreboard_round_score')}</td>
              {summary.scoring.map((score, iScore) => (
                <td key={iScore}>{score}</td>
              ))}
            </tr>
            <tr>
              <td>{translate('scoreboard_total_score')}</td>
              {summary.players.map((i) => (
                <td key={i}>{props.playerScores[i]}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  return <div className={css.showPreviousRounds}>{renderPreviousRounds()}</div>;
}
