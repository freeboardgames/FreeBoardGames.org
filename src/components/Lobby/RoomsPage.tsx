import React from 'react';
import FreeBoardGamesBar from 'components/App/FreeBoardGamesBar';
import Typography from '@material-ui/core/Typography';
import GamesWithRooms from 'components/Lobby/GamesWithRooms';
import { LobbyService } from 'components/Lobby/LobbyService';
import { Room } from 'dto/Room';
import Button from '@material-ui/core/Button';

interface Props {
  rooms: Room[];
  gameCode?: string;
}

export class RoomsPage extends React.Component<Props, {}> {
  render() {
    const gameCode = this.props.gameCode;
    return (
      <FreeBoardGamesBar FEATURE_FLAG_readyForDesktopView nicknameRequired>
        <div style={{ marginBottom: '16px' }}>
          <Typography
            component="h2"
            variant="h6"
            style={{ marginBottom: '24px', marginTop: '24px', marginLeft: '6px' }}
          >
            Rooms
          </Typography>
          <Button variant="contained" color="primary" onClick={this._createRoom}>
            Create
          </Button>
          <GamesWithRooms wantGameCode={gameCode} rooms={this.props.rooms} />
        </div>
      </FreeBoardGamesBar>
    );
  }

  _createRoom = () => {
    LobbyService.newRoom('chess', 2, false);
  };
}
