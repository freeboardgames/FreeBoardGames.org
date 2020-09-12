import * as React from 'react';
import { IGameArgs } from 'gamesShared/definitions/game';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { Ctx } from 'boardgame.io';
import { IG } from './game';
import { Hole, Store, BoardBackground } from './Shapes';
import { isOnlineGame, isAIGame } from '../../gamesShared/helpers/gameMode';
import { localPlayerNames, numOfHoles } from './constants';
import { PlayerBadges } from 'gamesShared/components/badges/PlayerBadges';

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
  onClick = (playerId: string, id: number) => {
    if (playerId === this.props.ctx.currentPlayer) this.props.moves.sowSeeds(playerId, id);
  };

  _renderHoles(playerId: string) {
    const holes = [];
    const startX = 1;
    const invert = isOnlineGame(this.props.gameArgs) && this.props.playerID !== '0';
    const y = playerId === '1' ? (invert ? 1 : 0) : invert ? 0 : 1;
    for (let i = 0; i < this.props.G.playerHoles[playerId].length; i++) {
      let x = i;
      if (!y) {
        x = numOfHoles - 1 - i;
      }
      holes.push(
        <Hole
          x={x + startX}
          y={y}
          key={`hole_${i}`}
          seedCount={this.props.G.playerHoles[playerId][i]}
          onClick={() => this.onClick(playerId, i)}
        />,
      );
    }
    return holes;
  }

  _renderStore(playerId: string) {
    if ((isOnlineGame(this.props.gameArgs) && this.props.playerID === playerId) || playerId === '0') {
      return (
        <Store
          x={numOfHoles + 1}
          y={0.8}
          key={`store_${playerId}`}
          seedCount={this.props.G.playerStoreCount[playerId]}
        />
      );
    } else {
      return <Store x={0} y={0.2} key={`store_${playerId}`} seedCount={this.props.G.playerStoreCount[playerId]} />;
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
    const viewBox = '-100 -10 ' + (numOfHoles + 3) * 100 + ' 120';
    return (
      <div>
        <PlayerBadges players={[this.props.gameArgs.players[1]]} playerID={this.props.playerID} ctx={this.props.ctx} />
        <svg width="100%" height="120px" viewBox={viewBox}>
          {<BoardBackground />}
          {[this._renderStore('0'), this._renderStore('1'), this._renderHoles('0'), this._renderHoles('1')]}
        </svg>
        <div style={{ float: 'right' }}>
          <PlayerBadges
            players={[this.props.gameArgs.players[0]]}
            playerID={this.props.playerID}
            ctx={this.props.ctx}
          />
        </div>
      </div>
    );
  }

  render() {
    if (this.props.ctx.gameover) {
      return (
        <GameLayout gameOver={this._getGameOver()} extraCardContent={this.board()} gameArgs={this.props.gameArgs} />
      );
    }

    return <GameLayout gameArgs={this.props.gameArgs}>{this.board()}</GameLayout>;
  }
}
