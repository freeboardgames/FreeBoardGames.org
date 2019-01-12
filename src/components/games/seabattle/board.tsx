import * as React from 'react';
import * as PropTypes from 'prop-types';

import { ShipsPlacement } from './ShipsPlacement';
import { Token } from 'flamecoals-boardgame.io/ui';
import GameBar from '../../App/Game/GameBar';
import * as ReactGA from 'react-ga';
import { IShip } from './game';
import { Battle } from './Battle';

interface IBoardProps {
  G: any;
  ctx: any;
  moves: any;
  playerID: string;
  isActive: boolean;
  isConnected: boolean;
}

interface IBoardState {
  dismissedSharing: boolean;
}

export class Board extends React.Component<IBoardProps, IBoardState> {
  static propTypes = {
    G: PropTypes.any.isRequired,
    ctx: PropTypes.any.isRequired,
    moves: PropTypes.any.isRequired,
    playerID: PropTypes.string,
    isActive: PropTypes.bool,
    isConnected: PropTypes.bool,
  };

  render() {
    const ctx = this.props.ctx;
    if (ctx.gameover) {
      return (
        <GameBar>
          <h1>
            {(ctx.gameover.winner === this.props.playerID) ?
              'YOU WON' : 'YOU LOST'
            }
          </h1>
        </GameBar>
      );
    }
    if (ctx.phase === 'setup' &&
        (this.props.playerID === null ||
        ctx.actionPlayers.includes(this.props.playerID))) {
      return (
        <GameBar>
          <ShipsPlacement
            playerID={this.props.playerID}
            setShips={this._setShips}
          />
        </GameBar>
      );
    } else if (ctx.phase === 'setup') {
      return (
        <GameBar>
          <h1>
            Waiting for opponent...
          </h1>
        </GameBar>
      );
    } else {
      return (
        <GameBar>
          <Battle
            G={this.props.G}
            moves={this.props.moves}
            playerID={this.props.playerID}
            currentPlayer={ctx.currentPlayer}
          />
        </GameBar>
      );
    }
  }

  _setShips = (ships: IShip[]) => {
    this.props.moves.setShips(ships);
  }
}
