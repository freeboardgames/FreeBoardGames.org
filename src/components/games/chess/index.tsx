import * as React from 'react';
import * as shortid from 'shortid';
import { Redirect } from 'react-router';
import { Client } from 'boardgame.io/client';
import ChessBoard from './board';
import { Checkerboard } from './checkerboard';
import Chess from './game';
import GameBar from '../../App/Game/GameBar';
import { OpponentPicker, OpponentPickerOption } from '../../App/Game/OpponentPicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AlertLayer from '../../App/Game/AlertLayer';
import * as PropTypes from 'prop-types';

interface IChessMenuProps {
  match?: any;
  history?: { push: (url: string) => void };
}

const AVAILABLE_OPPONENTS = [
  OpponentPickerOption.Friend,
];

class ChessMenu extends React.Component<IChessMenuProps, {}> {
  render() {
    let alert: React.ReactNode = null;
    const opponentType = this.props.match.params.opponentType;
    const code = this.props.match.params.code;
    const playerID = this.props.match.params.playerID;
    if (!opponentType && !code) {
      alert = (
        <MuiThemeProvider>
          <AlertLayer>
            <OpponentPicker
              gameCode="chess"
              history={this.props.history}
              options={AVAILABLE_OPPONENTS}
            />
          </AlertLayer>
        </MuiThemeProvider>
      );
    }
    const App = Client({
      game: Chess,
      board: ChessBoard,
      debug: false,
      multiplayer: true,
    }) as any;
    return (
      <div style={{width: '100%', height: '100%'}}>
        <App gameId={code} playerID={playerID} />
        {alert}
      </div>
    );
  }
}

export default ChessMenu;
