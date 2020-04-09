import React from 'react';
import FreeBoardGamesBar from 'components/App/FreeBoardGamesBar';
import Typography from '@material-ui/core/Typography';
import GamesWithRooms from 'components/Lobby/GamesWithRooms';
import { LobbyService } from 'components/Lobby/LobbyService';
import { Room } from 'dto/Room';

interface State {
  rooms: Room[];
}

class Rooms extends React.Component<{}, State> {
  state = { rooms: [] };
  render() {
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
          <GamesWithRooms rooms={this.state.rooms} />
        </div>
      </FreeBoardGamesBar>
    );
  }

  async componentDidMount() {
    const rooms = await LobbyService.list();
    this.setState((oldState) => ({ ...oldState, rooms }));
  }
}

export default Rooms;
