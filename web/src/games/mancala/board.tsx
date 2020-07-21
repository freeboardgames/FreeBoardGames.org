import * as React from 'react';
import { IGameArgs } from 'gamesShared/definitions/game';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { Ctx } from 'boardgame.io';
import { IG } from './game';
import { Hole, Store } from './Shapes';
import { isOnlineGame, isAIGame } from '../../gamesShared/helpers/gameMode';
import { localPlayerNames } from './constants';

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
    const invert = isOnlineGame(this.props.gameArgs) && this.props.playerID !== '0';
    const y = playerId ? (invert ? 1 : 0) : invert ? 0 : 1;
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
  _renderStore(playerId: string) {
    if (isOnlineGame(this.props.gameArgs)) {
      if (this.props.playerID === playerId) {
        return <Store x={7} y={0.5} key={`store_${playerId}`} seedCount={this.props.G.playerStoreCount[playerId]} />;
      } else {
        return <Store x={0} y={0.5} key={`store_${playerId}`} seedCount={this.props.G.playerStoreCount[playerId]} />;
      }
    } else {
      if (playerId === '0') {
        return <Store x={7} y={0.5} key={`store_${playerId}`} seedCount={this.props.G.playerStoreCount[playerId]} />;
      } else {
        return <Store x={0} y={0.5} key={`store_${playerId}`} seedCount={this.props.G.playerStoreCount[playerId]} />;
      }
    }
  }

  _getGameOver() {
    if (isOnlineGame(this.props.gameArgs)) {
      // Online game
      if (this.props.ctx.gameover.winner !== undefined) {
        if (this.props.ctx.gameover.winner === this.props.playerID) {
          return 'you won';
        } else {
          return 'you lost';
        }
      } else {
        return 'draw';
      }
    } else if (isAIGame(this.props.gameArgs)) {
      switch (this.props.ctx.gameover.winner) {
        case '0':
          return 'you won';
        case '1':
          return 'you lost';
        case undefined:
          return 'draw';
      }
    } else {
      // Local game
      switch (this.props.ctx.gameover.winner) {
        case '0':
          return localPlayerNames['0'] + ' won';
        case '1':
          return localPlayerNames['1'] + ' won';
        case undefined:
          return 'draw';
      }
    }
  }

  board() {
    let a = [];
    a.push(this._renderStore('0'));
    a.push(this._renderStore('1'));
    a.push(this._renderHoles(0));
    a.push(this._renderHoles(1));
    return (
      <svg width="100%" height="100%" viewBox="-100 -100 1000 1000">
        {a}
      </svg>
    );
  }

  render() {
    function GameStateMessage(props) {
      if (props.gameOver) {
        if (props.gameOver.draw) {
          return <h2>It&apos;s a draw!</h2>;
        }
        return <h2>Player {parseInt(props.gameOver.winner) + 1} wins!</h2>;
      }
      return <h2>Player {parseInt(props.currentPlayer) + 1}&apos;s turn</h2>;
    }

    if (this.props.ctx.gameover) {
      return (
        <GameLayout gameOver={this._getGameOver()} extraCardContent={this.board()} gameArgs={this.props.gameArgs} />
      );
    }

    return (
      <GameLayout gameArgs={this.props.gameArgs}>
        {/* <h2>Hello worldd!</h2> */}
        {/* <pre>{JSON.stringify(this.props.gameArgs, null, 2)}</pre> */}
        <GameStateMessage
          currentPlayer={this.props.ctx.currentPlayer}
          playerID={this.props.playerID}
          gameOver={this.props.ctx.gameover}
        ></GameStateMessage>

        {this.board()}
      </GameLayout>
    );
  }
}
