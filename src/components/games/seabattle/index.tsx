import * as React from 'react';
import { Client } from 'boardgame.io/react';
import { SeabattleGame } from './game';
import { OpponentPicker, OpponentPickerOption } from '../../App/Game/OpponentPicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AlertLayer from '../../App/Game/AlertLayer';
import * as PropTypes from 'prop-types';

interface ISeabattleMenuProps {
  match?: any;
  history?: { push: (url: string) => void };
}

const AVAILABLE_OPPONENTS = [
  OpponentPickerOption.Friend,
];

class SeabattleMenu extends React.Component<ISeabattleMenuProps, {}> {
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
              gameCode="seabattle"
              history={this.props.history}
              options={AVAILABLE_OPPONENTS}
            />
          </AlertLayer>
        </MuiThemeProvider>
      );
    }
    const App = Client({
      game: SeabattleGame,
      board: () => (<h1>Hello world</h1>),
      debug: false,
      multiplayer: true,
    }) as any;
    return (
      <div style={{width: '100%', height: '100%'}}>
        <App gameID={code} playerID={playerID} />
        {alert}
      </div>
    );
  }
}

export default SeabattleMenu;
