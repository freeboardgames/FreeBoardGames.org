import * as React from 'react';
import { useCurrentGameTranslation } from 'infra/i18n';

import css from './ScoreBoard.module.css';

import { IRoundSummary } from '../types';

const EmptyRoundSummary: IRoundSummary = {
  takerId: '',
  takerBid: 0,
  takerPointsRequired: 0,
  takerPoints: 0,
  winLevel: 0,
  tops: 0,
  basicValue: 0,
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
        className={[css.scoreBoard, css.board, props.showRoundSummary ? css.toggleHover : ''].join(' ')}
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
              <td>{translate('scoreboard_bid')}</td>
              {orderTakersFirst.map((i) => (
                <td key={i}>{props.playerRoles[i] ? `${summary.takerBid}` : '-'}</td>
              ))}
            </tr>
            <tr>
              <td>{translate('scoreboard_tops')}</td>
              {orderTakersFirst.map((i) => (
                <td key={i}>{props.playerRoles[i] && !isNone(summary.tops) ? `${summary.tops}` : '-'}</td>
              ))}
            </tr>
            <tr>
              <td>{translate('scoreboard_winlevel')}</td>
              {orderTakersFirst.map((i) => (
                <td key={i}>{props.playerRoles[i] && !isNone(summary.winLevel) ? `${summary.winLevel}` : '-'}</td>
              ))}
            </tr>
            <tr>
              <td>{translate('scoreboard_basicvalue')}</td>
              {orderTakersFirst.map((i) => (
                <td key={i}>{props.playerRoles[i] ? `${summary.basicValue}` : '-'}</td>
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
    const takerPoints = summary.takerPoints;
    const takerPointsReq = summary.takerPointsRequired;
    const isTaker = props.playerRoles[i];
    const reqPointsStr = !isTaker ? '' : `(${isNone(takerPointsReq) ? '-' : takerPointsReq})`;
    return (
      <td key={i}>
        {isNone(takerPoints) ? '-' : isTaker ? takerPoints : 120 - takerPoints}
        {reqPointsStr}
      </td>
    );
  }

  return <div className={css.showPreviousRounds}>{renderPreviousRounds()}</div>;
}

function isNone(value: number): boolean {
  return isNaN(value) || value === null;
}
