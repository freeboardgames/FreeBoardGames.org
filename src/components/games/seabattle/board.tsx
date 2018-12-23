import * as React from 'react';
import * as PropTypes from 'prop-types';

import { ShipsPlacement } from './ShipsPlacement';
import { Token } from 'boardgame.io/ui';
import GameBar from '../../App/Game/GameBar';
import * as ReactGA from 'react-ga';

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

function getBoard(matchCode: string) {
  class Board extends React.Component<IBoardProps, IBoardState> {
    static propTypes = {
      G: PropTypes.any.isRequired,
      ctx: PropTypes.any.isRequired,
      moves: PropTypes.any.isRequired,
      playerID: PropTypes.string,
      isActive: PropTypes.bool,
      isConnected: PropTypes.bool,
    };

    render() {
      return (
        <GameBar>
          <ShipsPlacement
            playerID={this.props.ctx.currentPlayer}
            setShips={this._setShips}
          />
        </GameBar>
      );
    }

    _setShips() {
      alert('TODO _setShips');
    }
  }
  return Board;
}

export default getBoard;
