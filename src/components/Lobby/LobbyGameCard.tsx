import React from 'react';
import Card from '@material-ui/core/Card';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { lightBlue } from '@material-ui/core/colors';
import { Room } from '../../dto/Room';
import { IGameDef } from 'games';
import { GameCard } from 'components/App/Game/GameCard';
import { ListRooms } from './ListRooms';

const theme = createMuiTheme({
  palette: {
    secondary: lightBlue,
  },
});

interface Props {
  game: IGameDef;
  rooms: Room[];
}

export default class LobbyGameCard extends React.Component<Props, {}> {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Card>
          <GameCard game={this.props.game} />
          <ListRooms rooms={this.props.rooms} />
        </Card>
      </MuiThemeProvider>
    );
  }
}
