import * as React from 'react';
import { IGameArgs } from 'gamesShared/definitions/game';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { Ctx } from 'boardgame.io';
import { IG } from './game';
import { Hole, Store } from './Shapes';

/**
 * todo:
 * - always see own player on bottom
 */

interface IBoardProps {
  G: IG;
  ctx: Ctx;
  moves: any;
  playerID: string;
  gameArgs?: IGameArgs;
}

export class Board extends React.Component<IBoardProps, {}> {
  onClick = (playerId: number, id: number) => {
    this.props.moves.sowSeeds(playerId, id);
  };
  _renderHoles(playerId: number) {
    const holes = [];
    const startX = 1;
    const y = playerId ? 0 : 1;
    for (let i = 0; i < this.props.G.playerHoles[playerId].length; i++) {
      let x = i;
      if (!y) {
        x = 5 - i;
      }
      holes.push(
        <Hole
          x={x + startX}
          y={y}
          key={`hole_${i}`}
          seedCount={this.props.G.playerHoles[playerId][i]}
          onclick={() => this.onClick(playerId, i)}
        />,
      );
    }
    return holes;
  }
  _renderStore(playerId: number, position: string) {
    if (position === 'left') {
      return <Store x={0} y={0.5} key={`store_${playerId}`} seedCount={this.props.G.playerStoreCount[playerId]} />;
    } else {
      return <Store x={7} y={0.5} key={`store_${playerId}`} seedCount={this.props.G.playerStoreCount[playerId]} />;
    }
  }
  render() {
    let a = [];
    a.push(this._renderStore(0, 'right'));
    a.push(this._renderStore(1, 'left'));
    a.push(this._renderHoles(0));
    a.push(this._renderHoles(1));

    return (
      <GameLayout gameArgs={this.props.gameArgs}>
        {/* <h2>Hello worldd!</h2> */}
        {/* <pre>{JSON.stringify(this.props.gameArgs, null, 2)}</pre> */}
        <p>Player {parseInt(this.props.ctx.currentPlayer) + 1}&apos;s turn</p>

        <svg width="100%" height="100%" viewBox="-100 -100 1000 1000">
          {a}
        </svg>
      </GameLayout>
    );
  }
}
