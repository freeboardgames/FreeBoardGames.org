import * as React from 'react';
import { useCurrentGameTranslation } from 'infra/i18n';

import css from './RoundScores.module.css';

export interface IRoundDetail {
  description: JSX.Element | string;
  values: (JSX.Element | string)[];
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

export function RoundScores(props: {
  playerNames: string[];
  roundSummaries: IRoundSummary[];
  showRoundSummary: boolean;
  playerScores: number[];
}) {
  const { translate } = useCurrentGameTranslation();
  const numSummaries = props.roundSummaries.length;
  const [hoverSummary, setHoverSummary] = React.useState(-1);
  const showSummaryId = hoverSummary == -1 && numSummaries > 0 ? numSummaries - 1 : hoverSummary;

  function renderPreviousRounds() {
    const numPlayers = props.playerNames.length;
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
                    <td colSpan={numPlayers + 1}>
                      <i>{translate('scoreboard_firstround')}</i>
                    </td>
                  </tr>
                )}
                {[...props.roundSummaries].reverse().map((S, iSummary) => {
                  const iRound = props.roundSummaries.length - iSummary;
                  const roundPlayers = props.playerNames.map((_, i) => S.players.indexOf(i));
                  return (
                    <tr
                      className={showSummaryId == iRound - 1 ? css.hover : ''}
                      key={iRound}
                      onMouseOver={() => setHoverSummary(iRound - 1)}
                      onMouseOut={() => setHoverSummary(-1)}
                    >
                      <td>{iRound}</td>
                      {roundPlayers.map((iPlayer) => {
                        return <td key={iPlayer}>{S.scoring[iPlayer]}</td>;
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
    const summary = showSummaryId == -1 ? EmptyRoundSummary : props.roundSummaries[showSummaryId];
    return (
      <div
        className={[css.scoreBoard, css.board].join(' ')}
        style={{
          display: showSummaryId == -1 ? 'none' : 'block',
        }}
      >
        <table>
          <tbody>
            <tr>
              <td>{translate('scoreboard_round_n', { n: showSummaryId + 1 })}</td>
              {summary.players.map((pos, iPlayer) => (
                <td key={iPlayer}>{props.playerNames[pos]}</td>
              ))}
            </tr>
            {summary.details.map((detail, iDetail) => (
              <tr key={iDetail}>
                <td>{detail.description}</td>
                {detail.values.map((value, iValue) => (
                  <td key={iValue}>{value}</td>
                ))}
              </tr>
            ))}
            <tr>
              <td>{translate('scoreboard_round_score')}</td>
              {summary.scoring.map((score, iScore) => (
                <td key={iScore}>{score}</td>
              ))}
            </tr>
            <tr>
              <td>{translate('scoreboard_total_score')}</td>
              {summary.players.map((pos, iPlayer) => (
                <td key={iPlayer}>{props.playerScores[pos]}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  return <div className={css.showPreviousRounds}>{renderPreviousRounds()}</div>;
}
