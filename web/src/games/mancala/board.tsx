import * as React from 'react';
import { IGameArgs } from 'gamesShared/definitions/game';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { Ctx } from 'boardgame.io';
import { IG } from './game';
import { Hole, Store } from './shapes';

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
    for (let i = 0; i < this.props.G.playerHoles[playerId].length; i++) {
      holes.push(
        <Hole
          x={i + 1}
          y={playerId}
          key={`hole_${i}`}
          seedCount={this.props.G.playerHoles[playerId][i]}
          onclick={() => this.onClick(playerId, i)}
        />,
      );
    }
    return holes;
  }
  _renderStore(playerId: number) {
    if (playerId === 0) {
      return <Store x={0} y={0.5} key={`store_${playerId}`} seedCount={this.props.G.playerStoreCount[0]} />;
    } else {
      return <Store x={7} y={0.5} key={`store_${playerId}`} seedCount={this.props.G.playerStoreCount[1]} />;
    }
  }
  render() {
    return (
      <GameLayout gameArgs={this.props.gameArgs}>
        <h2>Hello worldd!</h2>
        <pre>{JSON.stringify(this.props.gameArgs, null, 2)}</pre>

        <svg width="100%" height="100%" viewBox="-100 -100 1000 1000">
          {this._renderStore(0)}
          {this._renderStore(1)}
          {this._renderHoles(0)}
          {this._renderHoles(1)}
        </svg>
      </GameLayout>
    );
  }
}
