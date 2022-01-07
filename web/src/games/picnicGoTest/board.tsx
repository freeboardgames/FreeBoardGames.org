import * as React from 'react';
import { IGameArgs } from 'gamesShared/definitions/game';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { Ctx } from 'boardgame.io';
import { IG } from './game';

interface IBoardProps {
  G: IG;
  ctx: Ctx;
  moves: any;
  playerID: string;
  gameArgs?: IGameArgs;
}

export function Board(props: IBoardProps) {
  function renderBoard() {
    const countsN = props.G.counts.length;
    const counts =
      countsN == 0
        ? new Array(12).fill(0)
        : new Array(12).fill(0).map((_, i) => {
            return props.G.counts.map((arr) => arr[i]).reduce((a, b) => a + b, 0);
          });
    const countsTotal = Math.max(
      1,
      counts.reduce((a, b) => a + b, 0),
    );
    const countsPerc = counts.map((n) => Math.round((100 * n) / countsTotal));
    const countsCupcakes = (100 * props.G.counts.filter((arr) => arr[9] == 0).length) / Math.max(1, countsN);

    const shuffleStatsN = props.G.shuffleStats.length;
    const shuffleStats =
      shuffleStatsN == 0
        ? new Array(12).fill(0)
        : new Array(12).fill(0).map((_, i) => {
            return props.G.shuffleStats.map((arr) => arr[i]).reduce((a, b) => a + b, 0);
          });
    const shuffleStatsTotal = Math.max(
      1,
      shuffleStats.reduce((a, b) => a + b, 0),
    );
    const shuffleStatsPerc = shuffleStats.map((n) => Math.round((100 * n) / shuffleStatsTotal));
    const shuffleStatsCupcakes =
      (100 * props.G.shuffleStats.filter((arr) => arr[9] == 0).length) / Math.max(1, shuffleStatsN);

    const expectedCounts = [5, 10, 5, 6, 12, 8, 14, 14, 14, 10, 6, 4];
    const expectedTotal = expectedCounts.reduce((a, b) => a + b, 0);
    const expectedPerc = expectedCounts.map((n) => Math.round((100 * n) / expectedTotal));

    return (
      <GameLayout gameArgs={props.gameArgs} maxWidth="750px">
        <table style={{ width: '40em' }}>
          <thead>
            <tr style={{ fontSize: '0.6em' }}>
              <th></th>
              <th>Sandwich chicken</th>
              <th>Sandwich pork</th>
              <th>Sandwich beef</th>
              <th>Chips potato 1</th>
              <th>Chips potato 2</th>
              <th>Chips potato 3</th>
              <th>Deviled eggs</th>
              <th>Fried chicken</th>
              <th>Pizza</th>
              <th>Cupcake</th>
              <th>Mayo</th>
              <th>Fork</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ textAlign: 'right' }}>Expected statistics (%)</td>
              {expectedPerc.map((p, i) => (
                <td key={i}>{p}</td>
              ))}
            </tr>
            <tr>
              <td style={{ textAlign: 'right' }}>Shuffle statistics (%)</td>
              {shuffleStatsPerc.map((p, i) => (
                <td key={i}>{p}</td>
              ))}
            </tr>
            <tr>
              <td style={{ textAlign: 'right' }}>Picnic Go statistics (%)</td>
              {countsPerc.map((p, i) => (
                <td key={i}>{p}</td>
              ))}
            </tr>
          </tbody>
        </table>
        <p>
          Statistics from N={shuffleStatsN} explicit shuffle operations (middle row)
          <br /> and N={countsN} bgio {props.G.numPlayers}-player games of Picnic Go (last row)
        </p>
        <table style={{ width: '50em' }}>
          <thead>
            <tr>
              <th></th>
              <th>Expected value</th>
              <th>Explicit shuffle</th>
              <th>Picnic Go Implementation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>No Cupcakes in start hand</td>
              <td>{[11.66, 4.85, 2.47, 1.6][props.G.numPlayers - 2]}%</td>
              <td>{Math.round(shuffleStatsCupcakes * 1e2) / 1e2}%</td>
              <td>{Math.round(countsCupcakes * 1e2) / 1e2}%</td>
            </tr>
          </tbody>
        </table>
        <p>
          <button onClick={() => props.moves.shuffleStatistics()}>Shuffle statistics</button>
          <button onClick={() => props.moves.count(2)}>2-player game</button>
          <button onClick={() => props.moves.count(3)}>3-player game</button>
          <button onClick={() => props.moves.count(4)}>4-player game</button>
          <button onClick={() => props.moves.count(5)}>5-player game</button>
        </p>
      </GameLayout>
    );
  }

  return renderBoard();
}
