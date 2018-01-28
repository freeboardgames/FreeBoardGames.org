import * as React from 'react';
import * as shortid from 'shortid';
import { Redirect } from 'react-router';
import { Client } from 'boardgame.io/client';
import ChessBoard from './board';
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
    if (!opponentType && !code) {
      alert = (
        <MuiThemeProvider>
          <AlertLayer>
            <OpponentPicker
              history={this.props.history}
              options={AVAILABLE_OPPONENTS}
            />
          </AlertLayer>
        </MuiThemeProvider>
      );
    }
    const client = Client({
      game: Chess,
      board: ChessBoard,
      debug: false,
    });
    return (
      <div style={{width: '100%', height: '100%'}}>
        {client}
        {alert}
      </div>
    );
  }
}

export default ChessMenu;
