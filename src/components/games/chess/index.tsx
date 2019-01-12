import * as React from 'react';
import { Client } from 'flamecoals-boardgame.io/react';
import getBoard from './board';
import Chess from './game';
import { OpponentPicker, OpponentPickerOption } from '../../App/Game/OpponentPicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AlertLayer from '../../App/Game/AlertLayer';
import * as PropTypes from 'prop-types';
import { GameSharing } from '../../App/Game/GameSharing';

interface IChessMenuProps {
  match?: any;
  history?: { push: (url: string) => void };
}

const AVAILABLE_OPPONENTS = [
  OpponentPickerOption.Friend,
];

class ChessMenu extends React.Component<IChessMenuProps, {}> {
  state = {
    dismissedSharing: false,
  };
  render() {
    let alert: React.ReactNode = null;
    const opponentType = this.props.match.params.opponentType;
    const code = this.props.match.params.code;
    const playerID = this.props.match.params.playerID;
    if (!opponentType && !code) {
      alert = (
        <AlertLayer>
          <OpponentPicker
            gameCode="chess"
            history={this.props.history}
            options={AVAILABLE_OPPONENTS}
          />
        </AlertLayer>
      );
    }
    if (!this.state.dismissedSharing && code &&
         playerID === '0') {
      alert = (
        <AlertLayer>
          <GameSharing
            gameCode={'chess'}
            matchCode={code}
            playerID={playerID}
            onDismiss={this.dismissSharing}
          />
        </AlertLayer>
      );
    }
    const App = Client({
      game: Chess,
      board: getBoard(code),
      debug: false,
      multiplayer: true,
    }) as any;
    return (
      <div style={{width: '100%', height: '100%'}}>
        <App gameID={code} playerID={playerID} />
        <MuiThemeProvider>
          {alert}
        </MuiThemeProvider>
      </div>
    );
  }
  dismissSharing = () => {
    this.setState({
      ...this.state,
      dismissedSharing: true,
    });
  }
}

export default ChessMenu;
